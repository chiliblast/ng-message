package com.ngmessage.service;

import com.ngmessage.dto.*;
import com.ngmessage.model.User;
import com.ngmessage.repository.UserRepository;
import com.ngmessage.util.JwtUtil;
import com.ngmessage.util.PasswordUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class AuthService {

    private static final Logger log = LoggerFactory.getLogger(AuthService.class);

    private final UserRepository userRepository;
    private final BiometricService biometricService;
    private final JwtUtil jwtUtil;

    @Value("${biometric.auto-enroll-on-first-login:true}")
    private boolean autoEnrollOnFirstLogin;

    public AuthService(UserRepository userRepository,
                       BiometricService biometricService,
                       JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.biometricService = biometricService;
        this.jwtUtil = jwtUtil;
    }

    /**
     * Unified Login: Authenticates username, password, and biometric sample (fingerprint or face)
     * in a single atomic operation.
     */
    @Transactional
    public LoginResponse loginWithBiometric(BiometricLoginRequest request) {
        log.info("🔐 Unified Biometric Login attempt for username: '{}', type: '{}'",
                request.getUsername(), request.getBiometricType());

        // 1. Look up user (by username or full name)
        User user = userRepository.findByUsername(request.getUsername())
                .or(() -> userRepository.findByName(request.getUsername()))
                .orElse(null);

        if (user == null) {
            log.warn("❌ User '{}' not found in database", request.getUsername());
            return LoginResponse.builder()
                    .success(false)
                    .message("Invalid username or password")
                    .build();
        }

        // 2. Validate password hash (HMAC-SHA256 matching Node server)
        boolean passwordValid = PasswordUtil.verifyPassword(
                request.getPassword(),
                user.getPassword(),
                jwtUtil.getSecretKey()
        );

        if (!passwordValid) {
            log.warn("❌ Password verification failed for user '{}'", request.getUsername());
            return LoginResponse.builder()
                    .success(false)
                    .message("Invalid username or password")
                    .build();
        }

        log.info("✅ Password verified successfully for user '{}'", request.getUsername());

        boolean hasFace = user.getFaceTemplate() != null && !user.getFaceTemplate().trim().isEmpty();
        boolean hasFinger = user.getFingerprintTemplate() != null && !user.getFingerprintTemplate().trim().isEmpty();

        // 3. If user has NOT enrolled for face and fingerprint, let user sign in with username and password!
        if (!hasFace && !hasFinger) {
            log.info("ℹ️ User '{}' has not enrolled for face and fingerprint. Letting user sign in with username and password.",
                    user.getUsername());

            String token = jwtUtil.generateToken(user.getUsername(), "ADMIN");
            AppUserModel appUserModel = AppUserModel.builder()
                    .id(user.getId())
                    .uuid(UUID.randomUUID().toString())
                    .role("ADMIN")
                    .defaultUsername(user.getUsername())
                    .displayName(user.getName() != null ? user.getName() : user.getUsername().toUpperCase())
                    .shortName(user.getUsername())
                    .username(user.getUsername())
                    .title(user.getPositionTitle())
                    .build();

            return LoginResponse.builder()
                    .success(true)
                    .message("User has not enrolled biometrics. Login successful with username and password.")
                    .accessToken(token)
                    .refreshToken(token)
                    .loginLogId(user.getId())
                    .groupUserUuid("group_user_uuid")
                    .appUserModel(appUserModel)
                    .requiresBiometric(false)
                    .hasFace(false)
                    .hasFingerprint(false)
                    .build();
        }

        // 4. Biometric Verification for enrolled user
        String biometricType = biometricService.normalizeBiometricType(request.getBiometricType());
        boolean isFace = "face".equalsIgnoreCase(biometricType);
        String enrolledTemplate = isFace ? user.getFaceTemplate() : user.getFingerprintTemplate();

        if (enrolledTemplate == null || enrolledTemplate.trim().isEmpty()) {
            String enrolledModality = isFace ? "fingerprint" : "face scan";
            log.warn("⚠️ User '{}' requested {} authentication, but has only enrolled with {}.",
                    user.getUsername(), biometricType, enrolledModality);
            return LoginResponse.builder()
                    .success(false)
                    .message(String.format("User '%s' is not enrolled for %s scan. Please sign in using %s.",
                            user.getUsername(), biometricType, enrolledModality))
                    .requiresBiometric(true)
                    .hasFace(hasFace)
                    .hasFingerprint(hasFinger)
                    .build();
        }

        if (request.getBase64Image() == null || request.getBase64Image().trim().isEmpty()) {
            log.warn("⚠️ User '{}' is enrolled for {} but provided no biometric image.", user.getUsername(), biometricType);
            return LoginResponse.builder()
                    .success(false)
                    .message(String.format("Biometric %s image is required for enrolled user '%s'.",
                            biometricType, user.getUsername()))
                    .requiresBiometric(true)
                    .hasFace(hasFace)
                    .hasFingerprint(hasFinger)
                    .build();
        }

        // Strict Biometric Match against enrolled template
        BiometricMatchResult matchResult = biometricService.verifyBiometric(user, request.getBase64Image(), biometricType);

        if (!matchResult.isMatched()) {
            log.warn("❌ Biometric {} match rejected for user '{}'. Score: {} (Threshold: {})",
                    biometricType, user.getUsername(), matchResult.getScore(), matchResult.getThreshold());
            return LoginResponse.builder()
                    .success(false)
                    .message(String.format("Biometric %s did not match enrolled template (Score: %.2f, Required: %.2f)",
                            biometricType, matchResult.getScore(), matchResult.getThreshold()))
                    .biometricMatchResult(matchResult)
                    .requiresBiometric(true)
                    .hasFace(hasFace)
                    .hasFingerprint(hasFinger)
                    .build();
        }
        log.info("✅ Biometric {} match passed for user '{}' with score: {}",
                biometricType, user.getUsername(), matchResult.getScore());

        // 5. Generate JWT and build response
        String token = jwtUtil.generateToken(user.getUsername(), "ADMIN");

        AppUserModel appUserModel = AppUserModel.builder()
                .id(user.getId())
                .uuid(UUID.randomUUID().toString())
                .role("ADMIN")
                .defaultUsername(user.getUsername())
                .displayName(user.getName() != null ? user.getName() : user.getUsername().toUpperCase())
                .shortName(user.getUsername())
                .username(user.getUsername())
                .title(user.getPositionTitle())
                .build();

        return LoginResponse.builder()
                .success(true)
                .message(String.format("%s and credentials authentication successful!",
                        isFace ? "Face recognition" : "Biometric fingerprint"))
                .accessToken(token)
                .refreshToken(token)
                .loginLogId(user.getId())
                .groupUserUuid("group_user_uuid")
                .appUserModel(appUserModel)
                .biometricMatchResult(matchResult)
                .requiresBiometric(true)
                .hasFace(hasFace)
                .hasFingerprint(hasFinger)
                .build();
    }

    /**
     * Standard credentials login (username + password) without biometric scan.
     * Allowed only if the user has NOT enrolled for face and fingerprint.
     */
    @Transactional
    public LoginResponse login(LoginRequest request) {
        log.info("🔑 Standard credentials login attempt for username: '{}'", request.getUsername());

        User user = userRepository.findByUsername(request.getUsername())
                .or(() -> userRepository.findByName(request.getUsername()))
                .orElse(null);

        if (user == null) {
            log.warn("❌ User '{}' not found in database", request.getUsername());
            return LoginResponse.builder()
                    .success(false)
                    .message("Invalid username or password")
                    .build();
        }

        boolean passwordValid = PasswordUtil.verifyPassword(
                request.getPassword(),
                user.getPassword(),
                jwtUtil.getSecretKey()
        );

        if (!passwordValid) {
            log.warn("❌ Password verification failed for user '{}'", request.getUsername());
            return LoginResponse.builder()
                    .success(false)
                    .message("Invalid username or password")
                    .build();
        }

        boolean hasFace = user.getFaceTemplate() != null && !user.getFaceTemplate().trim().isEmpty();
        boolean hasFinger = user.getFingerprintTemplate() != null && !user.getFingerprintTemplate().trim().isEmpty();

        // If user HAS enrolled face or fingerprint, require biometric authentication
        if (hasFace || hasFinger) {
            log.warn("⚠️ User '{}' is enrolled for biometrics (face: {}, fingerprint: {}). Rejecting credentials-only login.",
                    user.getUsername(), hasFace, hasFinger);
            return LoginResponse.builder()
                    .success(false)
                    .message("Biometric verification required for this account. Please sign in with your enrolled face or fingerprint.")
                    .requiresBiometric(true)
                    .hasFace(hasFace)
                    .hasFingerprint(hasFinger)
                    .build();
        }

        log.info("✅ User '{}' has not enrolled for face and fingerprint. Allowing sign-in with username and password.",
                user.getUsername());

        String token = jwtUtil.generateToken(user.getUsername(), "ADMIN");

        AppUserModel appUserModel = AppUserModel.builder()
                .id(user.getId())
                .uuid(UUID.randomUUID().toString())
                .role("ADMIN")
                .defaultUsername(user.getUsername())
                .displayName(user.getName() != null ? user.getName() : user.getUsername().toUpperCase())
                .shortName(user.getUsername())
                .username(user.getUsername())
                .title(user.getPositionTitle())
                .build();

        return LoginResponse.builder()
                .success(true)
                .message("Login successful")
                .accessToken(token)
                .refreshToken(token)
                .loginLogId(user.getId())
                .groupUserUuid("group_user_uuid")
                .appUserModel(appUserModel)
                .requiresBiometric(false)
                .hasFace(false)
                .hasFingerprint(false)
                .build();
    }

    /**
     * Enrolls or updates biometric template for a user.
     */
    @Transactional
    public LoginResponse registerBiometric(BiometricRegisterRequest request) {
        log.info("📝 Registering biometric for user: '{}', type: '{}'",
                request.getUsername(), request.getBiometricType());

        User user = userRepository.findByUsername(request.getUsername())
                .or(() -> userRepository.findByName(request.getUsername()))
                .orElse(null);

        if (user == null) {
            return LoginResponse.builder()
                    .success(false)
                    .message("User not found: " + request.getUsername())
                    .build();
        }

        // If password is provided, verify it first
        if (request.getPassword() != null && !request.getPassword().isEmpty()) {
            boolean passwordValid = PasswordUtil.verifyPassword(
                    request.getPassword(),
                    user.getPassword(),
                    jwtUtil.getSecretKey()
            );
            if (!passwordValid) {
                return LoginResponse.builder()
                        .success(false)
                        .message("Invalid password for user")
                        .build();
            }
        }

        String bType = biometricService.normalizeBiometricType(request.getBiometricType());
        biometricService.enrollBiometric(user, request.getBase64Image(), bType);
        userRepository.save(user);

        log.info("✅ Successfully enrolled {} for user '{}'", bType, user.getUsername());

        return LoginResponse.builder()
                .success(true)
                .message(String.format("%s biometric registered successfully for '%s'",
                        bType.substring(0, 1).toUpperCase() + bType.substring(1), user.getUsername()))
                .build();
    }
}
