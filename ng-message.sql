-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 26, 2026 at 08:59 AM
-- Server version: 9.1.0
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ng-message`
--

DELIMITER $$
--
-- Procedures
--
DROP PROCEDURE IF EXISTS `sp_get_all_other_messages`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_all_other_messages` (IN `p_user_id` INT)   BEGIN
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
END$$

DROP PROCEDURE IF EXISTS `sp_get_hierarchy_data`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_hierarchy_data` ()   BEGIN
    SELECT u.id, u.name, u.position_title as title, u.position_details as details, h.level, h.type
    FROM users u JOIN hierarchy h ON u.id = h.user_id;
    SELECT user_id, child_user_id FROM children;
END$$

DROP PROCEDURE IF EXISTS `sp_get_received_messages`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_received_messages` (IN `p_user_id` INT)   BEGIN
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
END$$

DROP PROCEDURE IF EXISTS `sp_get_sent_messages`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_sent_messages` (IN `p_user_id` INT)   BEGIN
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
END$$

DROP PROCEDURE IF EXISTS `sp_get_status_actions`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_status_actions` ()   BEGIN
    SELECT * FROM status_actions;
END$$

DROP PROCEDURE IF EXISTS `sp_get_user_name`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_user_name` (IN `p_user_id` INT)   BEGIN
    SELECT name FROM users WHERE id = p_user_id;
END$$

DROP PROCEDURE IF EXISTS `sp_login`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_login` (IN `p_username` VARCHAR(255), IN `p_password` VARCHAR(255))   BEGIN
    SELECT id, name, position_title 
    FROM users 
    WHERE username = p_username AND password = p_password;
END$$

