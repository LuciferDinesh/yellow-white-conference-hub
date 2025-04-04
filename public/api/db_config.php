
<?php
/**
 * Database Configuration for MilesWeb MySQL/MariaDB Hosting
 * 
 * This file contains the database connection parameters for your MilesWeb hosting.
 * You should update these values with your actual database credentials provided by MilesWeb.
 */

// Database credentials - Update these with your actual MilesWeb credentials
$db_host = 'localhost'; // This is typically 'localhost' for shared hosting
$db_name = 'icbeaimlnit_db';  // Replace with your actual database name
$db_user = 'icbeaimlnit_user'; // Replace with your database username
$db_pass = 'your_secure_password'; // Replace with your database password

// Create connection
try {
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Set character set
    $conn->exec("set names utf8mb4");
    
    // Test connection
    $conn->query("SELECT 1");
    // Uncomment this line to show successful connection (for testing only, remove in production)
    // echo json_encode(['status' => 'success', 'message' => 'Database connected successfully']);
} catch(PDOException $e) {
    // For security in production, don't output the actual error message with database credentials
    error_log("Connection failed: " . $e->getMessage());
    die(json_encode(['error' => 'Database connection failed. Please try again later.']));
}

/**
 * Function to sanitize input data
 */
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Enable CORS for API requests
header("Access-Control-Allow-Origin: *"); // In production, replace * with your actual domain
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit;
}
?>
