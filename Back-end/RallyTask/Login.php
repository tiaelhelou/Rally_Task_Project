<?php

header('Access-Control-Allow-Origin: *');
session_start();
include('ConnecttoDb\my_db.php'); 

$data = json_decode(file_get_contents("php://input"));

$username = $data->user_username;
$password = $data->user_password;

$query = $mysqli->prepare("SELECT user_id FROM users WHERE user_username = ? AND user_password = ?;");
$query->bind_param('si',$username,$password);
$query->execute();
$account_result = $query->get_result();
$row = mysqli_fetch_row($account_result);


if($row == 0){

	$response = [];
	$response["status"] = false;

	$json_response = json_encode($response);
	echo $json_response;
	return;
	
}
else{
	$id = $row[0];
	$_SESSION["ID"] = $id;

	$response = [];
	$response["status"] = true;

	$json_response = json_encode($response);
	echo $json_response;
	return;
}

?>