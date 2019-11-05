CREATE TABLE `join` (
    `email` VARCHAR(50) NOT NULL,
    `datetime` DATETIME NOT NULL,

    PRIMARY KEY (`email`, `datetime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `join` WRITE;

--
-- Dumping data for table `join`
--

INSERT INTO `join` VALUES ('BA@gmail.com', '2019-11-4 12:34:21'),
('ConnieH@gmail.com', '2019-11-4 04:18:39'),
('John.McGinley@sjsu.edu', '2019-11-4 08:23:34');

UNLOCK TABLES;