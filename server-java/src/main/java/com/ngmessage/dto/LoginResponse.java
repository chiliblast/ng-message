package com.ngmessage.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class LoginResponse implements Serializable {

    private boolean success;
    private String message;
    private String accessToken;
    private String refreshToken;
    private Integer loginLogId;
    private String groupUserUuid;
    private AppUserModel appUserModel;
    private BiometricMatchResult biometricMatchResult;
    private Boolean requiresBiometric;
    private Boolean hasFace;
    private Boolean hasFingerprint;

    public LoginResponse() {}

    public LoginResponse(boolean success, String message, String accessToken, String refreshToken,
                         Integer loginLogId, String groupUserUuid, AppUserModel appUserModel,
                         BiometricMatchResult biometricMatchResult, Boolean requiresBiometric,
                         Boolean hasFace, Boolean hasFingerprint) {
        this.success = success;
        this.message = message;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.loginLogId = loginLogId;
        this.groupUserUuid = groupUserUuid;
        this.appUserModel = appUserModel;
        this.biometricMatchResult = biometricMatchResult;
        this.requiresBiometric = requiresBiometric;
        this.hasFace = hasFace;
        this.hasFingerprint = hasFingerprint;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private boolean success;
        private String message;
        private String accessToken;
        private String refreshToken;
        private Integer loginLogId;
        private String groupUserUuid;
        private AppUserModel appUserModel;
        private BiometricMatchResult biometricMatchResult;
        private Boolean requiresBiometric;
        private Boolean hasFace;
        private Boolean hasFingerprint;

        public Builder success(boolean success) {
            this.success = success;
            return this;
        }

        public Builder message(String message) {
            this.message = message;
            return this;
        }

        public Builder accessToken(String accessToken) {
            this.accessToken = accessToken;
            return this;
        }

        public Builder refreshToken(String refreshToken) {
            this.refreshToken = refreshToken;
            return this;
        }

        public Builder loginLogId(Integer loginLogId) {
            this.loginLogId = loginLogId;
            return this;
        }

        public Builder groupUserUuid(String groupUserUuid) {
            this.groupUserUuid = groupUserUuid;
            return this;
        }

        public Builder appUserModel(AppUserModel appUserModel) {
            this.appUserModel = appUserModel;
            return this;
        }

        public Builder biometricMatchResult(BiometricMatchResult biometricMatchResult) {
            this.biometricMatchResult = biometricMatchResult;
            return this;
        }

        public Builder requiresBiometric(Boolean requiresBiometric) {
            this.requiresBiometric = requiresBiometric;
            return this;
        }

        public Builder hasFace(Boolean hasFace) {
            this.hasFace = hasFace;
            return this;
        }

        public Builder hasFingerprint(Boolean hasFingerprint) {
            this.hasFingerprint = hasFingerprint;
            return this;
        }

        public LoginResponse build() {
            return new LoginResponse(success, message, accessToken, refreshToken, loginLogId,
                    groupUserUuid, appUserModel, biometricMatchResult, requiresBiometric, hasFace, hasFingerprint);
        }
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public Integer getLoginLogId() {
        return loginLogId;
    }

    public void setLoginLogId(Integer loginLogId) {
        this.loginLogId = loginLogId;
    }

    public String getGroupUserUuid() {
        return groupUserUuid;
    }

    public void setGroupUserUuid(String groupUserUuid) {
        this.groupUserUuid = groupUserUuid;
    }

    public AppUserModel getAppUserModel() {
        return appUserModel;
    }

    public void setAppUserModel(AppUserModel appUserModel) {
        this.appUserModel = appUserModel;
    }

    public BiometricMatchResult getBiometricMatchResult() {
        return biometricMatchResult;
    }

    public void setBiometricMatchResult(BiometricMatchResult biometricMatchResult) {
        this.biometricMatchResult = biometricMatchResult;
    }

    public Boolean getRequiresBiometric() {
        return requiresBiometric;
    }

    public void setRequiresBiometric(Boolean requiresBiometric) {
        this.requiresBiometric = requiresBiometric;
    }

    public Boolean getHasFace() {
        return hasFace;
    }

    public void setHasFace(Boolean hasFace) {
        this.hasFace = hasFace;
    }

    public Boolean getHasFingerprint() {
        return hasFingerprint;
    }

    public void setHasFingerprint(Boolean hasFingerprint) {
        this.hasFingerprint = hasFingerprint;
    }
}
