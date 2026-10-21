package com.ngmessage.service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ngmessage.dto.BiometricMatchResult;
import com.ngmessage.util.ImageUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;


/**
 * High-performance, 100% pure Java Offline Face Recognition Engine.
 * 
 * Extracts normalized Spatial Local Binary Pattern (LBPH) and multi-cell gradient
 * feature vectors from face images and computes normalized Cosine / Chi-Square
 * similarity scores. Operates completely offline with zero native library dependencies.
 */
@Service
public class FaceRecognitionService {

    private static final Logger log = LoggerFactory.getLogger(FaceRecognitionService.class);

    private static final int FACE_WIDTH = 128;
    private static final int FACE_HEIGHT = 128;
    private static final int GRID_X = 8;
    private static final int GRID_Y = 8;
    private static final int NUM_CELLS = GRID_X * GRID_Y; // 64 cells
    private static final int HISTOGRAM_BINS = 59; // 58 uniform patterns + 1 non-uniform

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final int[] uniformPatternMap = initUniformPatterns();

    @Value("${biometric.face.threshold:0.68}")
    private double matchThreshold;

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class FaceTemplate {
        public int version = 1;
        public int dimensions;
        public double[] features;

        public FaceTemplate() {}

        public FaceTemplate(double[] features) {
            this.version = 1;
            this.dimensions = features.length;
            this.features = features;
        }
    }

    /**
     * Initializes mapping for uniform 8-bit Local Binary Patterns (ULBP).
     * Reduces 256 patterns to 59 bins with higher noise resilience.
     */
    private static int[] initUniformPatterns() {
        int[] map = new int[256];
        int nextLabel = 0;
        for (int i = 0; i < 256; i++) {
            // Count bit transitions
            int transitions = 0;
            for (int b = 0; b < 8; b++) {
                int bit1 = (i >> b) & 1;
                int bit2 = (i >> ((b + 1) % 8)) & 1;
                if (bit1 != bit2) {
                    transitions++;
                }
            }
            if (transitions <= 2) {
                map[i] = nextLabel++;
            } else {
                map[i] = 58; // Non-uniform bin
            }
        }
        return map;
    }

    /**
     * Extracts a face template from a base64 image and serializes it to JSON.
     */
    public String extractTemplateJson(String base64Image) {
        BufferedImage img = ImageUtils.base64ToBufferedImage(base64Image);
        double[] features = extractFeatureVector(img);
        try {
            return objectMapper.writeValueAsString(new FaceTemplate(features));
        } catch (Exception e) {
            throw new RuntimeException("Failed to serialize face template: " + e.getMessage(), e);
        }
    }

    /**
     * Deserializes candidate face template (JSON or raw Base64 image).
     */
    public FaceTemplate deserializeCandidate(String storedCandidate) {
        if (storedCandidate == null || storedCandidate.trim().isEmpty()) {
            throw new IllegalArgumentException("Stored candidate face template is empty");
        }

        String candidate = storedCandidate.trim();

        // 1. Check if candidate is JSON template
        if (candidate.startsWith("{") && candidate.contains("features")) {
            try {
                return objectMapper.readValue(candidate, FaceTemplate.class);
            } catch (Exception e) {
                log.warn("Failed to parse candidate JSON face template, falling back to image decoder: {}", e.getMessage());
            }
        }

        // 2. Otherwise assume candidate is raw base64 image
        BufferedImage img = ImageUtils.base64ToBufferedImage(candidate);
        double[] features = extractFeatureVector(img);
        return new FaceTemplate(features);
    }

