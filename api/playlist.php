<?php
$serverAddress = $_SERVER['HTTP_HOST'] ?? 'default.server.address';

// The original M3U playlist URL
$playlist_url = "https://tplay.yuvraj49.in/tp/gflhtIE007Bh/playlist.m3u";

// Fetch the playlist content
$playlist_content = file_get_contents($playlist_url);

if ($playlist_content === false) {
    die('Error fetching playlist.');
}

// Replace URLs in the playlist for both key and manifest
$modified_content = str_replace(
    "#KODIPROP:inputstream.adaptive.license_key=https://tplay.yuvraj49.in/tp/gflhtIE007Bh/key.php?id=",
    "#KODIPROP:inputstream.adaptive.license_key=https://$serverAddress/key?id=",
    $playlist_content
);

$modified_content = str_replace(
    "https://tplay.yuvraj49.in/tp/gflhtIE007Bh/manifest.mpd?id=",
    "https://$serverAddress/mpd?id=",
    $modified_content
);

// Remove lines with URLs ending in .m3u8 followed by query parameters
$modified_content = preg_replace('/#EXTINF:[^\r\n]*\r?\nhttps?:\/\/[^\r\n]+\.m3u8\?[^\r\n]*\r?\n/', '', $modified_content);

// Remove specific unwanted URLs
$modified_content = preg_replace('/#EXTINF:[^\r\n]*\r?\nhttps?:\/\/[^\r\n]+\.m3u8\r?\n/', '', $modified_content);

// Remove any empty lines
$modified_content = preg_replace('/^\s*[\r\n]+/m', '', $modified_content);

// Set appropriate headers for M3U playlist
header('Content-Type: audio/mpegurl');
header('Content-Disposition: attachment; filename="playlist.m3u"');

// Output the modified playlist
echo $modified_content;
?>
