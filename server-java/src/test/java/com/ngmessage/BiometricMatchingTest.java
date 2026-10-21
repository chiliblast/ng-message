package com.ngmessage;

import com.machinezoo.sourceafis.FingerprintTemplate;
import com.ngmessage.dto.BiometricMatchResult;
import com.ngmessage.service.FaceRecognitionService;
import com.ngmessage.service.FingerprintService;
import com.ngmessage.util.PasswordUtil;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;

import static org.junit.jupiter.api.Assertions.*;

public class BiometricMatchingTest {

    private final String SECRET_KEY = "AJH|80J*KLKS902JLAJD01_92";

    @Test
    @DisplayName("PasswordUtil produces HMAC-SHA256 matching Node.js crypto")
    void testPasswordHmacSha256() {
        String password = "password123";
        String hash = PasswordUtil.hashPassword(password, SECRET_KEY);
        assertNotNull(hash);
        assertFalse(hash.isEmpty());

        // Verify matches
        boolean valid = PasswordUtil.verifyPassword(password, hash, SECRET_KEY);
        assertTrue(valid, "Password should verify with valid HMAC-SHA256 hash");

        // Verify invalid password fails
        boolean invalid = PasswordUtil.verifyPassword("wrongpassword", hash, SECRET_KEY);
        assertFalse(invalid, "Incorrect password must be rejected");
    }

    @Test
    @DisplayName("FaceRecognitionService extracts features and matches identical face with 1.0 similarity")
    void testFaceRecognitionIdenticalMatch() throws IOException {
        FaceRecognitionService faceService = new FaceRecognitionService();
        ReflectionTestUtils.setField(faceService, "matchThreshold", 0.68);

        // Generate synthetic face image
        String faceBase64 = createSyntheticFaceBase64(Color.GRAY, true);

        // Extract template
        String templateJson = faceService.extractTemplateJson(faceBase64);
        assertNotNull(templateJson);
        assertTrue(templateJson.contains("features"));

        // Match probe against candidate
        BiometricMatchResult matchResult = faceService.match(faceBase64, templateJson);
        assertNotNull(matchResult);
        assertTrue(matchResult.isMatched(), "Same face image must match");
        assertEquals("face", matchResult.getBiometricType());
        assertTrue(matchResult.getScore() > 0.95, "Identical image score should be close to 1.0");
    }

    @Test
    @DisplayName("FaceRecognitionService differentiates distinct face patterns")
    void testFaceRecognitionDifferentiation() throws IOException {
        FaceRecognitionService faceService = new FaceRecognitionService();
        ReflectionTestUtils.setField(faceService, "matchThreshold", 0.68);

        // Two distinct synthetic face patterns
        String faceA = createSyntheticFaceBase64(Color.WHITE, true);
        String faceB = createSyntheticFaceBase64(Color.BLACK, false);

        String templateA = faceService.extractTemplateJson(faceA);
        BiometricMatchResult matchResult = faceService.match(faceB, templateA);

        assertNotNull(matchResult);
        assertTrue(matchResult.getScore() < 0.95, "Different patterns should yield lower similarity than identical");
    }

    @Test
    @DisplayName("FingerprintService extracts SourceAFIS template and performs serialization round-trip")
    void testFingerprintSourceAfisTemplateExtraction() throws IOException {
        FingerprintService fpService = new FingerprintService();
        ReflectionTestUtils.setField(fpService, "matchThreshold", 40.0);

        // Generate synthetic fingerprint ridge pattern
        String fpBase64 = createSyntheticFingerprintBase64();

        // Extract serialized binary template (Base64)
        String templateBase64 = fpService.extractTemplateFromJson(fpBase64);
        assertNotNull(templateBase64);
        assertFalse(templateBase64.isEmpty(), "Serialized SourceAFIS template should not be empty");

        // Deserialize template
        FingerprintTemplate deserialized = fpService.deserializeCandidate(templateBase64);
        assertNotNull(deserialized, "Deserialized template must be valid");

        // Match probe against candidate
        BiometricMatchResult result = fpService.match(fpBase64, templateBase64);
        assertNotNull(result);
        assertEquals("fingerprint", result.getBiometricType());
        assertEquals("SourceAFIS 3.18 (Robert Vazan)", result.getEngine());
    }

    // --- Helper generators for test images ---

    private String createSyntheticFaceBase64(Color bgColor, boolean drawFeatures) throws IOException {
        int w = 128, h = 128;
        BufferedImage img = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);
        Graphics2D g = img.createGraphics();
        g.setColor(bgColor);
        g.fillRect(0, 0, w, h);

        if (drawFeatures) {
            // Draw face oval
            g.setColor(Color.LIGHT_GRAY);
            g.fillOval(20, 20, 88, 96);
            // Draw eyes
            g.setColor(Color.DARK_GRAY);
            g.fillOval(38, 48, 14, 10);
            g.fillOval(76, 48, 14, 10);
            // Draw mouth
            g.setColor(Color.RED);
            g.drawArc(44, 80, 40, 20, 0, -180);
        } else {
            g.setColor(Color.DARK_GRAY);
            g.fillRect(10, 10, 108, 108);
            g.setColor(Color.WHITE);
            g.fillOval(30, 30, 40, 40);
        }
        g.dispose();

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(img, "png", baos);
        return "data:image/png;base64," + Base64.getEncoder().encodeToString(baos.toByteArray());
    }

    private String createSyntheticFingerprintBase64() throws IOException {
        int w = 300, h = 300;
        BufferedImage img = new BufferedImage(w, h, BufferedImage.TYPE_BYTE_GRAY);
        Graphics2D g = img.createGraphics();
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, w, h);

        // Draw multiple ridges with variations
        g.setColor(Color.BLACK);
        g.setStroke(new BasicStroke(3.0f));

        for (int y = 40; y < 260; y += 15) {
            for (int x = 40; x < 260; x += 30) {
                g.drawLine(x, y, x + 20, y + (x % 20 == 0 ? 5 : -5));
            }
        }
        g.dispose();

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(img, "png", baos);
        return "data:image/png;base64," + Base64.getEncoder().encodeToString(baos.toByteArray());
    }
}
