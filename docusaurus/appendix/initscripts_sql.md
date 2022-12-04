# Initscripts SQL

## 100_database.sql

```sql
SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `meeting_protocol`;
CREATE DATABASE `meeting_protocol` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `meeting_protocol`;
```

## 101_tableTask.sql

```sql
SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;

USE `meeting_protocol`;

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `assignedTo` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `completionDate` varchar(255) NOT NULL,
  `notes` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 102_tableUser.sql

```sql
SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;

USE `meeting_protocol`;

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 103_createAdminUser.sql

```sql
SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

USE `meeting_protocol`;

SET NAMES utf8mb4;

INSERT INTO `user` (`id`, `full_name`, `username`, `password`) VALUES
(1,	'Admin',	'admin',	'admin');
```

## 999_testData.sql

```sql
SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

USE `meeting_protocol`;

SET NAMES utf8mb4;

INSERT INTO `task` (`id`, `description`, `assignedTo`, `status`, `completionDate`, `notes`) VALUES
(1,	'Test task 1',	'Testuser',	'In progress',	'',	'Test task from DB'),
(2,	'Test task 2',	'Testuser',	'Completed',	'',	'Test task from DB');
```