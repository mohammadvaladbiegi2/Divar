-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 02:59 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `divar`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` text NOT NULL,
  `description` text NOT NULL,
  `CREATED_AT` varchar(100) NOT NULL,
  `phone` text NOT NULL,
  `category` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `shortname` varchar(100) NOT NULL,
  `function` text DEFAULT NULL,
  `condition` varchar(100) DEFAULT NULL,
  `meterage` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `description`, `CREATED_AT`, `phone`, `category`, `city`, `img`, `shortname`, `function`, `condition`, `meterage`) VALUES
(1, '55متریدوطبقه نایسر', '۷۲۰٬۰۰۰٬۰۰۰', '55متری طبقه اول تکمیل دوم آماده گچ کاری خ دکل سوم', '1402,08,29', '09180000000', 'home', 'sanandaj', '../public/images/e8ec7d4c-5988-487c-9e45-4cd98b90d47f.jpg', 'homesanandaj1', NULL, 'تازه ساخت', '55'),
(2, 'تریل فلات ۲۰۰ نیوفیس', '۱۱۲٬۰۰۰٬۰۰۰ ', 'سلام\r\nخشک خشک مدارک تکمیل بیمه ،کارت سوخت کارت موتور برگ سبز آماده انتقال', '1402,08,30', '09124444444', 'vehicle', 'sanandaj', '../public/images/362d9ea1-ef00-487a-a0e7-0fe31fbd6698.jpg', 'vehicle1', '1000', 'سالم', NULL),
(3, 'اپل iPhone 7 با حافظهٔ ۱۲۸ گیگابایت', '۱٬۸۰۰٬۰۰۰', 'آیفون ۷ باتری ۱۰۰\r\nبیس باند پرونده و نیازمند تعمیره\r\nمناسب تعمیرکارها\r\nکارتن موجود', '1402,08,30', '09120000000', 'Digital', 'sanandaj', '../public/images/4fe51bad-ddbe-4443-84bf-cab12d0ec175.jpg', 'phone1', 'دسته دوم', 'نیاز به تعمیر', NULL),
(4, 'مبل ال با میزعسلی', '۶٬۵۰۰٬۰۰۰', 'مبل ال با میزعسلی', '1402.08.30', '09110000000', 'kitchen', 'tehran', '../public/images/458824d6-c91d-42c3-830f-3915364028a1.jpg', 'Sofa1', 'دسته دوم', 'سالم', NULL),
(5, 'فروش شلغم و ترب اوشینی ارگانیک (ژاورود)', '۲۵٬۰۰۰', 'یه خانم مهندس کشاورزی هستم ترب اوشینی و شلغم تازه برداشت شده، بدون استفاده از کود و سم، آبیاری با آب چاه، براتون آماده کردم\r\n\r\nتوجه:\r\nقیمت کالا مقطوع است و تخفیف ندارد.', '1402.09.01', '01234567891', 'kitchen', 'tehran', '../public/images/b9ceb89c-0d52-42a8-bf31-c6a8a6f661d1.jpg', 'turnip', NULL, 'سالم بهداشتی', NULL),
(6, 'خدمات تعمیرات پکیج لباسشویی یخچال ابگرمکن تعمیرکار', 'توافقی', 'باسلام تعمیر انواع مدل های پکیج ولباسشویی ایرانی خارجی تعمیرات انواع یخچال درمحل درکمترین زمان هزینه تمامی نقاط شهر سنندج', '1402.09.01', '01234567898', 'services', 'tehran', '../public/images/d9wS0oVLMnP9oxCKJUtCeA.jpg', 'laundryservice', '10 سال سابقه', NULL, NULL),
(7, 'هودی اسپرت', '۲۸۰٬۰۰۰', 'هودی اسپرت پسرانه ودخترانه جنس دورس گرم مدل ازاد\r\nسایز۶۰تا۶۵برای سن ۱۰تا۱۱سال اندازه میشه\r\nمعاوضه ندارم\r\nدر حدنو یک بار پوشیده شده به دلیل سایز نبودن فروخته میشه\r\n\r\nتوجه:\r\nقیمت کالا مقطوع است و تخفیف ندارد.', '1402.09.02', '01234567897', 'personalitems', 'tehran', '../public/images/5b4275ea-83e5-4e06-b2d9-c983e40b16f2.jpg', 'hoodie', 'اکبند', 'سالم اکبند', NULL),
(8, 'سهره قناری دهن ایوب رحمتی جدید', '۳٬۵۰۰٬۰۰۰', 'با سلام خدمت تمامی عشق بازان عزیز جوجه سهره قناری ۵ماهه تازه تخت دهن ایوب رحمتی جدید و دکتر بیات بیا مهر تقریبلا همه دهن هارو گرفته بدون غلط تازه داره بر پا میشه کوتاه بلند میخونه ولی دهن هاش واضحه فقط یک بیا مادریم داره لان خودم بوده شاه جوجه طوسی رنگ سالم و سرحال باهاش کار کنی مست میشه من بدلیل مشغله کاری بهش نمی رسم پول یه سهره باغی عادی گزاشتم مست بشه قیمتش خیلی از اینا زیاد تره پس دادشم الکی مزاحم نشو (فروش بدون قفس ارسالم دارم )با تشکر. یه فیلم کوتاه دارم روبیکا پیام بدین چشم.', '1402.09.02', '01234567895', 'entertainment', 'Kermanshah', '../public/images/427b280f-4c9b-4bda-aabc-db4cbe4bda2e.jpg', 'bird', NULL, 'سالم', NULL),
(9, 'پیدا شده', '0', 'امروز پیداش کردم صاحبش بیاد تحویل بگیره', '1402.09.03', '01234567894', 'social', 'Kermanshah', '../public/images/aeddb812-4563-4c1c-9d29-79107a32f3db.jpg', 'dog', NULL, 'گم شده', NULL),
(10, 'یخچال ایستاده', '۲۷٬۰۰۰٬۰۰۰', 'یخچال ایستاده چهار در یکطرف شیشه کاملا سالم تمیز ضمانتی', '1402.09.03', '01234567892', 'industrialequipment', 'Kermanshah', '../public/images/86d07656-2dc9-4932-87a6-8d99e16a6b2b.jpg', 'Refrigerator', 'اکبند', 'سالم', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
