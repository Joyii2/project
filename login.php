<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    try {
            require_once "connect.php";
            $query = "INSERT INTO login(username,pwd) values (?,?);";
    
            $stmt = $pdo->prepare($query);
            $stmt->execute([$username, $password]);
    
            header("location: acc.html?login=success");
            $pdo=null;
            $stmt=null;
            die();
    
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
} else {   
    header("location: acc.html");
    die();
}
