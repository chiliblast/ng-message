package com.ngmessage.ant.test;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class BiometricApiTest {

    private static final String BASE_URL = "http://localhost:8082";

    public static void main(String[] args) throws Exception {
        System.out.println("==================================================================");
        System.out.println("🧪 Running Automated Verification of 4 Biometric APIs");
        System.out.println("==================================================================");

        String fpBase64 = createSyntheticFingerprint();
        String faceBase64 = createSyntheticFace();

        // 1. Test Finger Registration API (3 params: username, password, finger)
        System.out.println("\n1️⃣  Testing Fingerprint Registration API (POST /api/auth/register-finger)...");
        String regFingerPayload = String.format("{\"username\":\"branch1_L3_3\",\"password\":\"password\",\"finger\":\"%s\"}", fpBase64);
        String regFingerResp = post(BASE_URL + "/api/auth/register-finger", regFingerPayload);
        System.out.println("Response: " + regFingerResp);
        if (!regFingerResp.contains("\"success\":true")) throw new RuntimeException("Register finger failed!");

        // 2. Test Finger Login API (3 params: username, password, finger)
        System.out.println("\n2️⃣  Testing Fingerprint Login API (POST /api/auth/login-finger)...");
        String loginFingerPayload = String.format("{\"username\":\"branch1_L3_3\",\"password\":\"password\",\"finger\":\"%s\"}", fpBase64);
        String loginFingerResp = post(BASE_URL + "/api/auth/login-finger", loginFingerPayload);
        System.out.println("Response: " + loginFingerResp);
        if (!loginFingerResp.contains("\"success\":true")) throw new RuntimeException("Login finger failed!");

        // 3. Test Face Registration API (3 params: username, password, face)
        System.out.println("\n3️⃣  Testing Face Registration API (POST /api/auth/register-face)...");
        String regFacePayload = String.format("{\"username\":\"branch1_L3_3\",\"password\":\"password\",\"face\":\"%s\"}", faceBase64);
        String regFaceResp = post(BASE_URL + "/api/auth/register-face", regFacePayload);
        System.out.println("Response: " + regFaceResp);
        if (!regFaceResp.contains("\"success\":true")) throw new RuntimeException("Register face failed!");

        // 4. Test Face Login API (3 params: username, password, face)
        System.out.println("\n4️⃣  Testing Face Login API (POST /api/auth/login-face)...");
        String loginFacePayload = String.format("{\"username\":\"branch1_L3_3\",\"password\":\"password\",\"face\":\"%s\"}", faceBase64);
        String loginFaceResp = post(BASE_URL + "/api/auth/login-face", loginFacePayload);
        System.out.println("Response: " + loginFaceResp);
        if (!loginFaceResp.contains("\"success\":true")) throw new RuntimeException("Login face failed!");

        System.out.println("\n==================================================================");
        System.out.println("🎉 ALL 4 BIOMETRIC APIs PASSED VERIFICATION PERFECTLY!");
        System.out.println("==================================================================");
    }

    private static String post(String endpoint, String jsonBody) throws Exception {
        URL url = new URL(endpoint);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
        conn.setDoOutput(true);

        try (OutputStream os = conn.getOutputStream()) {
            os.write(jsonBody.getBytes(StandardCharsets.UTF_8));
        }

        int code = conn.getResponseCode();
        InputStream is = (code >= 200 && code < 400) ? conn.getInputStream() : conn.getErrorStream();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))) {
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
            return sb.toString();
        }
    }

    private static String createSyntheticFingerprint() throws IOException {
        int w = 300, h = 300;
        BufferedImage img = new BufferedImage(w, h, BufferedImage.TYPE_BYTE_GRAY);
        Graphics2D g = img.createGraphics();
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, w, h);
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

    private static String createSyntheticFace() throws IOException {
        int w = 160, h = 160;
        BufferedImage img = new BufferedImage(w, h, BufferedImage.TYPE_BYTE_GRAY);
        Graphics2D g = img.createGraphics();
        g.setColor(Color.DARK_GRAY);
        g.fillRect(0, 0, w, h);

        // Head oval
        g.setColor(Color.LIGHT_GRAY);
        g.fillOval(30, 20, 100, 120);

        // Eyes
        g.setColor(Color.BLACK);
        g.fillOval(50, 60, 18, 12);
        g.fillOval(92, 60, 18, 12);

        // Nose
        g.drawLine(80, 75, 80, 100);

        // Mouth
        g.drawArc(60, 105, 40, 20, 0, -180);
        g.dispose();

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(img, "png", baos);
        return "data:image/png;base64," + Base64.getEncoder().encodeToString(baos.toByteArray());
    }
}
