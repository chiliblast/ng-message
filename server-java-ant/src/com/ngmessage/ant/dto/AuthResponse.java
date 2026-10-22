package com.ngmessage.ant.dto;

import java.util.Map;

public class AuthResponse {

    private boolean success;
    private String message;
    private String accessToken;
    private String refreshToken;
    private Integer loginLogId = 1;
    private String groupUserUuid = "group_user_uuid";
    private Map<String, Object> appUserModel;
    private boolean requiresBiometric = false;
    private boolean hasFace = false;
    private boolean hasFingerprint = false;
    private BiometricMatchResult biometricMatchResult;

    public AuthResponse() {}

    public boolean isSuccess() { return success; }
    public void setSuccess(boolean success) { this.success = success; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getAccessToken() { return accessToken; }
    public void setAccessToken(String accessToken) { this.accessToken = accessToken; }

    public String getRefreshToken() { return refreshToken; }
    public void setRefreshToken(String refreshToken) { this.refreshToken = refreshToken; }

    public Integer getLoginLogId() { return loginLogId; }
    public void setLoginLogId(Integer loginLogId) { this.loginLogId = loginLogId; }

    public String getGroupUserUuid() { return groupUserUuid; }
    public void setGroupUserUuid(String groupUserUuid) { this.groupUserUuid = groupUserUuid; }

    public Map<String, Object> getAppUserModel() { return appUserModel; }
    public void setAppUserModel(Map<String, Object> appUserModel) { this.appUserModel = appUserModel; }

    public boolean isRequiresBiometric() { return requiresBiometric; }
    public void setRequiresBiometric(boolean requiresBiometric) { this.requiresBiometric = requiresBiometric; }

    public boolean isHasFace() { return hasFace; }
    public void setHasFace(boolean hasFace) { this.hasFace = hasFace; }

    public boolean isHasFingerprint() { return hasFingerprint; }
    public void setHasFingerprint(boolean hasFingerprint) { this.hasFingerprint = hasFingerprint; }

    public BiometricMatchResult getBiometricMatchResult() { return biometricMatchResult; }
    public void setBiometricMatchResult(BiometricMatchResult biometricMatchResult) { this.biometricMatchResult = biometricMatchResult; }
}
