DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
    `name` VARCHAR(30) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `school` VARCHAR(75) NOT NULL,
    `passwordHash` VARCHAR(256) NOT NULL,
    `phone` VARCHAR(12) NOT NULL,
    `car` VARCHAR(50),
    `major` VARCHAR(30),

    PRIMARY KEY (`email`),
    UNIQUE KEY `user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `users` WRITE;

--
-- Dumping data for table `users`
--

INSERT INTO `users` VALUES ('Brandon Archbold', 'BA@gmail.com', 'SJSU', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '408-849-2931', 'Toyota Camry', 'Comp Sci'),
('Connie Huynh','ConnieH@gmail.com', 'SJSU','472bbe83616e93d3c09a79103ae47d8f71e3d35a966d6e8b22f743218d04171d','408-849-3211', 'Mercedes Benz', 'Comp Sci'),
('John McGinley','John.McGinley@sjsu.edu', 'SJSU','b7158b64a98516b31d0c23609f69265a868c594dda5b3c8da9e13159e209c9b6','831-869-3976', 'Toyota Corolla', 'Comp Sci');

UNLOCK TABLES;