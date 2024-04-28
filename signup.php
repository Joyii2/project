<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    try {
        require_once "connect.php";
        $query = "INSERT INTO users (username,pwd,email) values (?,?,?);";

        $stmt = $pdo->prepare($query);
        $stmt->execute([$username, $password, $email]);

        header("location: accreg.html?signup=success");
        $pdo=null;
        $stmt=null;
        die();

    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
} else {   
    header("location: accreg.html;");
    die();
}