
-- Database setup script for conference website
-- Run this script in phpMyAdmin on your MilesWeb hosting

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  postal_code VARCHAR(20),
  registration_type VARCHAR(50) NOT NULL,
  paper_title VARCHAR(255),
  created_at DATETIME NOT NULL,
  payment_status VARCHAR(50) DEFAULT 'pending',
  payment_id VARCHAR(255),
  amount DECIMAL(10,2)
);

-- Create paper submissions table
CREATE TABLE IF NOT EXISTS submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  abstract TEXT NOT NULL,
  keywords VARCHAR(255) NOT NULL,
  author_name VARCHAR(255) NOT NULL,
  author_email VARCHAR(255) NOT NULL,
  author_institution VARCHAR(255) NOT NULL,
  co_authors TEXT,
  file_path VARCHAR(255),
  submission_date DATETIME NOT NULL,
  status VARCHAR(50) DEFAULT 'under review'
);

-- Create contact form submissions table
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  submitted_at DATETIME NOT NULL,
  is_read BOOLEAN DEFAULT FALSE
);

-- Create speakers table
CREATE TABLE IF NOT EXISTS speakers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  bio TEXT,
  image_url VARCHAR(255),
  speaking_date DATE,
  speaking_time TIME,
  topic VARCHAR(255)
);

-- Create admin users table for dashboard access
CREATE TABLE IF NOT EXISTS admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  last_login DATETIME,
  created_at DATETIME NOT NULL
);

-- Add indexes for better performance
ALTER TABLE registrations ADD INDEX idx_email (email);
ALTER TABLE registrations ADD INDEX idx_registration_type (registration_type);
ALTER TABLE submissions ADD INDEX idx_author_email (author_email);
ALTER TABLE submissions ADD INDEX idx_status (status);
