package com.ngmessage.ant.service;

import com.ngmessage.ant.config.ServerConfig;
import com.ngmessage.ant.db.DatabaseManager;
import com.ngmessage.ant.dto.*;
import com.ngmessage.ant.model.User;
import com.ngmessage.ant.util.PasswordUtil;

import java.util.HashMap;
import java.util.Map;

public class BiometricService {

    private final DatabaseManager db;
    private final FingerprintService fingerprintService;
    private final FaceRecognitionService faceRecognitionService;
    private final JwtService jwtService;
    private final ServerConfig config;

    public BiometricService(DatabaseManager db,
                            FingerprintService fingerprintService,
                            FaceRecognitionService faceRecognitionService,
                            JwtService jwtService,
                            ServerConfig config) {
        this.db = db;
        this.fingerprintService = fingerprintService;
        this.faceRecognitionService = faceRecognitionService;
        this.jwtService = jwtService;
        this.config = config;
    }

    /**
     * Standard Credentials Login (username and password)
     * If user is unenrolled with biometrics, login succeeds immediately.
     * If user has biometrics enrolled, prompts that biometric verification is required.
     */
    public AuthResponse loginCredentials(LoginRequest req) {
        AuthResponse response = new AuthResponse();

        if (req == null || req.getUsername() == null || req.getUsername().trim().isEmpty()) {
            response.setSuccess(false);
            response.setMessage("Username is required");
            return response;
        }

        if (req.getPassword() == null || req.getPassword().trim().isEmpty()) {
            response.setSuccess(false);
            response.setMessage("Password is required");
            return response;
        }

        User user = db.findUserByUsername(req.getUsername().trim());
        if (user == null) {
            response.setSuccess(false);
            response.setMessage("Invalid username or password");
            return response;
        }

        if (!PasswordUtil.verifyPassword(req.getPassword(), user.getPassword(), jwtService.getRawSecret())) {
            response.setSuccess(false);
            response.setMessage("Invalid username or password");
            return response;
        }

        boolean hasFace = user.hasFace();
        boolean hasFinger = user.hasFingerprint();

        if (hasFace || hasFinger) {
            response.setSuccess(false);
            response.setMessage("Biometric verification required for this account. Please sign in with your enrolled face or fingerprint.");
            response.setRequiresBiometric(true);
            response.setHasFace(hasFace);
            response.setHasFingerprint(hasFinger);
            return response;
        }

        String token = jwtService.generateToken(user.getId(), user.getUsername(), user.getName(), "ADMIN");
        response.setSuccess(true);
        response.setMessage("Login successful");
        response.setAccessToken(token);
        response.setRefreshToken(token);
        response.setRequiresBiometric(false);
        response.setHasFace(false);
        response.setHasFingerprint(false);
        response.setAppUserModel(buildAppUserModel(user));

        return response;
    }

    /**
     * API 1: Finger Biometric Login (3 parameters: username, password, finger)
     */
    public AuthResponse loginFinger(FingerLoginRequest req) {
        AuthResponse response = new AuthResponse();

        if (req == null || req.getUsername() == null || req.getUsername().trim().isEmpty()) {
            response.setSuccess(false);
            response.setMessage("Username is required");
            return response;
        }

        if (req.getPassword() == null || req.getPassword().trim().isEmpty()) {
            response.setSuccess(false);
            response.setMessage("Password is required");
            return response;
        }

        String finger = req.getFinger();
        if (finger == null || finger.trim().isEmpty()) {
            response.setSuccess(false);
            response.setMessage("Fingerprint biometric data ('finger') is required");
            return response;
        }

        User user = db.findUserByUsername(req.getUsername().trim());
        if (user == null) {
            response.setSuccess(false);
            response.setMessage("Invalid username or password");
            return response;
        }

        // Verify password
        if (!PasswordUtil.verifyPassword(req.getPassword(), user.getPassword(), jwtService.getRawSecret())) {
            response.setSuccess(false);
            response.setMessage("Invalid username or password");
            return response;
        }

        // Check if user has fingerprint enrolled
        if (!user.hasFingerprint()) {
            response.setSuccess(false);
            response.setRequiresBiometric(user.hasFace());
            response.setHasFace(user.hasFace());
            response.setHasFingerprint(false);
            if (user.hasFace()) {
                response.setMessage("User is not enrolled for fingerprint scan. Please sign in using face scan.");
            } else {
                response.setMessage("No fingerprint template enrolled for user '" + user.getUsername() + "'. Please register fingerprint first.");
            }
            return response;
        }

        // Match fingerprint
        BiometricMatchResult matchResult = fingerprintService.match(finger, user.getFingerprintTemplate());
        response.setBiometricMatchResult(matchResult);

        if (!matchResult.isMatched()) {
            response.setSuccess(false);
            response.setMessage(String.format("Biometric fingerprint did not match enrolled template (Score: %.2f, Required: %.2f)",
                    matchResult.getScore(), matchResult.getThreshold()));
            response.setRequiresBiometric(true);
            response.setHasFingerprint(true);
            response.setHasFace(user.hasFace());
            return response;
        }

        // Generate JWT token
        String token = jwtService.generateToken(user.getId(), user.getUsername(), user.getName(), "ADMIN");
        response.setSuccess(true);
        response.setMessage("Fingerprint biometric login successful!");
        response.setAccessToken(token);
        response.setRefreshToken(token);
        response.setRequiresBiometric(true);
        response.setHasFingerprint(true);
        response.setHasFace(user.hasFace());
        response.setAppUserModel(buildAppUserModel(user));

        return response;
    }

