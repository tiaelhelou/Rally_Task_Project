<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

session_start();
$id = $_SESSION['ID'];

$query = $mysqli->prepare("SELECT user_points FROM users WHERE user_id = ?;");
$query->bind_param('i',$id);
$query->execute();
$point_result = $query->get_result();
$row = mysqli_fetch_row($point_result);
$points = $row[0];

$json_points = json_encode($points);
echo $json_points;

?>