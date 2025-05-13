<!DOCTYPE html>
<html>
<body>
    <form method="post">
        Number1: <input type="number" name="num1"><br>
        Number2: <input type="number" name="num2"><br>
        Operation:
        <select name="op">
            <option value="add">Add</option>
            <option value="sub">Subtract</option>
            <option value="mul">Multiply</option>
            <option value="div">Divide</option>
        </select><br>
        <input type="submit" value="Calculate">
    </form>

    <?php if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $n1 = $_POST["num1"];
        $n2 = $_POST["num2"];
        
        switch ($_POST["op"]) {
            case "add": echo "Result: " . ($n1 + $n2); break;
            case "sub": echo "Result: " . ($n1 - $n2); break;
            case "mul": echo "Result: " . ($n1 * $n2); break;
            case "div": 
                if ($n2 != 0) {
                    echo "Result: " . ($n1 / $n2);
                } else {
                    echo "Error: Cannot divide by zero!";
                }
                break;
        }
    }
    ?>
</body>
</html>