    /**
     * API 2: Face Biometric Login (3 parameters: username, password, face)
     */
    public AuthResponse loginFace(FaceLoginRequest req) {
        AuthResponse response = new AuthResponse();

        if (req == null || req.getUsername() == null || req.getUsername().trim().isEmpty()) {
            response.setSuccess(false);
            response.setMessage("Username is required");
            return response;
        }

        if (req.getPassword() == null || req.getPassword().trim().isEmpty()) {
            response.setSuccess(false);
            response.setMessage("Password is required");
            return response;
        }

        String face = req.getFace();
        if (face == null || face.trim().isEmpty()) {
            response.setSuccess(false);
            response.setMessage("Face biometric data ('face') is required");
            return response;
        }

        User user = db.findUserByUsername(req.getUsername().trim());
        if (user == null) {
            response.setSuccess(false);
            response.setMessage("Invalid username or password");
            return response;
        }

        // Verify password
        if (!PasswordUtil.verifyPassword(req.getPassword(), user.getPassword(), jwtService.getRawSecret())) {
            response.setSuccess(false);
            response.setMessage("Invalid username or password");
            return response;
        }

        // Check if user has face enrolled
        if (!user.hasFace()) {
            response.setSuccess(false);
            response.setRequiresBiometric(user.hasFingerprint());
            response.setHasFace(false);
            response.setHasFingerprint(user.hasFingerprint());
            if (user.hasFingerprint()) {
                response.setMessage("User is not enrolled for face scan. Please sign in using fingerprint.");
            } else {
                response.setMessage("No face template enrolled for user '" + user.getUsername() + "'. Please register face first.");
            }
            return response;
        }

        // Match face
        BiometricMatchResult matchResult = faceRecognitionService.match(face, user.getFaceTemplate());
        response.setBiometricMatchResult(matchResult);

        if (!matchResult.isMatched()) {
            response.setSuccess(false);
            response.setMessage(String.format("Biometric face did not match enrolled template (Score: %.4f, Required: %.2f)",
                    matchResult.getScore(), matchResult.getThreshold()));
            response.setRequiresBiometric(true);
            response.setHasFace(true);
            response.setHasFingerprint(user.hasFingerprint());
            return response;
        }

        // Generate JWT token
        String token = jwtService.generateToken(user.getId(), user.getUsername(), user.getName(), "ADMIN");
        response.setSuccess(true);
        response.setMessage("Face biometric login successful!");
        response.setAccessToken(token);
        response.setRefreshToken(token);
        response.setRequiresBiometric(true);
        response.setHasFace(true);
        response.setHasFingerprint(user.hasFingerprint());
        response.setAppUserModel(buildAppUserModel(user));

        return response;
    }

