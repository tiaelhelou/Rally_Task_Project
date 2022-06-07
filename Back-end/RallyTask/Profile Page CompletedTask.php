<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$id = $_GET['user_id'];

$query = $mysqli->prepare("SELECT task_name FROM tasks WHERE task_status = 'completed' and users_user_id = ?;");
$query->bind_param('i',$id);
$query->execute();
$ctask_result = $query->get_result();

$ctask = [];
$count =0;

while($tasks = $ctask_result->fetch_assoc() and $count<2){
    $ctask[] = $tasks;
    $count++;
}

$json_ctask = json_encode($ctask);
echo $json_ctask;

?>