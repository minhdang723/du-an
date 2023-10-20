-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2023 at 04:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final`
--

-- --------------------------------------------------------

--
-- Table structure for table `baiviet`
--

CREATE TABLE `baiviet` (
  `id` int(255) NOT NULL,
  `tieuDe` varchar(255) NOT NULL,
  `hinhAnh` varchar(255) NOT NULL,
  `noiDung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `baiviet`
--

INSERT INTO `baiviet` (`id`, `tieuDe`, `hinhAnh`, `noiDung`) VALUES
(1, 'Bài viết về tắm trắng', 'https://rebornclinic.com.vn/upload/images/tam-trang-body.jpg', 'Nội dung của bài viết tắm trắng'),
(2, 'Bài viết về massage', 'https://bloganchoi.com/wp-content/uploads/2016/10/tam-trang-1.jpg', 'Nội dung của bài viết massage'),
(3, 'Bài viết về thẩm mỹ', 'https://rebornclinic.com.vn/upload/images/tam-trang-body.jpg', 'Nội dung của bài viết tắm trắng');

-- --------------------------------------------------------

--
-- Table structure for table `binhluan`
--

CREATE TABLE `binhluan` (
  `id` int(255) NOT NULL,
  `id_baiViet` int(255) NOT NULL,
  `id_user` int(255) NOT NULL,
  `anhNguoiBinhLuan` varchar(255) NOT NULL,
  `noiDung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chitietdichvu`
--

CREATE TABLE `chitietdichvu` (
  `id` int(255) NOT NULL,
  `id_dichVu` int(255) NOT NULL,
  `moTa` varchar(255) NOT NULL,
  `gia` float NOT NULL,
  `nhanVienThucHien` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chitietdichvu`
--

INSERT INTO `chitietdichvu` (`id`, `id_dichVu`, `moTa`, `gia`, `nhanVienThucHien`) VALUES
(1, 1, 'Dịch vụ chất lượng', 200, 'Nhung'),
(2, 1, 'Dịch vụ tốt', 300, 'Châu');

-- --------------------------------------------------------

--
-- Table structure for table `dichvu`
--

CREATE TABLE `dichvu` (
  `id` int(255) NOT NULL,
  `tieuDe` varchar(255) NOT NULL,
  `hinhAnh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dichvu`
--

INSERT INTO `dichvu` (`id`, `tieuDe`, `hinhAnh`) VALUES
(1, 'Tắm trắng', 'https://rebornclinic.com.vn/upload/images/tam-trang-body.jpg'),
(2, 'Nặn mụn', 'https://th.bing.com/th/id/OIP._jp3KKX-7IN263jmPivpWwHaEP?pid=ImgDet&rs=1');

-- --------------------------------------------------------

--
-- Table structure for table `tuvan`
--

CREATE TABLE `tuvan` (
  `id` int(255) NOT NULL,
  `cauHoi` varchar(255) NOT NULL,
  `cauTraLoi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tuvan`
--

INSERT INTO `tuvan` (`id`, `cauHoi`, `cauTraLoi`) VALUES
(1, 'Tôi muốn đặt lịch', 'Vâng bạn hãy gọi vào số hotline để được hỗ trợ tốt nhất nhé'),
(2, 'Giá của phun xăm là bao nhiêu', 'Bảng giá đã có trong phần chi tiết dịch vụ, bạn có thể tham khảo qua');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `numberPhone` varchar(255) NOT NULL,
  `role` tinyint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baiviet`
--
ALTER TABLE `baiviet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chitietdichvu`
--
ALTER TABLE `chitietdichvu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dichvu`
--
ALTER TABLE `dichvu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tuvan`
--
ALTER TABLE `tuvan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `baiviet`
--
ALTER TABLE `baiviet`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chitietdichvu`
--
ALTER TABLE `chitietdichvu`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `dichvu`
--
ALTER TABLE `dichvu`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tuvan`
--
ALTER TABLE `tuvan`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