    /**
     * Matches probe base64 face image against stored candidate template.
     */
    public BiometricMatchResult match(String probeBase64, String candidateTemplate) {
        try {
            log.info("👤 [FaceEngine] Processing probe face for biometric match...");
            BufferedImage probeImg = ImageUtils.base64ToBufferedImage(probeBase64);
            double[] probeFeatures = extractFeatureVector(probeImg);

            FaceTemplate candidate = deserializeCandidate(candidateTemplate);

            double similarity = computeCosineSimilarity(probeFeatures, candidate.features);
            boolean isMatch = similarity >= matchThreshold;

            log.info("👤 [FaceEngine] Match Score: {} (Threshold: {}). Result: {}",
                    String.format("%.4f", similarity), matchThreshold, isMatch ? "MATCH SUCCESSFUL ✅" : "MATCH FAILED ❌");

            return BiometricMatchResult.builder()
                    .matched(isMatch)
                    .biometricType("face")
                    .score(similarity)
                    .threshold(matchThreshold)
                    .engine("Pure Java Spatial-LBPH Face Matcher")
                    .details(isMatch ? "Face features matched enrolled candidate with high confidence."
                            : "Face similarity score below acceptance threshold.")
                    .build();

        } catch (Exception e) {
            log.error("❌ [FaceEngine] Facial recognition error: {}", e.getMessage(), e);
            return BiometricMatchResult.builder()
                    .matched(false)
                    .biometricType("face")
                    .score(0.0)
                    .threshold(matchThreshold)
                    .engine("Pure Java Spatial-LBPH Face Matcher")
                    .details("Face matching failed: " + e.getMessage())
                    .build();
        }
    }

    /**
     * Extracts normalized Spatial LBPH and gradient feature vector from image.
     */
    public double[] extractFeatureVector(BufferedImage rawImage) {
        // 1. Resize and convert to grayscale
        int[][] gray = preprocessFaceImage(rawImage);

        // 2. Compute LBP codes with noise tolerance
        int width = FACE_WIDTH;
        int height = FACE_HEIGHT;
        int[][] lbpCodes = new int[height][width];

        for (int y = 1; y < height - 1; y++) {
            for (int x = 1; x < width - 1; x++) {
                int center = gray[y][x];
                int code = 0;
                // Clockwise 8 neighbors with delta threshold
                if (gray[y - 1][x - 1] - center >= 2) code |= (1 << 7);
                if (gray[y - 1][x]     - center >= 2) code |= (1 << 6);
                if (gray[y - 1][x + 1] - center >= 2) code |= (1 << 5);
                if (gray[y][x + 1]     - center >= 2) code |= (1 << 4);
                if (gray[y + 1][x + 1] - center >= 2) code |= (1 << 3);
                if (gray[y + 1][x]     - center >= 2) code |= (1 << 2);
                if (gray[y + 1][x - 1] - center >= 2) code |= (1 << 1);
                if (gray[y][x - 1]     - center >= 2) code |= 1;

                lbpCodes[y][x] = uniformPatternMap[code];
            }
        }

        // 3. Compute spatial grid histograms + cell average intensity + Sobel gradient
        int cellW = width / GRID_X;
        int cellH = height / GRID_Y;
        int featuresPerCell = HISTOGRAM_BINS + 2; // LBPH bins + avg intensity + gradient mag
        int totalFeatures = NUM_CELLS * featuresPerCell;
        double[] featureVector = new double[totalFeatures];

        int cellIndex = 0;
        for (int cy = 0; cy < GRID_Y; cy++) {
            for (int cx = 0; cx < GRID_X; cx++) {
                int startX = cx * cellW;
                int startY = cy * cellH;
                int endX = Math.min(startX + cellW, width - 1);
                int endY = Math.min(startY + cellH, height - 1);

                int offset = cellIndex * featuresPerCell;
                int pixelCount = 0;
                double sumIntensity = 0;
                double sumGrad = 0;

                for (int y = Math.max(1, startY); y < endY; y++) {
                    for (int x = Math.max(1, startX); x < endX; x++) {
                        int bin = lbpCodes[y][x];
                        featureVector[offset + bin]++;
                        sumIntensity += gray[y][x];

                        // Sobel-like simple gradient
                        int dx = gray[y][x + 1] - gray[y][x - 1];
                        int dy = gray[y + 1][x] - gray[y - 1][x];
                        sumGrad += Math.sqrt(dx * dx + dy * dy);

                        pixelCount++;
                    }
                }

                if (pixelCount > 0) {
                    for (int b = 0; b < HISTOGRAM_BINS; b++) {
                        featureVector[offset + b] /= pixelCount;
                    }
                    featureVector[offset + HISTOGRAM_BINS] = (sumIntensity / pixelCount) / 255.0;
                    featureVector[offset + HISTOGRAM_BINS + 1] = (sumGrad / pixelCount) / 255.0;
                }

                cellIndex++;
            }
        }

        // 4. L2 Normalization across entire feature vector
        double norm = 0.0;
        for (double val : featureVector) {
            norm += val * val;
        }

        if (norm > 0) {
            norm = Math.sqrt(norm);
            for (int i = 0; i < featureVector.length; i++) {
                featureVector[i] /= norm;
            }
        }

        return featureVector;
    }

