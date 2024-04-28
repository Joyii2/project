<?php

$dsn = "mysql:host=localhost;dbname=webusers";	// server name
$dbusername = "root";		// username
$dbpassword = "";		// password


try {
    $pdo = new PDO ($dsn,$dbusername,$dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    echo "connection failed: " . $e->getMessage();
}