    /**
     * API 3: Finger Biometric Registration (3 parameters: username, password, finger)
     */
    public Map<String, Object> registerFinger(FingerRegisterRequest req) {
        Map<String, Object> res = new HashMap<>();

        if (req == null || req.getUsername() == null || req.getUsername().trim().isEmpty()) {
            res.put("success", false);
            res.put("message", "Username is required");
            return res;
        }

        if (req.getPassword() == null || req.getPassword().trim().isEmpty()) {
            res.put("success", false);
            res.put("message", "Password is required");
            return res;
        }

        String finger = req.getFinger();
        if (finger == null || finger.trim().isEmpty()) {
            res.put("success", false);
            res.put("message", "Fingerprint data ('finger') is required");
            return res;
        }

        User user = db.findUserByUsername(req.getUsername().trim());
        if (user == null) {
            res.put("success", false);
            res.put("message", "User not found");
            return res;
        }

        if (!PasswordUtil.verifyPassword(req.getPassword(), user.getPassword(), jwtService.getRawSecret())) {
            res.put("success", false);
            res.put("message", "Password verification failed");
            return res;
        }

        try {
            System.out.println("🖐️ [SourceAFIS] Enrolling fingerprint for user '" + user.getUsername() + "'...");
            String template = fingerprintService.extractTemplateFromImage(finger);
            boolean updated = db.updateFingerprintTemplate(user.getUsername(), template);

            if (updated) {
                res.put("success", true);
                res.put("message", "Fingerprint template registered successfully for user '" + user.getUsername() + "'");
                res.put("username", user.getUsername());
                res.put("biometricType", "fingerprint");
                res.put("engine", "SourceAFIS 3.18.1");
            } else {
                res.put("success", false);
                res.put("message", "Failed to persist fingerprint template in database");
            }
        } catch (Exception e) {
            System.err.println("❌ Fingerprint registration failed: " + e.getMessage());
            res.put("success", false);
            res.put("message", "Fingerprint enrollment error: " + e.getMessage());
        }

        return res;
    }

    /**
     * API 4: Face Biometric Registration (3 parameters: username, password, face)
     */
    public Map<String, Object> registerFace(FaceRegisterRequest req) {
        Map<String, Object> res = new HashMap<>();

        if (req == null || req.getUsername() == null || req.getUsername().trim().isEmpty()) {
            res.put("success", false);
            res.put("message", "Username is required");
            return res;
        }

        if (req.getPassword() == null || req.getPassword().trim().isEmpty()) {
            res.put("success", false);
            res.put("message", "Password is required");
            return res;
        }

        String face = req.getFace();
        if (face == null || face.trim().isEmpty()) {
            res.put("success", false);
            res.put("message", "Face data ('face') is required");
            return res;
        }

        User user = db.findUserByUsername(req.getUsername().trim());
        if (user == null) {
            res.put("success", false);
            res.put("message", "User not found");
            return res;
        }

        if (!PasswordUtil.verifyPassword(req.getPassword(), user.getPassword(), jwtService.getRawSecret())) {
            res.put("success", false);
            res.put("message", "Password verification failed");
            return res;
        }

        try {
            System.out.println("👤 [FaceEngine] Enrolling face for user '" + user.getUsername() + "'...");
            String template = faceRecognitionService.extractTemplateJson(face);
            boolean updated = db.updateFaceTemplate(user.getUsername(), template);

            if (updated) {
                res.put("success", true);
                res.put("message", "Face biometric template registered successfully for user '" + user.getUsername() + "'");
                res.put("username", user.getUsername());
                res.put("biometricType", "face");
                res.put("engine", "Pure Java Spatial-LBPH Face Matcher");
            } else {
                res.put("success", false);
                res.put("message", "Failed to persist face template in database");
            }
        } catch (Exception e) {
            System.err.println("❌ Face registration failed: " + e.getMessage());
            res.put("success", false);
            res.put("message", "Face enrollment error: " + e.getMessage());
        }

        return res;
    }

    /**
     * Check user biometric enrollment status
     */
    public UserBiometricInfo getUserBiometricInfo(String username) {
        User user = db.findUserByUsername(username);
        if (user == null) {
            return new UserBiometricInfo(username, false, false, false, null, null);
        }
        boolean hasFinger = user.hasFingerprint();
        boolean hasFace = user.hasFace();
        boolean reqBio = hasFinger || hasFace;

        return new UserBiometricInfo(user.getUsername(), hasFinger, hasFace, reqBio,
                user.getFingerprintEnrolledAt(), user.getFaceEnrolledAt());
    }

    private Map<String, Object> buildAppUserModel(User user) {
        Map<String, Object> map = new HashMap<>();
        map.put("id", user.getId());
        map.put("username", user.getUsername());
        map.put("name", user.getName());
        map.put("shortName", user.getUsername());
        map.put("defaultUsername", user.getUsername());
        map.put("displayName", user.getName());
        map.put("title", user.getPositionTitle());
        map.put("role", "ADMIN");
        return map;
    }
}
