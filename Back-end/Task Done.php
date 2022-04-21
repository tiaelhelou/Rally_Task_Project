<?php

include('ConnecttoDb\my_db.php'); 
include('Login');

$name = $_GET["task_name"];

$query = $mysqli->prepare("SELECT task_id FROM tasks WHERE task_name = $name;");
$query->execute();
$tid_result = $query->get_result();
$row = mysqli_fetch_row($tid_result);
$tid = $row[0];


$query = $mysqli->prepare("INSERT INTO tasks (users_user_id, task_status) VALUES (?, ?) WHERE task_id = $tid");
        $query->bind_param("is", $id, 'completed');
        $query->execute();

?>