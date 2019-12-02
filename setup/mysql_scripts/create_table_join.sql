DROP TABLE IF EXISTS `join_ride`;
DROP TABLE IF EXISTS `join`;

CREATE TABLE `join_ride` (
    `email` VARCHAR(50) NOT NULL,
    `datetime` DATETIME NOT NULL,
    `rider_email` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`email`, `datetime`, `rider_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `join_ride` WRITE;

--
-- Dumping data for table `join_ride`
--

INSERT INTO `join_ride` VALUES ('BA@gmail.com', '2019-11-4 12:34:21', 'ConnieH@gmail.com'),
('ConnieH@gmail.com', '2019-11-4 04:18:39', 'John.McGinley@SJSU.edu'),
('John.McGinley@sjsu.edu', '2019-11-4 08:23:34', 'ConnieH@gmail.com'),
('BA@gmail.com', '2019-11-4 12:34:21', 'Rider1@gmail.com'),
('BA@gmail.com', '2019-11-4 12:34:21', 'rider2@gmail.com');

UNLOCK TABLES;