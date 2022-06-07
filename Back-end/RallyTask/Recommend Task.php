<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$id = $_GET['user_id'];

$query = $mysqli->prepare("SELECT user_interest_category FROM users WHERE user_id = ?;");
$query->bind_param('i',$id);
$query->execute();
$interest_result = $query->get_result();
$row = mysqli_fetch_row($interest_result);
$interest = $row[0];

$query = $mysqli->prepare("SELECT task_name FROM tasks WHERE (task_status != 'closed' or task_status != 'completed') and task_category = ?;");
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