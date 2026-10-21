package com.ngmessage.service;

import com.machinezoo.sourceafis.FingerprintImage;
import com.machinezoo.sourceafis.FingerprintImageOptions;
import com.machinezoo.sourceafis.FingerprintMatcher;
import com.machinezoo.sourceafis.FingerprintTemplate;
import com.ngmessage.dto.BiometricMatchResult;
import com.ngmessage.util.ImageUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class FingerprintService {

    private static final Logger log = LoggerFactory.getLogger(FingerprintService.class);

    @Value("${biometric.fingerprint.threshold:40.0}")
    private double matchThreshold;

    /**
     * Extracts a SourceAFIS minutiae template from a raw base64 fingerprint image,
     * and returns the serialized JSON representation suitable for database storage.
     *
     * @param base64Image Probe or enrollment base64 string
     * @return Serialized SourceAFIS template JSON
     */
    public String extractTemplateFromJson(String base64Image) {
        byte[] imageBytes = ImageUtils.extractBytesFromBase64(base64Image);
        FingerprintTemplate template = createTemplate(imageBytes);
        return Base64.getEncoder().encodeToString(template.toByteArray());
    }

    /**
     * Creates a SourceAFIS FingerprintTemplate from raw image bytes.
     */
    public FingerprintTemplate createTemplate(byte[] imageBytes) {
        FingerprintImage image = new FingerprintImage(imageBytes, new FingerprintImageOptions().dpi(500));
        return new FingerprintTemplate(image);
    }

    /**
     * Deserializes a stored candidate template (which may be Base64-encoded binary template or raw base64 image).
     */
    public FingerprintTemplate deserializeCandidate(String storedCandidate) {
        if (storedCandidate == null || storedCandidate.trim().isEmpty()) {
            throw new IllegalArgumentException("Stored candidate fingerprint template is empty");
        }

        String candidate = storedCandidate.trim();

        // Decode Base64 string
        byte[] rawBytes = ImageUtils.extractBytesFromBase64(candidate);

        // Try deserializing as SourceAFIS binary template first
        try {
            return new FingerprintTemplate(rawBytes);
        } catch (Exception e) {
            // If not a binary template (e.g. raw captured fingerprint image bytes), extract template from image
            log.info("Candidate is raw image rather than serialized template; extracting minutiae...");
            return createTemplate(rawBytes);
        }
    }


    /**
     * Matches a probe fingerprint base64 image against an enrolled candidate template.
     *
     * @param probeBase64 The base64 fingerprint image provided by the user at sign-in
     * @param candidateTemplate The enrolled template stored in the database
     * @return BiometricMatchResult with similarity score and match decision
     */
    public BiometricMatchResult match(String probeBase64, String candidateTemplate) {
        try {
            log.info("🖐️ [SourceAFIS] Processing probe fingerprint for match...");
            byte[] probeBytes = ImageUtils.extractBytesFromBase64(probeBase64);
            FingerprintTemplate probe = createTemplate(probeBytes);

            FingerprintTemplate candidate = deserializeCandidate(candidateTemplate);

            FingerprintMatcher matcher = new FingerprintMatcher(probe);
            double similarity = matcher.match(candidate);

            boolean isMatch = similarity >= matchThreshold;

            log.info("🖐️ [SourceAFIS] Match Score: {} (Threshold: {}). Result: {}",
                    String.format("%.2f", similarity), matchThreshold, isMatch ? "MATCH SUCCESSFUL ✅" : "MATCH FAILED ❌");

            return BiometricMatchResult.builder()
                    .matched(isMatch)
                    .biometricType("fingerprint")
                    .score(similarity)
                    .threshold(matchThreshold)
                    .engine("SourceAFIS 3.18 (Robert Vazan)")
                    .details(isMatch ? "Fingerprint minutiae matched candidate with high confidence."
                            : "Fingerprint minutiae similarity score below threshold.")
                    .build();

        } catch (Exception e) {
            log.error("❌ [SourceAFIS] Fingerprint matching error: {}", e.getMessage(), e);
            return BiometricMatchResult.builder()
                    .matched(false)
                    .biometricType("fingerprint")
                    .score(0.0)
                    .threshold(matchThreshold)
                    .engine("SourceAFIS 3.18")
                    .details("Fingerprint matching failed: " + e.getMessage())
                    .build();
        }
    }

    public double getMatchThreshold() {
        return matchThreshold;
    }
}
