package com.ngmessage.ant;

import com.ngmessage.ant.config.ServerConfig;
import com.ngmessage.ant.db.DatabaseManager;
import com.ngmessage.ant.dto.*;
import com.ngmessage.ant.service.BiometricService;
import com.ngmessage.ant.service.FaceRecognitionService;
import com.ngmessage.ant.service.FingerprintService;
import com.ngmessage.ant.service.JwtService;
import com.ngmessage.ant.util.JsonUtil;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executors;

public class ServerAntApplication {

    private static BiometricService biometricService;
    private static DatabaseManager dbManager;
    private static ServerConfig config;

    public static void main(String[] args) throws Exception {
        System.out.println("==================================================================");
        System.out.println("🚀 Starting NG-Message Java ANT Biometric Server (Offline Mode)");
        System.out.println("==================================================================");

        config = new ServerConfig();
        dbManager = new DatabaseManager(config);

        boolean dbOk = dbManager.testConnection();
        if (dbOk) {
            System.out.println("✅ MySQL connection verified: " + config.getDbUrl());
        } else {
            System.err.println("⚠️ MySQL connection could not be established immediately. Verify MySQL is running on 3306.");
        }

        FingerprintService fingerprintService = new FingerprintService(config);
        FaceRecognitionService faceRecognitionService = new FaceRecognitionService(config);
        JwtService jwtService = new JwtService(config);

        biometricService = new BiometricService(
                dbManager,
                fingerprintService,
                faceRecognitionService,
                jwtService,
                config
        );

        int port = config.getPort();
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        // Standard credentials login (username and password)
        server.createContext("/api/auth/login", new LoginHandler());

        // Core Biometric APIs requested
        server.createContext("/api/auth/login-finger", new FingerLoginHandler());
        server.createContext("/api/auth/login-face", new FaceLoginHandler());
        server.createContext("/api/auth/register-finger", new FingerRegisterHandler());
        server.createContext("/api/auth/register-face", new FaceRegisterHandler());

        // Aliases for frontend flexibility
        server.createContext("/api/auth/fingerprint/login", new FingerLoginHandler());
        server.createContext("/api/auth/login-fingerprint", new FingerLoginHandler());
        server.createContext("/api/auth/face/login", new FaceLoginHandler());
        server.createContext("/api/auth/fingerprint/register", new FingerRegisterHandler());
        server.createContext("/api/auth/register-fingerprint", new FingerRegisterHandler());
        server.createContext("/api/auth/face/register", new FaceRegisterHandler());

        // Status & User info endpoints
        server.createContext("/api/auth/health", new HealthHandler());
        server.createContext("/api/auth/user/", new UserBiometricsHandler());

        // File download endpoints for HID setup client and scanner drivers
        server.createContext("/api/auth/downloads/", new FileDownloadHandler());
        server.createContext("/downloads/", new FileDownloadHandler());

        server.setExecutor(Executors.newFixedThreadPool(20));
        server.start();

        System.out.println("🌐 Server running on HTTP port: " + port);
        System.out.println("📡 Endpoints Available:");
        System.out.println("   [POST] http://localhost:" + port + "/api/auth/login-finger       (params: username, password, finger)");
        System.out.println("   [POST] http://localhost:" + port + "/api/auth/login-face         (params: username, password, face)");
        System.out.println("   [POST] http://localhost:" + port + "/api/auth/register-finger    (params: username, password, finger)");
        System.out.println("   [POST] http://localhost:" + port + "/api/auth/register-face      (params: username, password, face)");
        System.out.println("   [GET]  http://localhost:" + port + "/api/auth/health");
        System.out.println("   [GET]  http://localhost:" + port + "/api/auth/user/{username}/biometrics");
        System.out.println("   [GET]  http://localhost:" + port + "/api/auth/downloads/{filename}");
        System.out.println("==================================================================");
    }

