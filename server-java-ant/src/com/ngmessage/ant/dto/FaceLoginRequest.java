package com.ngmessage.ant.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FaceLoginRequest {

    private String username;
    private String password;

    // Primary parameter name 'face', with aliases for flexible client calls
    @JsonProperty("face")
    private String face;

    @JsonProperty("faceBase64")
    private String faceBase64;

    @JsonProperty("base64Image")
    private String base64Image;

    @JsonProperty("image")
    private String image;

    public FaceLoginRequest() {}

    public FaceLoginRequest(String username, String password, String face) {
        this.username = username;
        this.password = password;
        this.face = face;
    }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getFace() {
        if (face != null && !face.trim().isEmpty()) return face;
        if (faceBase64 != null && !faceBase64.trim().isEmpty()) return faceBase64;
        if (base64Image != null && !base64Image.trim().isEmpty()) return base64Image;
        if (image != null && !image.trim().isEmpty()) return image;
        return face;
    }
    public void setFace(String face) { this.face = face; }

    public String getFaceBase64() { return getFace(); }
    public void setFaceBase64(String faceBase64) { this.faceBase64 = faceBase64; }

    public String getBase64Image() { return getFace(); }
    public void setBase64Image(String base64Image) { this.base64Image = base64Image; }

    public String getImage() { return getFace(); }
    public void setImage(String image) { this.image = image; }
}
