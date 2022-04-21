<?php

include('ConnecttoDb\my_db.php'); 
include('Login');


$query = $mysqli->prepare("SELECT task_name FROM tasks WHERE task_status == 'completed' and users_user_id = $id;);
$query->execute();
$ctask_result = $query->get_result();

$ctask = [];

while($tasks = $ctask_result->fetch_assoc()){
    $ctask[] = $tasks;
}

$json_ctask = json_encode($ctask);
echo 'completed' + $json_ctask;


$query = $mysqli->prepare("SELECT task_name FROM tasks WHERE task_status == 'undergoing' and users_user_id = $id;);
$query->execute();
$utask_result = $query->get_result();

$utask = [];

while($tasks = $utask_result->fetch_assoc()){
    $utask[] = $tasks;
}

$json_utask = json_encode($utask);
echo 'undergoing' + $json_utask;

?>