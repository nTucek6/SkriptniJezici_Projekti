-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 19, 2022 at 10:21 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pcshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikli`
--

DROP TABLE IF EXISTS `artikli`;
CREATE TABLE IF NOT EXISTS `artikli` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Naziv` varchar(50) COLLATE utf8_bin NOT NULL,
  `Proizvodac` varchar(50) COLLATE utf8_bin NOT NULL,
  `Model` varchar(50) COLLATE utf8_bin NOT NULL,
  `Cijena` float NOT NULL,
  `Kolicina` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=136 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `artikli`
--

INSERT INTO `artikli` (`Id`, `Naziv`, `Proizvodac`, `Model`, `Cijena`, `Kolicina`) VALUES
(1, 'Redmi Note', 'Xiaomi', '10 Pro', 2199.99, 10),
(2, 'Ryzen', 'AMD', '7 2600x', 2399.99, 5),
(3, 'i5', 'Intel', '7400', 1229.99, 3),
(4, 'rtx', 'Nvidia', '3090 Ti', 20000, 2),
(5, 'Evo', 'Samsung', '860', 650, 15),
(135, 'MSI gtx', 'Nvidia', '1060 6gb', 1999.99, 5),
(134, 'Redmi ', 'Xiaomi', 'note 10 Pro', 1500, 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
