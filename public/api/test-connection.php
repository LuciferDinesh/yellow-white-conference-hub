
<?php
/**
 * Test Database Connection
 * 
 * This file tests the database connection and returns the status.
 */

// Include the database configuration
require_once 'db_config.php';

// Create a response array
$response = array();

try {
    // Try querying the database
    $stmt = $conn->query("SELECT 1 as test");
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    $response['status'] = 'success';
    $response['message'] = 'Database connection successful';
    $response['data'] = $result;
    $response['info'] = 'PHP Version: ' . phpversion();
    
} catch(PDOException $e) {
    $response['status'] = 'error';
    $response['message'] = 'Database connection failed';
    $response['error'] = 'Error establishing a database connection';
}

// Return the response as JSON
echo json_encode($response);
?>
