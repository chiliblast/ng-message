package com.ngmessage.ant.dto;

import java.sql.Timestamp;

public class UserBiometricInfo {

    private String username;
    private boolean hasFingerprint;
    private boolean hasFace;
    private boolean requiresBiometric;
    private Timestamp fingerprintEnrolledAt;
    private Timestamp faceEnrolledAt;

    public UserBiometricInfo() {}

    public UserBiometricInfo(String username, boolean hasFingerprint, boolean hasFace, boolean requiresBiometric,
                             Timestamp fingerprintEnrolledAt, Timestamp faceEnrolledAt) {
        this.username = username;
        this.hasFingerprint = hasFingerprint;
        this.hasFace = hasFace;
        this.requiresBiometric = requiresBiometric;
        this.fingerprintEnrolledAt = fingerprintEnrolledAt;
        this.faceEnrolledAt = faceEnrolledAt;
    }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public boolean isHasFingerprint() { return hasFingerprint; }
    public void setHasFingerprint(boolean hasFingerprint) { this.hasFingerprint = hasFingerprint; }

    public boolean isHasFace() { return hasFace; }
    public void setHasFace(boolean hasFace) { this.hasFace = hasFace; }

    public boolean isRequiresBiometric() { return requiresBiometric; }
    public void setRequiresBiometric(boolean requiresBiometric) { this.requiresBiometric = requiresBiometric; }

    public Timestamp getFingerprintEnrolledAt() { return fingerprintEnrolledAt; }
    public void setFingerprintEnrolledAt(Timestamp fingerprintEnrolledAt) { this.fingerprintEnrolledAt = fingerprintEnrolledAt; }

    public Timestamp getFaceEnrolledAt() { return faceEnrolledAt; }
    public void setFaceEnrolledAt(Timestamp faceEnrolledAt) { this.faceEnrolledAt = faceEnrolledAt; }
}
