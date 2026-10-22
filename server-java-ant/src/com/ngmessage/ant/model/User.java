package com.ngmessage.ant.model;

import java.sql.Timestamp;

public class User {

    private Integer id;
    private String name;
    private String username;
    private String password;
    private String fingerprintTemplate;
    private String faceTemplate;
    private Timestamp fingerprintEnrolledAt;
    private Timestamp faceEnrolledAt;
    private String positionTitle;
    private String positionDetails;
    private Timestamp createdAt;

    public User() {}

    public boolean hasFingerprint() {
        return fingerprintTemplate != null && !fingerprintTemplate.trim().isEmpty();
    }

    public boolean hasFace() {
        return faceTemplate != null && !faceTemplate.trim().isEmpty();
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getFingerprintTemplate() { return fingerprintTemplate; }
    public void setFingerprintTemplate(String fingerprintTemplate) { this.fingerprintTemplate = fingerprintTemplate; }

    public String getFaceTemplate() { return faceTemplate; }
    public void setFaceTemplate(String faceTemplate) { this.faceTemplate = faceTemplate; }

    public Timestamp getFingerprintEnrolledAt() { return fingerprintEnrolledAt; }
    public void setFingerprintEnrolledAt(Timestamp fingerprintEnrolledAt) { this.fingerprintEnrolledAt = fingerprintEnrolledAt; }

    public Timestamp getFaceEnrolledAt() { return faceEnrolledAt; }
    public void setFaceEnrolledAt(Timestamp faceEnrolledAt) { this.faceEnrolledAt = faceEnrolledAt; }

    public String getPositionTitle() { return positionTitle; }
    public void setPositionTitle(String positionTitle) { this.positionTitle = positionTitle; }

    public String getPositionDetails() { return positionDetails; }
    public void setPositionDetails(String positionDetails) { this.positionDetails = positionDetails; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }
}
