<?php
// Get the 'id' parameter from the URL
$id = isset($_GET['id']) ? $_GET['id'] : '';

// Check if id is not empty
if (!empty($id)) {
    // Print the full key URL directly instead of redirecting
    echo "https://m3u.yuvraj43.xyz/tp/KxHw88frbh6r/keys/key?id=$id";
} else {
    echo "No ID provided!";
}
?>
