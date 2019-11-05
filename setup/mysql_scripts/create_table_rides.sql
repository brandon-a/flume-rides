DROP TABLE IF EXISTS `rides`;

CREATE TABLE `rides` (
    `email` VARCHAR(50) NOT NULL,
    `datetime` DATETIME NOT NULL,
    `otherLocation` VARCHAR(75) NOT NULL,
    `school` VARCHAR(256) NOT NULL,
    `toschool` BOOLEAN NOT NULL,
    `cost` DECIMAL NOT NULL,
    `spotsAvailable` INT NOT NULL,

    PRIMARY KEY (`datetime`, `email`)
    UNIQUE KEY `user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `rides` WRITE;

--
-- Dumping data for table `rides`
--

INSERT INTO `rides` VALUES ('BA@gmail.com', '2019-11-4 04:18:39', 'UCLA', 'SJSU', 'True', '20.00', 1),
('ConnieH@gmail.com', '2019-11-4 04:18:39', 'Stockton', 'SJSU', 'True', '15.00', 3),
('John.McGinley@sjsu.edu', '2019-11-4 04:18:39', 'Monterey', 'SJSU', 'False', '10.00', 1);

UNLOCK TABLES;