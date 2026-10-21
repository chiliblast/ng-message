package com.ngmessage.controller;

import com.ngmessage.dto.BiometricLoginRequest;
import com.ngmessage.dto.BiometricRegisterRequest;
import com.ngmessage.dto.LoginRequest;
import com.ngmessage.dto.LoginResponse;
import com.ngmessage.model.User;
import com.ngmessage.repository.UserRepository;
import com.ngmessage.service.AuthService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    private final AuthService authService;
    private final UserRepository userRepository;

    public AuthController(AuthService authService, UserRepository userRepository) {
        this.authService = authService;
        this.userRepository = userRepository;
    }

    /**
     * Standard Credentials Login endpoint (username + password).
     */
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        log.info("📥 [POST /api/auth/login] User: {}", request.getUsername());
        LoginResponse response = authService.login(request);
        if (response.isSuccess()) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    /**
     * Unified Biometric & Credentials Login endpoint.
     * Receives username, password, and biometric Base64 image (fingerprint or face).
     * Validates credentials against MySQL and matches biometrics using SourceAFIS / Face Recognition Engine.
     */
    @PostMapping("/login-with-biometric")
    public ResponseEntity<LoginResponse> loginWithBiometric(@Valid @RequestBody BiometricLoginRequest request) {
        log.info("📥 [POST /api/auth/login-with-biometric] User: {}, Type: {}",
                request.getUsername(), request.getBiometricType());

        LoginResponse response = authService.loginWithBiometric(request);

        if (response.isSuccess()) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    /**
     * Alias for client fallback compatibility.
     */
    @PostMapping("/login-raw-biometric")
    public ResponseEntity<LoginResponse> loginRawBiometric(@Valid @RequestBody BiometricLoginRequest request) {
        return loginWithBiometric(request);
    }

    /**
     * Biometric Registration endpoint.
     * Enrolls fingerprint (SourceAFIS minutiae template) or face template for a user.
     */
    @PostMapping("/register-biometric")
    public ResponseEntity<LoginResponse> registerBiometric(@Valid @RequestBody BiometricRegisterRequest request) {
        log.info("📥 [POST /api/auth/register-biometric] User: {}, Type: {}",
                request.getUsername(), request.getBiometricType());

        LoginResponse response = authService.registerBiometric(request);
        if (response.isSuccess()) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }

    /**
     * Alias for client fallback compatibility.
     */
    @PostMapping("/register-raw-biometric")
    public ResponseEntity<LoginResponse> registerRawBiometric(@Valid @RequestBody BiometricRegisterRequest request) {
        return registerBiometric(request);
    }

    /**
     * Checks enrollment status of a user (whether fingerprint and/or face is enrolled).
     */
    @GetMapping("/user/{username}/biometrics")
    public ResponseEntity<?> getBiometricStatus(@PathVariable String username) {
        User user = userRepository.findByUsername(username)
                .or(() -> userRepository.findByName(username))
                .orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "User not found"));
        }

        boolean hasFingerprint = user.getFingerprintTemplate() != null && !user.getFingerprintTemplate().trim().isEmpty();
        boolean hasFace = user.getFaceTemplate() != null && !user.getFaceTemplate().trim().isEmpty();

        Map<String, Object> status = new HashMap<>();
        status.put("username", user.getUsername());
        status.put("hasFingerprint", hasFingerprint);
        status.put("hasFace", hasFace);
        status.put("requiresBiometric", hasFingerprint || hasFace);
        status.put("fingerprintEnrolledAt", user.getFingerprintEnrolledAt());
        status.put("faceEnrolledAt", user.getFaceEnrolledAt());

        return ResponseEntity.ok(status);
    }

    /**
     * Health check endpoint returning status of biometric services.
     */
    @GetMapping("/health")
    public ResponseEntity<?> health() {
        Map<String, Object> health = new HashMap<>();
        health.put("status", "UP");
        health.put("service", "NG-Message Java Biometric Authentication Server");
        health.put("fingerprintEngine", "SourceAFIS 3.18.1 (Robert Vazan minutiae extraction)");
        health.put("faceEngine", "Pure Java Spatial-LBPH Face Recognition");
        health.put("mode", "100% Offline");
        return ResponseEntity.ok(health);
    }
}
