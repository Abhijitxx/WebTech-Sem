<!html>
<body>
<form method="post">
    Enter email: <input type="text" name="email">
    <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    
    if (preg_match("/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+$/", $email)) {
        echo "Valid Email";
    } else {
        echo "Invalid Email";
    }
}
?>
</body>
</html>