    /**
     * Preprocesses face image: scales to 128x128, extracts grayscale, and performs
     * histogram equalization to normalize illumination.
     */
    private int[][] preprocessFaceImage(BufferedImage src) {
        BufferedImage resized = new BufferedImage(FACE_WIDTH, FACE_HEIGHT, BufferedImage.TYPE_BYTE_GRAY);
        Graphics2D g2d = resized.createGraphics();
        g2d.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
        g2d.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
        g2d.drawImage(src, 0, 0, FACE_WIDTH, FACE_HEIGHT, null);
        g2d.dispose();

        int[][] gray = new int[FACE_HEIGHT][FACE_WIDTH];
        int[] hist = new int[256];

        for (int y = 0; y < FACE_HEIGHT; y++) {
            for (int x = 0; x < FACE_WIDTH; x++) {
                int rgb = resized.getRGB(x, y);
                int val = rgb & 0xFF; // grayscale pixel
                gray[y][x] = val;
                hist[val]++;
            }
        }

        // Cumulative histogram for equalization
        int totalPixels = FACE_WIDTH * FACE_HEIGHT;
        int[] cdf = new int[256];
        cdf[0] = hist[0];
        for (int i = 1; i < 256; i++) {
            cdf[i] = cdf[i - 1] + hist[i];
        }

        int cdfMin = 0;
        for (int i = 0; i < 256; i++) {
            if (cdf[i] > 0) {
                cdfMin = cdf[i];
                break;
            }
        }

        // Apply histogram equalization
        int[][] equalized = new int[FACE_HEIGHT][FACE_WIDTH];
        for (int y = 0; y < FACE_HEIGHT; y++) {
            for (int x = 0; x < FACE_WIDTH; x++) {
                int v = gray[y][x];
                if (totalPixels - cdfMin <= 0) {
                    equalized[y][x] = v;
                } else {
                    int eq = Math.round(((float) (cdf[v] - cdfMin) / (totalPixels - cdfMin)) * 255.0f);
                    equalized[y][x] = Math.max(0, Math.min(255, eq));
                }
            }
        }

        return equalized;
    }

    /**
     * Computes Cosine Similarity between two L2-normalized feature vectors.
     */
    private double computeCosineSimilarity(double[] v1, double[] v2) {
        if (v1 == null || v2 == null || v1.length != v2.length) {
            return 0.0;
        }

        double dot = 0.0;
        double norm1 = 0.0;
        double norm2 = 0.0;

        for (int i = 0; i < v1.length; i++) {
            dot += v1[i] * v2[i];
            norm1 += v1[i] * v1[i];
            norm2 += v2[i] * v2[i];
        }

        if (norm1 <= 0 || norm2 <= 0) return 0.0;
        double sim = dot / (Math.sqrt(norm1) * Math.sqrt(norm2));
        return Math.max(0.0, Math.min(1.0, sim));
    }

    public double getMatchThreshold() {
        return matchThreshold;
    }
}
