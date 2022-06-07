<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$id = $_GET['user_id'];

$query = $mysqli->prepare("SELECT user_points FROM users WHERE user_id = ?;");
$query->bind_param('i',$id);
$query->execute();
$point_result = $query->get_result();

$point = [];


while($users = $point_result->fetch_assoc() ){
    $point[] = $users;
}

$json_points = json_encode($point);
echo $json_points;

?>