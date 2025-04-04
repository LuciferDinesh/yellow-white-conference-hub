
<?php
/**
 * Registration Form API Endpoint
 * 
 * This file handles the registration form submissions from your React application.
 * It validates the input, inserts the data into your database, and returns a JSON response.
 */

// Include database configuration
require_once 'db_config.php';

// Only allow POST requests for form submissions
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get the posted data
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
$requiredFields = ['name', 'email', 'institution', 'phone', 'registrationType'];
foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

try {
    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO registrations (name, email, institution, phone, address, city, state, country, 
                            postal_code, registration_type, paper_title, created_at) 
                            VALUES (:name, :email, :institution, :phone, :address, :city, :state, :country, 
                            :postal_code, :registration_type, :paper_title, NOW())");
    
    // Bind parameters
    $stmt->bindParam(':name', sanitizeInput($data['name']));
    $stmt->bindParam(':email', sanitizeInput($data['email']));
    $stmt->bindParam(':institution', sanitizeInput($data['institution']));
    $stmt->bindParam(':phone', sanitizeInput($data['phone']));
    $stmt->bindParam(':address', sanitizeInput($data['address'] ?? ''));
    $stmt->bindParam(':city', sanitizeInput($data['city'] ?? ''));
    $stmt->bindParam(':state', sanitizeInput($data['state'] ?? ''));
    $stmt->bindParam(':country', sanitizeInput($data['country'] ?? ''));
    $stmt->bindParam(':postal_code', sanitizeInput($data['postalCode'] ?? ''));
    $stmt->bindParam(':registration_type', sanitizeInput($data['registrationType']));
    $stmt->bindParam(':paper_title', sanitizeInput($data['paperTitle'] ?? ''));
    
    // Execute the statement
    $stmt->execute();
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Registration successful',
        'id' => $conn->lastInsertId()
    ]);
    
} catch(PDOException $e) {
    // Log the error server-side
    error_log("Registration error: " . $e->getMessage());
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Registration failed. Please try again later.'
    ]);
}
?>
