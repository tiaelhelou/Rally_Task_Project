<?php

include('ConnecttoDb\my_db.php'); 


$query = $mysqli->prepare("SELECT task_name, task_start_date, task_end_date FROM tasks WHERE task_status != 'closed' or task_status != 'done' ;);
$query->execute();
$task_result = $query->get_result();

$task = [];

while($tasks = $task_result->fetch_assoc()){
    $task[] = $tasks;
}

$json_task = json_encode($task);
echo $json_task;


?>