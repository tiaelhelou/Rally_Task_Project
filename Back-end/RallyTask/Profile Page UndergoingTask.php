<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$query = $mysqli->prepare("SELECT task_name FROM tasks WHERE task_status = 'undergoing';");
$query->execute();
$utask_result = $query->get_result();

$utask = [];
$count =0;

while($tasks = $utask_result->fetch_assoc() and $count<2){
    $utask[] = $tasks;
    $count++;
}

$json_utask = json_encode($utask);
echo $json_utask;

?>