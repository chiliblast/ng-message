package com.ngmessage.ant.config;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

public class ServerConfig {

    private int port = 8082;
    private String dbUrl = "jdbc:mysql://localhost:3306/ng-message?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true&zeroDateTimeBehavior=CONVERT_TO_NULL";
    private String dbUser = "root";
    private String dbPassword = "";
    private String jwtSecret = "AJH|80J*KLKS902JLAJD01_92";
    private long jwtExpirationMs = 86400000L;
    private double fingerprintThreshold = 40.0;
    private double faceThreshold = 0.68;
    private String corsAllowedOrigins = "*";

    public ServerConfig() {
        loadProperties();
    }

    private void loadProperties() {
        Properties props = new Properties();

        // 1. Try reading from config/server.properties
        File configFile = new File("config/server.properties");
        if (!configFile.exists()) {
            configFile = new File("../config/server.properties");
        }

        if (configFile.exists()) {
            try (InputStream in = new FileInputStream(configFile)) {
                props.load(in);
                System.out.println("📄 Loaded configuration from " + configFile.getAbsolutePath());
            } catch (Exception e) {
                System.err.println("⚠️ Could not load " + configFile.getAbsolutePath() + ": " + e.getMessage());
            }
        } else {
            // Try loading from classpath
            try (InputStream in = getClass().getClassLoader().getResourceAsStream("server.properties")) {
                if (in != null) {
                    props.load(in);
                    System.out.println("📄 Loaded configuration from classpath server.properties");
                }
            } catch (Exception ignored) {}
        }

        // Apply properties with defaults
        this.port = Integer.parseInt(System.getProperty("server.port", props.getProperty("server.port", String.valueOf(this.port))));
        this.dbUrl = System.getProperty("db.url", props.getProperty("db.url", this.dbUrl));
        this.dbUser = System.getProperty("db.user", props.getProperty("db.user", this.dbUser));
        this.dbPassword = System.getProperty("db.password", props.getProperty("db.password", this.dbPassword));
        this.jwtSecret = System.getProperty("jwt.secret", props.getProperty("jwt.secret", this.jwtSecret));
        this.jwtExpirationMs = Long.parseLong(System.getProperty("jwt.expiration-ms", props.getProperty("jwt.expiration-ms", String.valueOf(this.jwtExpirationMs))));
        this.fingerprintThreshold = Double.parseDouble(System.getProperty("biometric.fingerprint.threshold", props.getProperty("biometric.fingerprint.threshold", String.valueOf(this.fingerprintThreshold))));
        this.faceThreshold = Double.parseDouble(System.getProperty("biometric.face.threshold", props.getProperty("biometric.face.threshold", String.valueOf(this.faceThreshold))));
        this.corsAllowedOrigins = System.getProperty("cors.allowed-origins", props.getProperty("cors.allowed-origins", this.corsAllowedOrigins));
    }

    public int getPort() { return port; }
    public String getDbUrl() { return dbUrl; }
    public String getDbUser() { return dbUser; }
    public String getDbPassword() { return dbPassword; }
    public String getJwtSecret() { return jwtSecret; }
    public long getJwtExpirationMs() { return jwtExpirationMs; }
    public double getFingerprintThreshold() { return fingerprintThreshold; }
    public double getFaceThreshold() { return faceThreshold; }
    public String getCorsAllowedOrigins() { return corsAllowedOrigins; }
}
