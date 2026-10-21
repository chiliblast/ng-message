package com.ngmessage.dto;

import jakarta.validation.constraints.NotBlank;
import java.io.Serializable;

public class BiometricLoginRequest implements Serializable {

    @NotBlank(message = "Username is required")
    private String username;

    @NotBlank(message = "Password is required")
    private String password;

    /**
     * Biometric Base64 image. Required only if user has enrolled biometrics.
     */
    private String base64Image;

    /**
     * 'fingerprint' or 'face'. Defaults to 'fingerprint' if not specified.
     */
    private String biometricType;

    public BiometricLoginRequest() {}

    public BiometricLoginRequest(String username, String password, String base64Image, String biometricType) {
        this.username = username;
        this.password = password;
        this.base64Image = base64Image;
        this.biometricType = biometricType;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private String username;
        private String password;
        private String base64Image;
        private String biometricType;

        public Builder username(String username) {
            this.username = username;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder base64Image(String base64Image) {
            this.base64Image = base64Image;
            return this;
        }

        public Builder biometricType(String biometricType) {
            this.biometricType = biometricType;
            return this;
        }

        public BiometricLoginRequest build() {
            return new BiometricLoginRequest(username, password, base64Image, biometricType);
        }
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

    public String getBase64Image() {
        return base64Image;
    }

    public void setBase64Image(String base64Image) {
        this.base64Image = base64Image;
    }

    public String getBiometricType() {
        return biometricType;
    }

    public void setBiometricType(String biometricType) {
        this.biometricType = biometricType;
    }
}
