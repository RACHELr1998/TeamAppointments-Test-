-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2022 at 08:13 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teamappointments`
--
CREATE DATABASE IF NOT EXISTS `teamappointments` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `teamappointments`;

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `appointmentsId` int(11) NOT NULL,
  `teamId` int(11) NOT NULL,
  `startDateTime` datetime NOT NULL,
  `endDateTime` datetime NOT NULL,
  `description` varchar(100) NOT NULL,
  `room` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`appointmentsId`, `teamId`, `startDateTime`, `endDateTime`, `description`, `room`) VALUES
(1, 8, '2022-10-20 12:30:00', '2022-10-20 15:00:00', 'Instructions about new product', 'Red Room'),
(2, 6, '2022-10-30 10:00:00', '2022-10-30 12:00:00', 'Treatment of problems', 'Small Room'),
(3, 7, '2022-12-01 16:15:00', '2022-12-01 18:30:00', 'Introducing the new product', 'Blue Room'),
(4, 5, '2022-10-27 13:20:00', '2022-10-27 15:00:00', 'To solve a bug', 'Flowers Room'),
(5, 7, '2022-10-12 11:10:00', '2022-10-12 12:30:00', 'Presentation of achievements', 'Purple Room'),
(6, 6, '2022-11-01 18:15:00', '2022-11-01 20:30:00', 'Suggestions for solving problems', 'Pink Room'),
(7, 5, '2022-11-02 10:00:00', '2022-11-02 12:00:00', 'Choosing UI Library', 'Nami Room'),
(8, 7, '2022-10-03 13:30:00', '2022-10-03 14:30:00', 'Getting to know a new employee', 'Yellow Room');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `teamId` int(11) NOT NULL,
  `teamName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`teamId`, `teamName`) VALUES
(5, 'UI Team'),
(6, 'Mobile Team'),
(7, 'React Team'),
(8, 'Angular Team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`appointmentsId`),
  ADD KEY `groupId` (`teamId`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`teamId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `appointmentsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `teamId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`teamId`) REFERENCES `teams` (`teamId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
