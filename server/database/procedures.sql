-- 1. Procedure for User Login
DELIMITER //
CREATE PROCEDURE sp_login(IN p_username VARCHAR(255), IN p_password VARCHAR(255))
BEGIN
    SELECT id, name, position_title 
    FROM users 
    WHERE username = p_username AND password = p_password;
END //

-- 2. Procedure to Send a Message
CREATE PROCEDURE sp_send_message(
    IN p_sender_id INT, 
    IN p_receiver_id INT, 
    IN p_action_id INT, 
    IN p_message_text TEXT
)
BEGIN
    INSERT INTO messages (sender_id, receiver_id, action_id, message_text) 
    VALUES (p_sender_id, p_receiver_id, p_action_id, p_message_text);
    SELECT LAST_INSERT_ID() as insertId;
END //

-- 3. Procedure to Get Received Messages
CREATE PROCEDURE sp_get_received_messages(IN p_user_id INT)
BEGIN
    SELECT 
        m.id, 
        LEFT(m.message_text, 30) as subject,
        m.message_text as snippet, 
        m.created_at as time,
        u.name as sender,
        sa.label, 
        sa.color as labelColor
    FROM messages m
    JOIN users u ON m.sender_id = u.id
    LEFT JOIN status_actions sa ON m.action_id = sa.id
    WHERE m.receiver_id = p_user_id
    ORDER BY m.created_at DESC;
END //

-- 4. Procedure to Get Sent Messages
CREATE PROCEDURE sp_get_sent_messages(IN p_user_id INT)
BEGIN
    SELECT 
        m.id, 
        LEFT(m.message_text, 30) as subject,
        m.message_text as snippet, 
        m.created_at as time,
        u.name as recipient,
        sa.label, 
        sa.color as labelColor
    FROM messages m
    JOIN users u ON m.receiver_id = u.id
    LEFT JOIN status_actions sa ON m.action_id = sa.id
    WHERE m.sender_id = p_user_id
    ORDER BY m.created_at DESC;
END //

-- 5. Procedure to Get Global Feed (Others' messages)
CREATE PROCEDURE sp_get_all_other_messages(IN p_user_id INT)
BEGIN
    SELECT 
        m.id, 
        m.message_text as snippet, 
        m.created_at as time,
        su.name as sender,
        ru.name as recipient,
        sa.label, 
        sa.color as labelColor
    FROM messages m
    JOIN users su ON m.sender_id = su.id
    JOIN users ru ON m.receiver_id = ru.id
    LEFT JOIN status_actions sa ON m.action_id = sa.id
    WHERE m.sender_id != p_user_id AND m.receiver_id != p_user_id
    ORDER BY m.created_at DESC;
END //

-- 6. Procedure to Get Hierarchy Data
CREATE PROCEDURE sp_get_hierarchy_data()
BEGIN
    -- Result Set 1: Users
    SELECT u.id, u.name, u.position_title as title, u.position_details as details, h.type, h.node
    FROM users u JOIN hierarchy h ON u.id = h.user_id;

    -- Result Set 2: Relationships
    SELECT user_id, child_user_id FROM children;

    -- Result Set 3: Detailed User Actions
    SELECT 
        una.user_id, 
        sa.id as action_id,
        sa.label, 
        sa.color, 
        una.name as action_name, 
        una.description as action_desc
    FROM user_node_actions una
    JOIN status_actions sa ON una.action_id = sa.id;
END //

-- 7. Procedure to Get Status Actions
CREATE PROCEDURE sp_get_status_actions()
BEGIN
    SELECT * FROM status_actions;
END //

-- 8. Procedure to Get User Name by ID (Socket Registry)
CREATE PROCEDURE sp_get_user_name(IN p_user_id INT)
BEGIN
    SELECT name FROM users WHERE id = p_user_id;
END //

DELIMITER ;
