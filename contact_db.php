<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $msg_text = $_POST['msg_text'];

    try {
        require_once "connect.php";
        $query = "INSERT INTO contact (username,email,phone,msg_text) values (?,?,?,?);";

        $stmt = $pdo->prepare($query);
        $stmt->execute([$username, $email, $phone, $msg_text]);

        header("location: contact.html?msg=sent");
        $pdo=null;
        $stmt=null;
        die();

    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
} else {   
    header("location: contact.html");
    die();
}