<?php

include('ConnecttoDb\my_db.php'); 
include('Login'); 

$query = $mysqli->prepare("SELECT user_interest_category FROM users WHERE user_username = $username;");
$query->execute();
$account_result = $query->get_result();
$row = mysqli_fetch_row($account_result);
$interest = $row[0];

$query = $mysqli->prepare("SELECT task_name, task_start_date, task_end_date FROM tasks WHERE (task_status != 'closed' or task_status != 'done') and task_category = $interest ;);
$query->execute();
$task_result = $query->get_result();

$task = [];

while($tasks = $task_result->fetch_assoc()){
    $task[] = $tasks;
}

$json_task = json_encode($task);
echo $json_task;


?>