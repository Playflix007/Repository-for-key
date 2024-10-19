<?php
// Get the 'id' parameter from the URL
$id = isset($_GET['id']) ? $_GET['id'] : '';

// Check if id is not empty
if (!empty($id)) {
    // Print the full MPD URL directly instead of redirecting
    echo "https://m3u.yuvraj43.xyz/tp/KxHw88frbh6r/manifest/$id.mpd";
} else {
    echo "No ID provided!";
}
?>
