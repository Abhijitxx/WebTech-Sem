<html>
<body>
    <form method="post">
        Enter a number: <input type="number" name="num">
        <input type="submit">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num = $_POST["num"];
        $fact = 1;
        for ($i = 1; $i <= $num; $i++) {
            $fact *= $i;
        }
        echo "Factorial of $num is $fact";
    }
    ?>
</body>
</html>