DROP PROCEDURE IF EXISTS `sp_send_message`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_send_message` (IN `p_sender_id` INT, IN `p_receiver_id` INT, IN `p_action_id` INT, IN `p_message_text` TEXT)   BEGIN
    INSERT INTO messages (sender_id, receiver_id, action_id, message_text) 
    VALUES (p_sender_id, p_receiver_id, p_action_id, p_message_text);
    SELECT LAST_INSERT_ID() as insertId;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `children`
--

DROP TABLE IF EXISTS `children`;
CREATE TABLE IF NOT EXISTS `children` (
  `user_id` int NOT NULL,
  `child_user_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`child_user_id`),
  KEY `child_user_id` (`child_user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `children`
--

INSERT INTO `children` (`user_id`, `child_user_id`) VALUES
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(3, 6),
(3, 7),
(4, 8),
(4, 9),
(5, 10),
(5, 11),
(6, 12),
(6, 13),
(7, 14),
(7, 15),
(20, 21),
(20, 22),
(21, 23),
(21, 24),
(22, 25),
(22, 26),
(23, 27),
(23, 28),
(24, 29),
(24, 30),
(25, 31),
(25, 32),
(26, 33),
(26, 34),
(100, 1),
(100, 20);

-- --------------------------------------------------------

--
-- Table structure for table `hierarchy`
--

DROP TABLE IF EXISTS `hierarchy`;
CREATE TABLE IF NOT EXISTS `hierarchy` (
  `user_id` int NOT NULL,
  `level` int NOT NULL,
  `type` enum('ADMIN','TEACHING') NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `hierarchy`
--

INSERT INTO `hierarchy` (`user_id`, `level`, `type`) VALUES
(1, 2, 'ADMIN'),
(2, 3, 'ADMIN'),
(3, 3, 'ADMIN'),
(4, 4, 'ADMIN'),
(5, 4, 'ADMIN'),
(6, 4, 'ADMIN'),
(7, 4, 'ADMIN'),
(8, 5, 'ADMIN'),
(9, 5, 'ADMIN'),
(10, 5, 'ADMIN'),
(11, 5, 'ADMIN'),
(12, 5, 'ADMIN'),
(13, 5, 'ADMIN'),
(14, 5, 'ADMIN'),
(15, 5, 'ADMIN'),
(20, 2, 'TEACHING'),
(21, 3, 'TEACHING'),
(22, 3, 'TEACHING'),
(23, 4, 'TEACHING'),
(24, 4, 'TEACHING'),
(25, 4, 'TEACHING'),
(26, 4, 'TEACHING'),
(27, 5, 'TEACHING'),
(28, 5, 'TEACHING'),
(29, 5, 'TEACHING'),
(30, 5, 'TEACHING'),
(31, 5, 'TEACHING'),
(32, 5, 'TEACHING'),
(33, 5, 'TEACHING'),
(34, 5, 'TEACHING'),
(100, 1, 'ADMIN');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int NOT NULL,
  `receiver_id` int NOT NULL,
  `action_id` int DEFAULT NULL,
  `message_text` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `sender_id`, `receiver_id`, `action_id`, `message_text`, `created_at`) VALUES
(1, 100, 5, 2, 'hey1', '2026-04-25 19:48:37'),
(2, 100, 4, 1, 'hey1222', '2026-04-25 19:49:14'),
(3, 100, 5, 2, '1111', '2026-04-25 19:49:32'),
(4, 100, 2, 2, '1111', '2026-04-25 19:52:30'),
(5, 100, 5, NULL, '22222', '2026-04-25 19:52:43'),
(6, 100, 5, 3, '323', '2026-04-25 19:52:58'),
(7, 100, 5, 4, 'eeee', '2026-04-25 19:53:35'),
(8, 100, 1, 2, 'ewewe', '2026-04-25 19:54:09'),
(9, 100, 7, 2, '333', '2026-04-25 19:56:17'),
(10, 100, 14, NULL, '11111', '2026-04-25 19:57:09'),
(11, 100, 7, 3, '1111', '2026-04-25 20:01:30'),
(12, 100, 7, 2, 'wewe', '2026-04-25 20:02:11'),
(13, 100, 7, 3, 'sdsd', '2026-04-25 20:02:31'),
(14, 100, 7, 3, 'sdsd', '2026-04-25 20:03:03'),
(15, 100, 7, 3, '1111', '2026-04-25 20:06:21'),
(16, 100, 7, 2, '1111', '2026-04-25 20:08:50'),
(17, 100, 5, 3, 'edfdf', '2026-04-25 20:13:24'),
(18, 100, 5, 3, '23323', '2026-04-25 20:25:10'),
(19, 5, 10, 3, 'sdsds', '2026-04-25 21:18:09');

-- --------------------------------------------------------

--
-- Table structure for table `status_actions`
--

DROP TABLE IF EXISTS `status_actions`;
CREATE TABLE IF NOT EXISTS `status_actions` (
  `id` int NOT NULL,
  `label` varchar(50) NOT NULL,
  `color` varchar(20) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `status_actions`
--

INSERT INTO `status_actions` (`id`, `label`, `color`, `description`) VALUES
(1, 'A', '#465fff', 'Action Alpha'),
(2, 'B', '#12b76a', 'Action Beta'),
(3, 'C', '#f79009', 'Action Gamma'),
(4, 'D', '#f04438', 'Action Delta');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `position_title` varchar(255) NOT NULL,
  `position_details` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `position_title`, `position_details`, `created_at`) VALUES
(1, 'Prof. Dr. John Doe', 'branch1_L2_1', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Vice Chancellor', 'CEO.', '2026-04-24 09:28:09'),
(2, 'Dr. Sarah Smith', 'branch1_L3_2', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Dean of Engineering', 'Faculty lead.', '2026-04-24 09:28:09'),
(3, 'Dr. Marie Curie', 'branch1_L3_3', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Dean of Science', 'Faculty lead.', '2026-04-24 09:28:09'),
(4, 'Prof. Alan Turing', 'branch1_L4_4', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Head of CS', 'Dept lead.', '2026-04-24 09:28:09'),
(5, 'Dr. Nikola Tesla', 'branch1_L4_5', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Head of EE', 'Dept lead.', '2026-04-24 09:28:09'),
(6, 'Dr. Albert Einstein', 'branch1_L4_6', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Head of Physics', 'Dept lead.', '2026-04-24 09:28:09'),
(7, 'Dr. Robert Boyle', 'branch1_L4_7', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Head of Chemistry', 'Dept lead.', '2026-04-24 09:28:09'),
(8, 'Ada Lovelace', 'branch1_L5_8', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Coord. BSCS', 'Coord.', '2026-04-24 09:28:09'),
(9, 'Grace Hopper', 'branch1_L5_9', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Coord. MSCS', 'Coord.', '2026-04-24 09:28:09'),
(10, 'Thomas Edison', 'branch1_L5_10', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Coord. BSEE', 'Coord.', '2026-04-24 09:28:09'),
(11, 'George Westinghouse', 'branch1_L5_11', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Coord. MSEE', 'Coord.', '2026-04-24 09:28:09'),
(12, 'Max Planck', 'branch1_L5_12', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Coord. BS Physics', 'Coord.', '2026-04-24 09:28:09'),
(13, 'Erwin Schrodinger', 'branch1_L5_13', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Coord. MS Physics', 'Coord.', '2026-04-24 09:28:09'),
(14, 'John Dalton', 'branch1_L5_14', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Coord. BS Chemistry', 'Coord.', '2026-04-24 09:28:09'),
(15, 'Louis Pasteur', 'branch1_L5_15', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Coord. MS Chemistry', 'Coord.', '2026-04-24 09:28:09'),
(20, 'Dr. Richard Feynman', 'branch2_L2_20', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Senior Professor', 'Research.', '2026-04-24 09:28:20'),
(21, 'Dr. Rosalind Franklin', 'branch2_L3_21', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Associate Professor', 'Senior Res.', '2026-04-24 09:28:20'),
(22, 'Dr. Isaac Newton', 'branch2_L3_22', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Associate Professor', 'Math Res.', '2026-04-24 09:28:20'),
(23, 'Dr. Stephen Hawking', 'branch2_L4_23', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Assistant Professor (A)', 'Course lead.', '2026-04-24 09:28:20'),
(24, 'Dr. Jane Goodall', 'branch2_L4_24', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Assistant Professor (B)', 'Research lead.', '2026-04-24 09:28:20'),
(25, 'Dr. Charles Darwin', 'branch2_L4_25', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Assistant Professor (C)', 'Instructor.', '2026-04-24 09:28:20'),
(26, 'Dr. Niels Bohr', 'branch2_L4_26', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Assistant Professor (D)', 'Quantum Res.', '2026-04-24 09:28:20'),
(27, 'Dr. Carl Sagan', 'branch2_L5_27', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Lecturer 1', 'Teaching.', '2026-04-24 09:28:20'),
(28, 'Ms. Rachel Carson', 'branch2_L5_28', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Teaching Asst 1', 'Lab.', '2026-04-24 09:28:20'),
(29, 'Dr. Dian Fossey', 'branch2_L5_29', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Lecturer 2', 'Teaching.', '2026-04-24 09:28:20'),
(30, 'Mr. David Attenborough', 'branch2_L5_30', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Teaching Asst 2', 'Field.', '2026-04-24 09:28:20'),
(31, 'Mr. Gregor Mendel', 'branch2_L5_31', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Lecturer 3', 'Teaching.', '2026-04-24 09:28:20'),
(32, 'Mr. Thomas Huxley', 'branch2_L5_32', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Teaching Asst 3', 'Anatomy.', '2026-04-24 09:28:20'),
(33, 'Mr. Max Born', 'branch2_L5_33', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Lecturer 4', 'Teaching.', '2026-04-24 09:28:20'),
(34, 'Mr. Werner Heisenberg', 'branch2_L5_34', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'Teaching Asst 4', 'Lab.', '2026-04-24 09:28:20'),
(100, 'Dr. Arshad Mahmood', 'level1', 'ZqSJkf0XN3u6Kvw29PmNv3ToBDnJagBT2eauC0ZQRTQ=', 'President', 'Supreme Authority of the Institution.', '2026-04-24 10:54:27');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
