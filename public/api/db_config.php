
<?php
/**
 * Database Configuration for MilesWeb MySQL/MariaDB Hosting
 * 
 * This file contains the database connection parameters for your MilesWeb hosting.
 * You should update these values with your actual database credentials provided by MilesWeb.
 */

// Database credentials - update with your actual MilesWeb credentials
$db_host = 'localhost'; // Typically 'localhost' for shared hosting
$db_name = 'your_database_name';  // The database name provided by MilesWeb
$db_user = 'your_database_username'; // Your database username
$db_pass = 'your_database_password'; // Your database password

// Create connection
try {
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Set character set
    $conn->exec("set names utf8mb4");
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
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit;
}
?>
