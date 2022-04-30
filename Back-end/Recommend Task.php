<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 
include('Login'); 

$query = $mysqli->prepare("SELECT user_interest_category FROM users WHERE user_id = $id;");
$query->execute();
$interest_result = $query->get_result();
$row = mysqli_fetch_row($interest_result);
$interest = $row[0];

$query = $mysqli->prepare("SELECT task_name, task_start_date, task_end_date FROM tasks WHERE (task_status != 'closed' or task_status != 'done') and task_category = $interest ;);
$query->execute();
$rtask_result = $query->get_result();

$rtask = [];

while($tasks = $rtask_result->fetch_assoc()){
    $rtask[] = $tasks;
}

$json_rtask = json_encode($rtask);
echo $json_rtask;


?>