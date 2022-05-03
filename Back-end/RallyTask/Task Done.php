<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 
include('Login.php');

$data = json_decode(file_get_contents("php://input"));

$name = $data->task_name;

$query = $mysqli->prepare("SELECT task_id FROM tasks WHERE task_name = $name;");
$query->execute();
$tid_result = $query->get_result();
$row = mysqli_fetch_row($tid_result);
$tid = $row[0];


$query = $mysqli->prepare("UPDATE tasks SET users_user_id = $id, task_status = 'completed' WHERE task_id = $tid;");
$query->execute();


$query = $mysqli->prepare("SELECT task_points FROM tasks WHERE task_id = $tid;");
$query->execute();
$tpoints_result = $query->get_result();
$row = mysqli_fetch_row($tpoints_result);
$tpoints = $row[0];

$query = $mysqli->prepare("SELECT user_points FROM users WHERE user_id = $id;");
$query->execute();
$point_result = $query->get_result();
$row = mysqli_fetch_row($point_result);
$upoint = $row[0];

$new_points = $upoint + $tpoints; 

$query = $mysqli->prepare("UPDATE users SET user_points = $new_points WHERE user_id = $id;");
$query->execute();

?>