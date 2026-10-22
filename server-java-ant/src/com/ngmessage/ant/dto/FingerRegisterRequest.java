package com.ngmessage.ant.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FingerRegisterRequest {

    private String username;
    private String password;

    @JsonProperty("finger")
    private String finger;

    @JsonProperty("fingerprint")
    private String fingerprint;

    @JsonProperty("fingerBase64")
    private String fingerBase64;

    @JsonProperty("base64Image")
    private String base64Image;

    public FingerRegisterRequest() {}

    public FingerRegisterRequest(String username, String password, String finger) {
        this.username = username;
        this.password = password;
        this.finger = finger;
    }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getFinger() {
        if (finger != null && !finger.trim().isEmpty()) return finger;
        if (fingerprint != null && !fingerprint.trim().isEmpty()) return fingerprint;
        if (fingerBase64 != null && !fingerBase64.trim().isEmpty()) return fingerBase64;
        if (base64Image != null && !base64Image.trim().isEmpty()) return base64Image;
        return finger;
    }
    public void setFinger(String finger) { this.finger = finger; }

    public String getFingerprint() { return getFinger(); }
    public void setFingerprint(String fingerprint) { this.fingerprint = fingerprint; }

    public String getFingerBase64() { return getFinger(); }
    public void setFingerBase64(String fingerBase64) { this.fingerBase64 = fingerBase64; }

    public String getBase64Image() { return getFinger(); }
    public void setBase64Image(String base64Image) { this.base64Image = base64Image; }
}