    /**
     * Common CORS and Response Helper
     */
    private static void sendJsonResponse(HttpExchange exchange, int statusCode, Object data) throws IOException {
        byte[] bytes = JsonUtil.toJson(data).getBytes(StandardCharsets.UTF_8);
        setCorsHeaders(exchange);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=UTF-8");
        exchange.sendResponseHeaders(statusCode, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    private static void setCorsHeaders(HttpExchange exchange) {
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", config.getCorsAllowedOrigins());
        exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Origin, Accept");
        exchange.getResponseHeaders().set("Access-Control-Max-Age", "3600");
    }

    private static boolean handleOptions(HttpExchange exchange) throws IOException {
        if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
            setCorsHeaders(exchange);
            exchange.sendResponseHeaders(204, -1);
            exchange.close();
            return true;
        }
        return false;
    }

    private static String readRequestBody(HttpExchange exchange) throws IOException {
        try (InputStream is = exchange.getRequestBody();
             ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            byte[] buf = new byte[8192];
            int read;
            while ((read = is.read(buf)) != -1) {
                baos.write(buf, 0, read);
            }
            return baos.toString(StandardCharsets.UTF_8);
        }
    }

    // =================================================================
    // HTTP HANDLERS
    // =================================================================

    /**
     * Standard Credentials Login Handler (username and password)
     */
    static class LoginHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptions(exchange)) return;
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJsonResponse(exchange, 405, Map.of("success", false, "message", "Method Not Allowed"));
                return;
            }

            try {
                String body = readRequestBody(exchange);
                LoginRequest req = JsonUtil.fromJson(body, LoginRequest.class);
                System.out.println("📥 [POST /api/auth/login] User: " + req.getUsername());

                AuthResponse resp = biometricService.loginCredentials(req);
                int status = resp.isSuccess() ? 200 : 401;
                sendJsonResponse(exchange, status, resp);
            } catch (Exception e) {
                System.err.println("❌ Error in login: " + e.getMessage());
                sendJsonResponse(exchange, 400, Map.of("success", false, "message", "Invalid request: " + e.getMessage()));
            }
        }
    }

    /**
     * API 1: Finger Biometric Login Handler
     * Parameters: username, password, finger (Base64)
     */
    static class FingerLoginHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptions(exchange)) return;
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJsonResponse(exchange, 405, Map.of("success", false, "message", "Method Not Allowed"));
                return;
            }

            try {
                String body = readRequestBody(exchange);
                FingerLoginRequest req = JsonUtil.fromJson(body, FingerLoginRequest.class);
                System.out.println("📥 [POST /api/auth/login-finger] User: " + req.getUsername());

                AuthResponse resp = biometricService.loginFinger(req);
                int status = resp.isSuccess() ? 200 : 401;
                sendJsonResponse(exchange, status, resp);
            } catch (Exception e) {
                System.err.println("❌ Error in login-finger: " + e.getMessage());
                sendJsonResponse(exchange, 400, Map.of("success", false, "message", "Invalid request: " + e.getMessage()));
            }
        }
    }

    /**
     * API 2: Face Biometric Login Handler
     * Parameters: username, password, face (Base64)
     */
    static class FaceLoginHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptions(exchange)) return;
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJsonResponse(exchange, 405, Map.of("success", false, "message", "Method Not Allowed"));
                return;
            }

            try {
                String body = readRequestBody(exchange);
                FaceLoginRequest req = JsonUtil.fromJson(body, FaceLoginRequest.class);
                System.out.println("📥 [POST /api/auth/login-face] User: " + req.getUsername());

                AuthResponse resp = biometricService.loginFace(req);
                int status = resp.isSuccess() ? 200 : 401;
                sendJsonResponse(exchange, status, resp);
            } catch (Exception e) {
                System.err.println("❌ Error in login-face: " + e.getMessage());
                sendJsonResponse(exchange, 400, Map.of("success", false, "message", "Invalid request: " + e.getMessage()));
            }
        }
    }

    /**
     * API 3: Finger Biometric Registration Handler
     * Parameters: username, password, finger (Base64)
     */
    static class FingerRegisterHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptions(exchange)) return;
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJsonResponse(exchange, 405, Map.of("success", false, "message", "Method Not Allowed"));
                return;
            }

            try {
                String body = readRequestBody(exchange);
                FingerRegisterRequest req = JsonUtil.fromJson(body, FingerRegisterRequest.class);
                System.out.println("📥 [POST /api/auth/register-finger] Enrolling user: " + req.getUsername());

                Map<String, Object> resp = biometricService.registerFinger(req);
                boolean success = Boolean.TRUE.equals(resp.get("success"));
                int status = success ? 200 : 400;
                sendJsonResponse(exchange, status, resp);
            } catch (Exception e) {
                System.err.println("❌ Error in register-finger: " + e.getMessage());
                sendJsonResponse(exchange, 400, Map.of("success", false, "message", "Registration error: " + e.getMessage()));
            }
        }
    }

    /**
     * API 4: Face Biometric Registration Handler
     * Parameters: username, password, face (Base64)
     */
    static class FaceRegisterHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptions(exchange)) return;
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJsonResponse(exchange, 405, Map.of("success", false, "message", "Method Not Allowed"));
                return;
            }

            try {
                String body = readRequestBody(exchange);
                FaceRegisterRequest req = JsonUtil.fromJson(body, FaceRegisterRequest.class);
                System.out.println("📥 [POST /api/auth/register-face] Enrolling user: " + req.getUsername());

                Map<String, Object> resp = biometricService.registerFace(req);
                boolean success = Boolean.TRUE.equals(resp.get("success"));
                int status = success ? 200 : 400;
                sendJsonResponse(exchange, status, resp);
            } catch (Exception e) {
                System.err.println("❌ Error in register-face: " + e.getMessage());
                sendJsonResponse(exchange, 400, Map.of("success", false, "message", "Registration error: " + e.getMessage()));
            }
        }
    }

    /**
     * Health & Diagnostics Handler
     */
    static class HealthHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptions(exchange)) return;
            Map<String, Object> health = new HashMap<>();
            health.put("status", "UP");
            health.put("server", "NG-Message Java ANT Biometric Server");
            health.put("buildTool", "Apache Ant (100% Offline)");
            health.put("fingerprintEngine", "SourceAFIS 3.18.1 (Robert Vazan minutiae extraction)");
            health.put("faceEngine", "Pure Java Spatial-LBPH Face Recognition");
            health.put("databaseConnected", dbManager.testConnection());
            health.put("port", config.getPort());

            sendJsonResponse(exchange, 200, health);
        }
    }

    /**
     * User Biometrics Enrollment Status Handler
     * GET /api/auth/user/{username}/biometrics
     */
    static class UserBiometricsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptions(exchange)) return;
            String path = exchange.getRequestURI().getPath(); // e.g., /api/auth/user/john/biometrics
            String prefix = "/api/auth/user/";
            if (path.startsWith(prefix)) {
                String sub = path.substring(prefix.length());
                String username = sub;
                if (sub.endsWith("/biometrics")) {
                    username = sub.substring(0, sub.length() - "/biometrics".length());
                }

                UserBiometricInfo info = biometricService.getUserBiometricInfo(username);
                sendJsonResponse(exchange, 200, info);
                return;
            }
            sendJsonResponse(exchange, 404, Map.of("message", "Not Found"));
        }
    }

    /**
     * File Download Handler
     * Serves setup files and drivers from server-java-ant/downloads/
     */
    static class FileDownloadHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptions(exchange)) return;
            if (!"GET".equalsIgnoreCase(exchange.getRequestMethod()) && !"HEAD".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJsonResponse(exchange, 405, Map.of("message", "Method Not Allowed"));
                return;
            }

            String path = exchange.getRequestURI().getPath();
            String filename;
            if (path.contains("/downloads/")) {
                filename = path.substring(path.indexOf("/downloads/") + "/downloads/".length());
            } else {
                filename = path.substring(path.lastIndexOf('/') + 1);
            }

            try {
                filename = URLDecoder.decode(filename, StandardCharsets.UTF_8.name());
            } catch (Exception e) {}

            File downloadsDir = new File("downloads");
            if (!downloadsDir.exists()) {
                downloadsDir = new File(System.getProperty("user.dir"), "downloads");
            }
            File file = new File(downloadsDir, filename);

            if (!file.exists() || !file.isFile()) {
                System.err.println("❌ Download file not found: " + file.getAbsolutePath());
                sendJsonResponse(exchange, 404, Map.of("message", "File not found: " + filename));
                return;
            }

            System.out.println("📦 [File Download] Serving: " + file.getName() + " (" + file.length() + " bytes)");
            setCorsHeaders(exchange);
            exchange.getResponseHeaders().set("Content-Type", "application/octet-stream");
            exchange.getResponseHeaders().set("Content-Disposition", "attachment; filename=\"" + filename + "\"");
            exchange.sendResponseHeaders(200, file.length());

            if (!"HEAD".equalsIgnoreCase(exchange.getRequestMethod())) {
                try (InputStream is = new FileInputStream(file);
                     OutputStream os = exchange.getResponseBody()) {
                    byte[] buffer = new byte[65536];
                    int bytesRead;
                    while ((bytesRead = is.read(buffer)) != -1) {
                        os.write(buffer, 0, bytesRead);
                    }
                }
            }
        }
    }
}
