<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$data = json_decode(file_get_contents("php://input"));

$username = $data->user_username;
$password = $data->user_password;

$query = $mysqli->prepare("SELECT user_id FROM users WHERE user_username = $username AND user_password = $password;");
$query->execute();
$account_result = $query->get_result();
$row = mysqli_fetch_row($account_result);
$id = $row[0];

if(empty($account_result)){
	
	echo "Incorrect username or/and password";
	
}
else{
	echo "Loged in successfully";
}

?>