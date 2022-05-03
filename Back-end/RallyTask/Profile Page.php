<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 
include('Login.php');

$query = $mysqli->prepare("SELECT task_name, task_status FROM tasks WHERE task_status = 'completed' and users_user_id = $id;");
$query->execute();
$ctask_result = $query->get_result();

$ctask = [];

while($tasks = $ctask_result->fetch_assoc()){
    $ctask[] = $tasks;
}

$json_ctask = json_encode($ctask);
echo $json_ctask;


$query = $mysqli->prepare("SELECT task_name, task_status FROM tasks WHERE task_status = 'undergoing' and users_user_id = $id;");
$query->execute();
$utask_result = $query->get_result();

$utask = [];

while($tasks = $utask_result->fetch_assoc()){
    $utask[] = $tasks;
}

$json_utask = json_encode($utask);
echo $json_utask;

?>