package com.ngmessage.util;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Base64;

public class ImageUtils {

    /**
     * Extracts raw image byte array from a base64 string, stripping data URL prefix if present.
     */
    public static byte[] extractBytesFromBase64(String base64Image) {
        if (base64Image == null || base64Image.trim().isEmpty()) {
            throw new IllegalArgumentException("Base64 image payload cannot be null or empty");
        }

        String cleaned = base64Image.trim();

        // Strip data:image/...;base64, prefix if present
        int commaIndex = cleaned.indexOf(',');
        if (commaIndex != -1 && cleaned.substring(0, commaIndex).contains("base64")) {
            cleaned = cleaned.substring(commaIndex + 1);
        }

        // Remove any whitespace or newline characters
        cleaned = cleaned.replaceAll("\\s+", "");

        return Base64.getDecoder().decode(cleaned);
    }

    /**
     * Converts raw image bytes into a Java BufferedImage.
     */
    public static BufferedImage toBufferedImage(byte[] imageBytes) throws IOException {
        if (imageBytes == null || imageBytes.length == 0) {
            throw new IllegalArgumentException("Image bytes cannot be empty");
        }
        try (ByteArrayInputStream bais = new ByteArrayInputStream(imageBytes)) {
            BufferedImage image = ImageIO.read(bais);
            if (image == null) {
                throw new IOException("Failed to decode image from provided byte array (unsupported format)");
            }
            return image;
        }
    }

    /**
     * Converts a BufferedImage to a byte array of the specified format (e.g. "png" or "jpeg").
     */
    /**
     * Converts a base64 encoded image directly to a BufferedImage.
     */
    public static BufferedImage base64ToBufferedImage(String base64Image) {
        byte[] bytes = extractBytesFromBase64(base64Image);
        try {
            return toBufferedImage(bytes);
        } catch (IOException e) {
            throw new RuntimeException("Failed to decode base64 image: " + e.getMessage(), e);
        }
    }
}

