package com.ngmessage.ant.dto;

public class BiometricMatchResult {

    private boolean matched;
    private String biometricType;
    private double score;
    private double threshold;
    private String engine;
    private String details;

    public BiometricMatchResult() {}

    public BiometricMatchResult(boolean matched, String biometricType, double score, double threshold, String engine, String details) {
        this.matched = matched;
        this.biometricType = biometricType;
        this.score = score;
        this.threshold = threshold;
        this.engine = engine;
        this.details = details;
    }

    public boolean isMatched() { return matched; }
    public void setMatched(boolean matched) { this.matched = matched; }

    public String getBiometricType() { return biometricType; }
    public void setBiometricType(String biometricType) { this.biometricType = biometricType; }

    public double getScore() { return score; }
    public void setScore(double score) { this.score = score; }

    public double getThreshold() { return threshold; }
    public void setThreshold(double threshold) { this.threshold = threshold; }

    public String getEngine() { return engine; }
    public void setEngine(String engine) { this.engine = engine; }

    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }
}
