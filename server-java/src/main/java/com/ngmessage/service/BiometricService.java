package com.ngmessage.service;

import com.ngmessage.dto.BiometricMatchResult;
import com.ngmessage.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

/**
 * Unified Biometric Orchestration Service.
 * Coordinates fingerprint minutiae matching via Robert Vazan's SourceAFIS
 * and face recognition matching via the offline Face Recognition Engine.
 */
@Service
public class BiometricService {

    private static final Logger log = LoggerFactory.getLogger(BiometricService.class);

    private final FingerprintService fingerprintService;
    private final FaceRecognitionService faceRecognitionService;

    public BiometricService(FingerprintService fingerprintService,
                            FaceRecognitionService faceRecognitionService) {
        this.fingerprintService = fingerprintService;
        this.faceRecognitionService = faceRecognitionService;
    }

    /**
     * Verifies the probe biometric image against the user's enrolled biometric template.
     *
     * @param user Enrolled user entity from database
     * @param probeBase64 Base64 image captured from scanner or camera
     * @param requestedType 'fingerprint' or 'face' (defaults to 'fingerprint')
     * @return BiometricMatchResult containing match boolean and score
     */
    public BiometricMatchResult verifyBiometric(User user, String probeBase64, String requestedType) {
        String type = normalizeBiometricType(requestedType);

        if ("face".equalsIgnoreCase(type)) {
            String faceTemplate = user.getFaceTemplate();
            if (faceTemplate == null || faceTemplate.trim().isEmpty()) {
                log.warn("⚠️ User '{}' does not have an enrolled face template in database", user.getUsername());
                return BiometricMatchResult.builder()
                        .matched(false)
                        .biometricType("face")
                        .score(0.0)
                        .threshold(faceRecognitionService.getMatchThreshold())
                        .engine("Pure Java Spatial-LBPH Face Matcher")
                        .details("No face biometric enrolled for this user. Please enroll first.")
                        .build();
            }
            return faceRecognitionService.match(probeBase64, faceTemplate);
        } else {
            // Fingerprint mode (SourceAFIS)
            String fpTemplate = user.getFingerprintTemplate();
            if (fpTemplate == null || fpTemplate.trim().isEmpty()) {
                log.warn("⚠️ User '{}' does not have an enrolled fingerprint template in database", user.getUsername());
                return BiometricMatchResult.builder()
                        .matched(false)
                        .biometricType("fingerprint")
                        .score(0.0)
                        .threshold(fingerprintService.getMatchThreshold())
                        .engine("SourceAFIS 3.18 (Robert Vazan)")
                        .details("No fingerprint biometric enrolled for this user. Please enroll first.")
                        .build();
            }
            return fingerprintService.match(probeBase64, fpTemplate);
        }
    }

    /**
     * Extracts and enrolls a new biometric template for the user.
     *
     * @param user User entity to update
     * @param base64Image Raw base64 biometric image
     * @param requestedType 'fingerprint' or 'face'
     */
    public void enrollBiometric(User user, String base64Image, String requestedType) {
        String type = normalizeBiometricType(requestedType);

        if ("face".equalsIgnoreCase(type)) {
            log.info("👤 Enrolling face biometric for user '{}'", user.getUsername());
            String faceTemplateJson = faceRecognitionService.extractTemplateJson(base64Image);
            user.setFaceTemplate(faceTemplateJson);
            user.setFaceEnrolledAt(LocalDateTime.now());
        } else {
            log.info("🖐️ Enrolling SourceAFIS fingerprint biometric for user '{}'", user.getUsername());
            String fpTemplateJson = fingerprintService.extractTemplateFromJson(base64Image);
            user.setFingerprintTemplate(fpTemplateJson);
            user.setFingerprintEnrolledAt(LocalDateTime.now());
        }
    }

    public String normalizeBiometricType(String raw) {
        if (raw == null || raw.trim().isEmpty()) {
            return "fingerprint";
        }
        String clean = raw.trim().toLowerCase();
        if (clean.contains("face")) {
            return "face";
        }
        return "fingerprint";
    }

    public FingerprintService getFingerprintService() {
        return fingerprintService;
    }

    public FaceRecognitionService getFaceRecognitionService() {
        return faceRecognitionService;
    }
}
