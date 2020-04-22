-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 22, 2020 at 02:17 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eahelp`
--

-- --------------------------------------------------------

--
-- Table structure for table `ea_games`
--

CREATE TABLE `ea_games` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ea_games`
--

INSERT INTO `ea_games` (`id`, `name`) VALUES
(1, 'PLANTS VS ZOMBIES 3'),
(2, 'JEDI'),
(3, 'NFS Heat'),
(4, 'PLANTS VS ZOMBIES'),
(5, 'NBA LIVE MOBILE'),
(6, 'FIFA20'),
(7, 'FIFA MOBILE'),
(8, 'NHL20'),
(9, 'MADDEN MOBILE'),
(10, 'MADDEN 20'),
(11, 'Origin access'),
(12, 'The SIMS4'),
(13, 'pogo'),
(14, 'APEX LEGENDS'),
(15, 'Origin'),
(16, 'THE SIMPSONS TAPPED OUT');

-- --------------------------------------------------------

--
-- Table structure for table `ea_games_platforms`
--

CREATE TABLE `ea_games_platforms` (
  `id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL COMMENT 'ea_games.id',
  `platform_id` int(11) NOT NULL COMMENT 'ea_platforms.id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ea_games_platforms`
--

INSERT INTO `ea_games_platforms` (`id`, `game_id`, `platform_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 2, 5),
(6, 2, 6),
(7, 2, 7),
(8, 3, 8),
(9, 3, 9),
(10, 3, 5),
(11, 3, 6),
(12, 3, 7),
(13, 3, 10),
(14, 4, 5),
(15, 4, 6),
(16, 4, 7),
(17, 5, 1),
(18, 5, 2),
(19, 5, 11),
(20, 5, 3),
(21, 5, 4),
(22, 5, 12),
(23, 5, 13),
(24, 6, 14),
(25, 6, 5),
(26, 6, 6),
(27, 6, 7),
(28, 7, 1),
(29, 7, 2),
(30, 7, 11),
(31, 7, 3),
(32, 7, 4),
(33, 8, 5),
(34, 8, 6),
(35, 9, 1),
(36, 9, 2),
(37, 9, 11),
(38, 9, 3),
(39, 9, 4),
(40, 9, 13),
(41, 9, 15),
(42, 10, 5),
(43, 10, 6),
(44, 10, 7),
(45, 12, 5),
(46, 12, 6),
(47, 12, 7),
(48, 12, 16),
(49, 13, 7),
(50, 13, 16),
(51, 13, 1),
(52, 13, 2),
(53, 13, 3),
(54, 13, 4),
(55, 13, 15),
(56, 14, 5),
(57, 14, 6),
(58, 14, 7),
(59, 15, 7),
(60, 15, 16),
(61, 16, 1),
(62, 16, 2),
(63, 16, 3),
(64, 16, 4),
(65, 16, 15);

-- --------------------------------------------------------

--
-- Table structure for table `ea_games_platforms_topics`
--

CREATE TABLE `ea_games_platforms_topics` (
  `id` int(11) NOT NULL,
  `game_platform_id` int(11) NOT NULL,
  `topic_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ea_games_platforms_topics`
--

INSERT INTO `ea_games_platforms_topics` (`id`, `game_platform_id`, `topic_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 2, 1),
(10, 2, 2),
(11, 2, 3),
(12, 2, 4),
(13, 2, 5),
(14, 2, 6),
(15, 2, 7),
(16, 2, 8),
(17, 3, 1),
(18, 3, 2),
(19, 3, 3),
(20, 3, 4),
(21, 3, 5),
(22, 3, 6),
(23, 3, 7),
(24, 3, 8),
(25, 4, 1),
(26, 4, 2),
(27, 4, 3),
(28, 4, 4),
(29, 4, 5),
(30, 4, 6),
(31, 4, 7),
(32, 4, 8),
(33, 5, 9),
(34, 5, 2),
(35, 5, 10),
(36, 5, 5),
(37, 5, 11),
(38, 5, 6),
(39, 5, 12),
(40, 5, 13),
(41, 5, 14),
(42, 6, 9),
(43, 6, 2),
(44, 6, 10),
(45, 6, 5),
(46, 6, 11),
(47, 6, 6),
(48, 6, 12),
(49, 6, 13),
(50, 6, 14),
(51, 7, 9),
(52, 7, 2),
(53, 7, 10),
(54, 7, 5),
(55, 7, 11),
(56, 7, 6),
(57, 7, 12),
(58, 7, 13),
(59, 7, 14),
(60, 8, 9),
(61, 8, 2),
(62, 8, 10),
(63, 8, 5),
(64, 8, 11),
(65, 8, 6),
(66, 8, 12),
(67, 8, 13),
(68, 8, 14),
(69, 9, 9),
(70, 9, 2),
(71, 9, 10),
(72, 9, 5),
(73, 9, 11),
(74, 9, 6),
(75, 9, 12),
(76, 9, 13),
(77, 9, 14),
(78, 10, 9),
(79, 10, 2),
(80, 10, 10),
(81, 10, 5),
(82, 10, 11),
(83, 10, 6),
(84, 10, 12),
(85, 10, 13),
(86, 10, 14),
(87, 11, 9),
(88, 11, 2),
(89, 11, 10),
(90, 11, 5),
(91, 11, 11),
(92, 11, 6),
(93, 11, 12),
(94, 11, 13),
(95, 11, 14),
(96, 12, 9),
(97, 12, 2),
(98, 12, 10),
(99, 12, 5),
(100, 12, 11),
(101, 12, 6),
(102, 12, 12),
(103, 12, 13),
(104, 12, 14),
(105, 13, 9),
(106, 13, 2),
(107, 13, 10),
(108, 13, 5),
(109, 13, 11),
(110, 13, 6),
(111, 13, 12),
(112, 13, 13),
(113, 13, 14),
(114, 14, 9),
(115, 14, 2),
(116, 14, 10),
(117, 14, 5),
(118, 14, 11),
(119, 14, 6),
(120, 14, 12),
(121, 14, 13),
(122, 14, 14),
(123, 15, 9),
(124, 15, 2),
(125, 15, 10),
(126, 15, 5),
(127, 15, 11),
(128, 15, 6),
(129, 15, 12),
(130, 15, 13),
(131, 15, 14),
(132, 16, 9),
(133, 16, 2),
(134, 16, 10),
(135, 16, 5),
(136, 16, 11),
(137, 16, 6),
(138, 16, 12),
(139, 16, 13),
(140, 16, 14),
(141, 17, 1),
(142, 17, 3),
(143, 17, 4),
(144, 17, 5),
(145, 17, 6),
(146, 17, 7),
(147, 17, 8),
(148, 18, 1),
(149, 18, 3),
(150, 18, 4),
(151, 18, 5),
(152, 18, 6),
(153, 18, 7),
(154, 18, 8),
(155, 19, 1),
(156, 19, 3),
(157, 19, 4),
(158, 19, 5),
(159, 19, 6),
(160, 19, 7),
(161, 19, 8),
(162, 20, 1),
(163, 20, 3),
(164, 20, 4),
(165, 20, 5),
(166, 20, 6),
(167, 20, 7),
(168, 20, 8),
(169, 21, 1),
(170, 21, 3),
(171, 21, 4),
(172, 21, 5),
(173, 21, 6),
(174, 21, 7),
(175, 21, 8),
(176, 22, 1),
(177, 22, 3),
(178, 22, 4),
(179, 22, 5),
(180, 22, 6),
(181, 22, 7),
(182, 22, 8),
(183, 23, 1),
(184, 23, 3),
(185, 23, 4),
(186, 23, 5),
(187, 23, 6),
(188, 23, 7),
(189, 23, 8),
(190, 24, 9),
(191, 24, 2),
(192, 24, 10),
(193, 24, 5),
(194, 24, 11),
(195, 24, 6),
(196, 24, 12),
(197, 24, 13),
(198, 24, 15),
(199, 24, 14),
(200, 25, 9),
(201, 25, 2),
(202, 25, 10),
(203, 25, 5),
(204, 25, 11),
(205, 25, 6),
(206, 25, 12),
(207, 25, 13),
(208, 25, 15),
(209, 25, 14),
(210, 26, 9),
(211, 26, 2),
(212, 26, 10),
(213, 26, 5),
(214, 26, 11),
(215, 26, 6),
(216, 26, 12),
(217, 26, 13),
(218, 26, 15),
(219, 26, 14),
(220, 27, 9),
(221, 27, 2),
(222, 27, 10),
(223, 27, 5),
(224, 27, 11),
(225, 27, 6),
(226, 27, 12),
(227, 27, 13),
(228, 27, 15),
(229, 27, 14),
(230, 28, 1),
(231, 28, 3),
(232, 28, 4),
(233, 28, 5),
(234, 28, 6),
(235, 28, 7),
(236, 28, 8),
(237, 29, 1),
(238, 29, 3),
(239, 29, 4),
(240, 29, 5),
(241, 29, 6),
(242, 29, 7),
(243, 29, 8),
(244, 30, 1),
(245, 30, 3),
(246, 30, 4),
(247, 30, 5),
(248, 30, 6),
(249, 30, 7),
(250, 30, 8),
(251, 31, 1),
(252, 31, 3),
(253, 31, 4),
(254, 31, 5),
(255, 31, 6),
(256, 31, 7),
(257, 31, 8),
(258, 32, 1),
(259, 32, 3),
(260, 32, 4),
(261, 32, 5),
(262, 32, 6),
(263, 32, 7),
(264, 32, 8),
(265, 33, 9),
(266, 33, 2),
(267, 33, 10),
(268, 33, 5),
(269, 33, 11),
(270, 33, 6),
(271, 33, 12),
(272, 33, 13),
(273, 33, 14),
(274, 34, 9),
(275, 34, 2),
(276, 34, 10),
(277, 34, 5),
(278, 34, 11),
(279, 34, 6),
(280, 34, 12),
(281, 34, 13),
(282, 34, 14),
(283, 35, 1),
(284, 35, 3),
(285, 35, 4),
(286, 35, 5),
(287, 35, 6),
(288, 35, 7),
(289, 35, 8),
(290, 36, 1),
(291, 36, 3),
(292, 36, 4),
(293, 36, 5),
(294, 36, 6),
(295, 36, 7),
(296, 36, 8),
(297, 37, 1),
(298, 37, 3),
(299, 37, 4),
(300, 37, 5),
(301, 37, 6),
(302, 37, 7),
(303, 37, 8),
(304, 38, 1),
(305, 38, 3),
(306, 38, 4),
(307, 38, 5),
(308, 38, 6),
(309, 38, 7),
(310, 38, 8),
(311, 39, 1),
(312, 39, 3),
(313, 39, 4),
(314, 39, 5),
(315, 39, 6),
(316, 39, 7),
(317, 39, 8),
(318, 40, 1),
(319, 40, 3),
(320, 40, 4),
(321, 40, 5),
(322, 40, 6),
(323, 40, 7),
(324, 40, 8),
(325, 41, 1),
(326, 41, 3),
(327, 41, 4),
(328, 41, 5),
(329, 41, 6),
(330, 41, 7),
(331, 41, 8),
(332, 42, 9),
(333, 42, 2),
(334, 42, 10),
(335, 42, 5),
(336, 42, 11),
(337, 42, 6),
(338, 42, 12),
(339, 42, 13),
(340, 42, 15),
(341, 42, 14),
(342, 43, 9),
(343, 43, 2),
(344, 43, 10),
(345, 43, 5),
(346, 43, 11),
(347, 43, 6),
(348, 43, 12),
(349, 43, 13),
(350, 43, 15),
(351, 43, 14),
(352, 44, 9),
(353, 44, 2),
(354, 44, 10),
(355, 44, 5),
(356, 44, 11),
(357, 44, 6),
(358, 44, 12),
(359, 44, 13),
(360, 44, 15),
(361, 44, 14),
(362, 45, 10),
(363, 45, 6),
(364, 45, 12),
(365, 45, 13),
(366, 46, 10),
(367, 46, 6),
(368, 46, 12),
(369, 46, 13),
(370, 47, 10),
(371, 47, 6),
(372, 47, 12),
(373, 47, 13),
(374, 48, 10),
(375, 48, 6),
(376, 48, 12),
(377, 48, 13),
(378, 49, 9),
(379, 49, 2),
(380, 49, 10),
(381, 49, 5),
(382, 49, 11),
(383, 49, 6),
(384, 49, 12),
(385, 49, 13),
(386, 50, 9),
(387, 50, 2),
(388, 50, 10),
(389, 50, 5),
(390, 50, 11),
(391, 50, 6),
(392, 50, 12),
(393, 50, 13),
(394, 51, 9),
(395, 51, 2),
(396, 51, 10),
(397, 51, 5),
(398, 51, 11),
(399, 51, 6),
(400, 51, 12),
(401, 51, 13),
(402, 52, 9),
(403, 52, 2),
(404, 52, 10),
(405, 52, 5),
(406, 52, 11),
(407, 52, 6),
(408, 52, 12),
(409, 52, 13),
(410, 53, 9),
(411, 53, 2),
(412, 53, 10),
(413, 53, 5),
(414, 53, 11),
(415, 53, 6),
(416, 53, 12),
(417, 53, 13),
(418, 54, 9),
(419, 54, 2),
(420, 54, 10),
(421, 54, 5),
(422, 54, 11),
(423, 54, 6),
(424, 54, 12),
(425, 54, 13),
(426, 55, 9),
(427, 55, 2),
(428, 55, 10),
(429, 55, 5),
(430, 55, 11),
(431, 55, 6),
(432, 55, 12),
(433, 55, 13),
(434, 56, 9),
(435, 56, 2),
(436, 56, 10),
(437, 56, 5),
(438, 56, 11),
(439, 56, 6),
(440, 56, 12),
(441, 56, 13),
(442, 56, 15),
(443, 56, 14),
(444, 57, 9),
(445, 57, 2),
(446, 57, 10),
(447, 57, 5),
(448, 57, 11),
(449, 57, 6),
(450, 57, 12),
(451, 57, 13),
(452, 57, 15),
(453, 57, 14),
(454, 58, 9),
(455, 58, 2),
(456, 58, 10),
(457, 58, 5),
(458, 58, 11),
(459, 58, 6),
(460, 58, 12),
(461, 58, 13),
(462, 58, 15),
(463, 58, 14),
(464, 60, 9),
(465, 60, 2),
(466, 60, 10),
(467, 60, 5),
(468, 60, 11),
(469, 60, 6),
(470, 60, 12),
(471, 60, 13),
(472, 60, 14),
(473, 61, 9),
(474, 61, 10),
(475, 61, 5),
(476, 61, 6),
(477, 61, 13),
(478, 62, 9),
(479, 62, 10),
(480, 62, 5),
(481, 62, 6),
(482, 62, 13),
(483, 63, 9),
(484, 63, 10),
(485, 63, 5),
(486, 63, 6),
(487, 63, 13),
(488, 64, 9),
(489, 64, 10),
(490, 64, 5),
(491, 64, 6),
(492, 64, 13),
(493, 65, 9),
(494, 65, 10),
(495, 65, 5),
(496, 65, 6),
(497, 65, 13);

-- --------------------------------------------------------

--
-- Table structure for table `ea_games_topics`
--

CREATE TABLE `ea_games_topics` (
  `id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `topic_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ea_games_topics`
--

INSERT INTO `ea_games_topics` (`id`, `game_id`, `topic_id`) VALUES
(1, 11, 9),
(2, 11, 2),
(3, 11, 10),
(4, 11, 16),
(5, 11, 5),
(6, 11, 11),
(7, 11, 6),
(8, 11, 12),
(9, 11, 13);

-- --------------------------------------------------------

--
-- Table structure for table `ea_platforms`
--

CREATE TABLE `ea_platforms` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ea_platforms`
--

INSERT INTO `ea_platforms` (`id`, `name`) VALUES
(1, 'iPhone'),
(2, 'iPad'),
(3, 'Tablet'),
(4, 'Phone'),
(5, 'PS4'),
(6, 'XBOX ONE'),
(7, 'PC'),
(8, 'iOS'),
(9, 'android'),
(10, 'Origin'),
(11, 'iPod'),
(12, 'Windows Tablet'),
(13, 'Windows Phone'),
(14, 'NINTENDO SWITCH'),
(15, 'kindle fire'),
(16, 'MAC');

-- --------------------------------------------------------

--
-- Table structure for table `ea_topics`
--

CREATE TABLE `ea_topics` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ea_topics`
--

INSERT INTO `ea_topics` (`id`, `name`) VALUES
(1, 'Promotions and events'),
(2, 'Game information'),
(3, 'Banned or suspended account'),
(4, 'Can\'t login'),
(5, 'Missing content'),
(6, 'Report a bug'),
(7, 'Report player'),
(8, 'Connection and tech support'),
(9, 'Codes and promotions'),
(10, 'Manage my account'),
(11, 'Orders'),
(12, 'Report concerns or harassment'),
(13, 'Technical support'),
(14, 'Warranty'),
(15, 'Twitch Prime'),
(16, 'Manage my subscription');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ea_games`
--
ALTER TABLE `ea_games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ea_games_platforms`
--
ALTER TABLE `ea_games_platforms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ea_games.id` (`game_id`),
  ADD KEY `ea_platforms.id` (`platform_id`);

--
-- Indexes for table `ea_games_platforms_topics`
--
ALTER TABLE `ea_games_platforms_topics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ea_games_platforms.id` (`game_platform_id`),
  ADD KEY `ea_topics.id` (`topic_id`);

--
-- Indexes for table `ea_games_topics`
--
ALTER TABLE `ea_games_topics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ea_platforms`
--
ALTER TABLE `ea_platforms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ea_topics`
--
ALTER TABLE `ea_topics`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ea_games`
--
ALTER TABLE `ea_games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `ea_games_platforms`
--
ALTER TABLE `ea_games_platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `ea_games_platforms_topics`
--
ALTER TABLE `ea_games_platforms_topics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=498;

--
-- AUTO_INCREMENT for table `ea_games_topics`
--
ALTER TABLE `ea_games_topics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `ea_platforms`
--
ALTER TABLE `ea_platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `ea_topics`
--
ALTER TABLE `ea_topics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ea_games_platforms`
--
ALTER TABLE `ea_games_platforms`
  ADD CONSTRAINT `ea_games.id` FOREIGN KEY (`game_id`) REFERENCES `ea_games` (`id`),
  ADD CONSTRAINT `ea_platforms.id` FOREIGN KEY (`platform_id`) REFERENCES `ea_platforms` (`id`);

--
-- Constraints for table `ea_games_platforms_topics`
--
ALTER TABLE `ea_games_platforms_topics`
  ADD CONSTRAINT `ea_games_platforms.id` FOREIGN KEY (`game_platform_id`) REFERENCES `ea_games_platforms` (`id`),
  ADD CONSTRAINT `ea_topics.id` FOREIGN KEY (`topic_id`) REFERENCES `ea_topics` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
