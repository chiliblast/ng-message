package com.ngmessage.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, length = 50)
    private String username;

    @Column(length = 255)
    private String password;

    /**
     * Serialized SourceAFIS template (JSON or Base64) for fingerprint verification.
     */
    @Column(name = "fingerprint_template", columnDefinition = "LONGTEXT")
    private String fingerprintTemplate;

    /**
     * Serialized facial feature embedding vector (JSON or Base64) for facial verification.
     */
    @Column(name = "face_template", columnDefinition = "LONGTEXT")
    private String faceTemplate;

    /**
     * Timestamp when the user registered/updated fingerprint biometric.
     */
    @Column(name = "fingerprint_enrolled_at")
    private LocalDateTime fingerprintEnrolledAt;

    /**
     * Timestamp when the user registered/updated face biometric.
     */
    @Column(name = "face_enrolled_at")
    private LocalDateTime faceEnrolledAt;

    @Column(name = "position_title", nullable = false)
    private String positionTitle;

    @Column(name = "position_details", columnDefinition = "TEXT")
    private String positionDetails;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    public User() {}

    public User(Integer id, String name, String username, String password,
                String fingerprintTemplate, String faceTemplate,
                LocalDateTime fingerprintEnrolledAt, LocalDateTime faceEnrolledAt,
                String positionTitle, String positionDetails,
                LocalDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.fingerprintTemplate = fingerprintTemplate;
        this.faceTemplate = faceTemplate;
        this.fingerprintEnrolledAt = fingerprintEnrolledAt;
        this.faceEnrolledAt = faceEnrolledAt;
        this.positionTitle = positionTitle;
        this.positionDetails = positionDetails;
        this.createdAt = createdAt;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private Integer id;
        private String name;
        private String username;
        private String password;
        private String fingerprintTemplate;
        private String faceTemplate;
        private LocalDateTime fingerprintEnrolledAt;
        private LocalDateTime faceEnrolledAt;
        private String positionTitle;
        private String positionDetails;
        private LocalDateTime createdAt;

        public Builder id(Integer id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder username(String username) {
            this.username = username;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder fingerprintTemplate(String fingerprintTemplate) {
            this.fingerprintTemplate = fingerprintTemplate;
            return this;
        }

        public Builder faceTemplate(String faceTemplate) {
            this.faceTemplate = faceTemplate;
            return this;
        }

        public Builder fingerprintEnrolledAt(LocalDateTime fingerprintEnrolledAt) {
            this.fingerprintEnrolledAt = fingerprintEnrolledAt;
            return this;
        }

        public Builder faceEnrolledAt(LocalDateTime faceEnrolledAt) {
            this.faceEnrolledAt = faceEnrolledAt;
            return this;
        }

        public Builder positionTitle(String positionTitle) {
            this.positionTitle = positionTitle;
            return this;
        }

        public Builder positionDetails(String positionDetails) {
            this.positionDetails = positionDetails;
            return this;
        }

        public Builder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public User build() {
            return new User(id, name, username, password, fingerprintTemplate, faceTemplate,
                    fingerprintEnrolledAt, faceEnrolledAt, positionTitle, positionDetails, createdAt);
        }
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFingerprintTemplate() {
        return fingerprintTemplate;
    }

    public void setFingerprintTemplate(String fingerprintTemplate) {
        this.fingerprintTemplate = fingerprintTemplate;
    }

    public String getFaceTemplate() {
        return faceTemplate;
    }

    public void setFaceTemplate(String faceTemplate) {
        this.faceTemplate = faceTemplate;
    }

    public LocalDateTime getFingerprintEnrolledAt() {
        return fingerprintEnrolledAt;
    }

    public void setFingerprintEnrolledAt(LocalDateTime fingerprintEnrolledAt) {
        this.fingerprintEnrolledAt = fingerprintEnrolledAt;
    }

    public LocalDateTime getFaceEnrolledAt() {
        return faceEnrolledAt;
    }

    public void setFaceEnrolledAt(LocalDateTime faceEnrolledAt) {
        this.faceEnrolledAt = faceEnrolledAt;
    }

    public String getPositionTitle() {
        return positionTitle;
    }

    public void setPositionTitle(String positionTitle) {
        this.positionTitle = positionTitle;
    }

    public String getPositionDetails() {
        return positionDetails;
    }

    public void setPositionDetails(String positionDetails) {
        this.positionDetails = positionDetails;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
