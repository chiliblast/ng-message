package com.ngmessage.ant.db;

import com.ngmessage.ant.config.ServerConfig;
import com.ngmessage.ant.model.User;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DatabaseManager {

    private final ServerConfig config;

    public DatabaseManager(ServerConfig config) {
        this.config = config;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.err.println("❌ MySQL Driver not found on classpath: " + e.getMessage());
        }
    }

    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(config.getDbUrl(), config.getDbUser(), config.getDbPassword());
    }

    public boolean testConnection() {
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement("SELECT 1");
             ResultSet rs = ps.executeQuery()) {
            return rs.next();
        } catch (Exception e) {
            System.err.println("❌ Database connection test failed: " + e.getMessage());
            return false;
        }
    }

    public User findUserByUsername(String username) {
        if (username == null || username.trim().isEmpty()) {
            return null;
        }
        String sql = "SELECT id, name, username, password, fingerprint_template, face_template, " +
                     "fingerprint_enrolled_at, face_enrolled_at, position_title, position_details, created_at " +
                     "FROM users WHERE username = ? LIMIT 1";

        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, username.trim());
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    User user = new User();
                    user.setId(rs.getInt("id"));
                    user.setName(rs.getString("name"));
                    user.setUsername(rs.getString("username"));
                    user.setPassword(rs.getString("password"));
                    user.setFingerprintTemplate(rs.getString("fingerprint_template"));
                    user.setFaceTemplate(rs.getString("face_template"));
                    user.setFingerprintEnrolledAt(rs.getTimestamp("fingerprint_enrolled_at"));
                    user.setFaceEnrolledAt(rs.getTimestamp("face_enrolled_at"));
                    user.setPositionTitle(rs.getString("position_title"));
                    user.setPositionDetails(rs.getString("position_details"));
                    user.setCreatedAt(rs.getTimestamp("created_at"));
                    return user;
                }
            }
        } catch (SQLException e) {
            System.err.println("❌ Error querying user by username '" + username + "': " + e.getMessage());
            throw new RuntimeException("Database error querying user: " + e.getMessage(), e);
        }
        return null;
    }

    public boolean updateFingerprintTemplate(String username, String template) {
        String sql = "UPDATE users SET fingerprint_template = ?, fingerprint_enrolled_at = NOW() WHERE username = ?";
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, template);
            ps.setString(2, username.trim());
            return ps.executeUpdate() > 0;
        } catch (SQLException e) {
            System.err.println("❌ Error updating fingerprint template for user '" + username + "': " + e.getMessage());
            throw new RuntimeException("Database error updating fingerprint template: " + e.getMessage(), e);
        }
    }

    public boolean updateFaceTemplate(String username, String template) {
        String sql = "UPDATE users SET face_template = ?, face_enrolled_at = NOW() WHERE username = ?";
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, template);
            ps.setString(2, username.trim());
            return ps.executeUpdate() > 0;
        } catch (SQLException e) {
            System.err.println("❌ Error updating face template for user '" + username + "': " + e.getMessage());
            throw new RuntimeException("Database error updating face template: " + e.getMessage(), e);
        }
    }
}
