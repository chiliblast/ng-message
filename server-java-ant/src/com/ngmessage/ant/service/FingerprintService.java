package com.ngmessage.ant.service;

import com.machinezoo.sourceafis.FingerprintImage;
import com.machinezoo.sourceafis.FingerprintImageOptions;
import com.machinezoo.sourceafis.FingerprintMatcher;
import com.machinezoo.sourceafis.FingerprintTemplate;
import com.ngmessage.ant.config.ServerConfig;
import com.ngmessage.ant.dto.BiometricMatchResult;
import com.ngmessage.ant.util.ImageUtils;

import java.util.Base64;

public class FingerprintService {

    private final double matchThreshold;

    public FingerprintService(ServerConfig config) {
        this.matchThreshold = config.getFingerprintThreshold();
    }

    public String extractTemplateFromImage(String base64Image) {
        byte[] imageBytes = ImageUtils.extractBytesFromBase64(base64Image);
        FingerprintTemplate template = createTemplate(imageBytes);
        return Base64.getEncoder().encodeToString(template.toByteArray());
    }

    public FingerprintTemplate createTemplate(byte[] imageBytes) {
        FingerprintImage image = new FingerprintImage(imageBytes, new FingerprintImageOptions().dpi(500));
        return new FingerprintTemplate(image);
    }

    public FingerprintTemplate deserializeCandidate(String storedCandidate) {
        if (storedCandidate == null || storedCandidate.trim().isEmpty()) {
            throw new IllegalArgumentException("Stored candidate fingerprint template is empty");
        }

        String candidate = storedCandidate.trim();
        byte[] rawBytes = ImageUtils.extractBytesFromBase64(candidate);

        // Try deserializing as SourceAFIS binary template first
        try {
            return new FingerprintTemplate(rawBytes);
        } catch (Exception e) {
            // If raw image bytes instead of binary template, extract template from image
            return createTemplate(rawBytes);
        }
    }

    public BiometricMatchResult match(String probeBase64, String candidateTemplate) {
        try {
            byte[] probeBytes = ImageUtils.extractBytesFromBase64(probeBase64);
            FingerprintTemplate probe = createTemplate(probeBytes);
            FingerprintTemplate candidate = deserializeCandidate(candidateTemplate);

            FingerprintMatcher matcher = new FingerprintMatcher(probe);
            double similarity = matcher.match(candidate);

            boolean isMatch = similarity >= matchThreshold;

            System.out.printf("🖐️ [SourceAFIS] Match Score: %.2f (Threshold: %.2f). Result: %s%n",
                    similarity, matchThreshold, isMatch ? "MATCH SUCCESSFUL ✅" : "MATCH FAILED ❌");

            return new BiometricMatchResult(
                    isMatch,
                    "fingerprint",
                    similarity,
                    matchThreshold,
                    "SourceAFIS 3.18.1 (Robert Vazan)",
                    isMatch ? "Fingerprint minutiae matched candidate with high confidence."
                            : "Fingerprint minutiae similarity score below threshold."
            );

        } catch (Exception e) {
            System.err.println("❌ [SourceAFIS] Fingerprint matching error: " + e.getMessage());
            return new BiometricMatchResult(
                    false,
                    "fingerprint",
                    0.0,
                    matchThreshold,
                    "SourceAFIS 3.18.1",
                    "Fingerprint matching failed: " + e.getMessage()
            );
        }
    }

    public double getMatchThreshold() {
        return matchThreshold;
    }
}
