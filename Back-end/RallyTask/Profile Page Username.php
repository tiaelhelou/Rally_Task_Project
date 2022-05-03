<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 
include('Login.php');

$query = $mysqli->prepare("SELECT user_username FROM users WHERE user_id = $id;");
$query->execute();
$user_result = $query->get_result();

$user = [];

while($users = $user_result->fetch_assoc()){
    $user[] = $users;
}

$json_user= json_encode($user);
echo $json_user;

?>