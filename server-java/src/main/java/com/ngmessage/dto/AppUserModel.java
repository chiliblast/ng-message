package com.ngmessage.dto;

import java.io.Serializable;

public class AppUserModel implements Serializable {

    private Integer id;
    private String uuid;
    private String role;
    private String defaultUsername;
    private String displayName;
    private String shortName;
    private String username;
    private String title;

    public AppUserModel() {}

    public AppUserModel(Integer id, String uuid, String role, String defaultUsername,
                        String displayName, String shortName, String username, String title) {
        this.id = id;
        this.uuid = uuid;
        this.role = role;
        this.defaultUsername = defaultUsername;
        this.displayName = displayName;
        this.shortName = shortName;
        this.username = username;
        this.title = title;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private Integer id;
        private String uuid;
        private String role;
        private String defaultUsername;
        private String displayName;
        private String shortName;
        private String username;
        private String title;

        public Builder id(Integer id) {
            this.id = id;
            return this;
        }

        public Builder uuid(String uuid) {
            this.uuid = uuid;
            return this;
        }

        public Builder role(String role) {
            this.role = role;
            return this;
        }

        public Builder defaultUsername(String defaultUsername) {
            this.defaultUsername = defaultUsername;
            return this;
        }

        public Builder displayName(String displayName) {
            this.displayName = displayName;
            return this;
        }

        public Builder shortName(String shortName) {
            this.shortName = shortName;
            return this;
        }

        public Builder username(String username) {
            this.username = username;
            return this;
        }

        public Builder title(String title) {
            this.title = title;
            return this;
        }

        public AppUserModel build() {
            return new AppUserModel(id, uuid, role, defaultUsername, displayName, shortName, username, title);
        }
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDefaultUsername() {
        return defaultUsername;
    }

    public void setDefaultUsername(String defaultUsername) {
        this.defaultUsername = defaultUsername;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
