<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$data = json_decode(file_get_contents("php://input"));

$name = $data->user_name;
$username = $data->user_username;
$password = $data->user_password;
$gender = $data->user_gender;
$birthday = $data->user_date_of_birth;
$phone = intval($data->user_phone_number);
$points = 0;
 
$query = $mysqli->prepare("SELECT user_id FROM users WHERE user_name = ? AND user_phone_number = ?;");
$query->bind_param('si',$name,$phone);
$query->execute();
$account_result = $query->get_result();
$row = mysqli_fetch_row($account_result); 


if($row == 0) {

	$query = $mysqli->prepare("INSERT INTO users (user_name, user_username, user_password, user_gender, user_date_of_birth, user_phone_number, user_points)VALUES (?, ?, ?, ?, ?, ?, ?)");
	$query->bind_param("sssssii", $name , $username , $password , $gender, $birthday , $phone , $points);
	$query->execute();

	$response = [];
	$response["status"] = true;

	$json_response = json_encode($response);
	echo $json_response;
	return;
}
else{
	$response = [];
	$response["status"] = false;

	$json_response = json_encode($response);
	echo $json_response;
	return;
}

?>