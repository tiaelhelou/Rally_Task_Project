<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

session_start();
$id = $_SESSION['ID'];

$query = $mysqli->prepare("SELECT task_name FROM tasks WHERE task_status = 'completed' and users_user_id = ?;");
$query->bind_param('i',$id);
$query->execute();
$ctask_result = $query->get_result();

$ctask = [];

while($tasks = $ctask_result->fetch_assoc()){
    $ctask[] = $tasks;
}

$json_ctask = json_encode($ctask);
echo $json_ctask;

?>