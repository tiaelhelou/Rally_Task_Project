<?php

include('ConnecttoDb\my_db.php'); 


$query = $mysqli->prepare("SELECT task_name FROM tasks WHERE task_status == 'open' ;);
$query->execute();
$task_result = $query->get_result();

$task = [];

while($tasks = $task_result->fetch_assoc()){
    $task[] = $tasks;
}

$json_task = json_encode($task);
echo $json_task;


?>