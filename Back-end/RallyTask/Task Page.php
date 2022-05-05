<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$query = $mysqli->prepare("SELECT task_id, task_name, task_points FROM tasks WHERE task_status = 'undergoing';");
$query->execute();
$task_result = $query->get_result();

$task = [];
$count =0;

while($tasks = $task_result->fetch_assoc() and $count<5){
    $task[] = $tasks;
    $count++;
}

$json_task = json_encode($task);
echo $json_task;


?>