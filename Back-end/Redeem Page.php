<?php

include('ConnecttoDb\my_db.php'); 
include('Login')


$query = $mysqli->prepare("SELECT user_points FROM users WHERE user_username = $username and user_password = $password;");
$query->execute();
$account_result = $query->get_result();
$row = mysqli_fetch_row($account_result);
$points = $row[0];

echo "User's points: " + $points;


?>