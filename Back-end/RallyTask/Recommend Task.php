<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

session_start();
$id = $_SESSION["ID"];

$query = $mysqli->prepare("SELECT user_interest_category FROM users WHERE user_id = ?;");
$query->bind_param('i',$id);
$query->execute();
$interest_result = $query->get_result();
$row = mysqli_fetch_row($interest_result);
$interest = $row[0];

$query = $mysqli->prepare("SELECT task_name, task_start_date, task_end_date FROM tasks WHERE (task_status != 'closed' or task_status != 'completed') and task_category = $interest;");
$query->bind_param('s',$interest);
$query->execute();
$rtask_result = $query->get_result();

$rtask = [];
$count =0;

while($tasks = $rtask_result->fetch_assoc() and $count < 1){
    $rtask[] = $tasks;
    $count++;
}

$json_rtask = json_encode($rtask);
echo $json_rtask;


?>