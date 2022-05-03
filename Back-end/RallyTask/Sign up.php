<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$data = json_decode(file_get_contents("php://input"));

$name = $data->user_name;
$username = $data->user_username;
$password = $data->user_password;
$gender = $data->user_gender;
$birthday = $data->user_date_of_birth;
$phone = $data->user_phone_number;
$points = 0;
 
$query = $mysqli->prepare("SELECT user_id FROM users WHERE user_name = $name and user_phone_number = $phone;");
$query->execute();
$account_result = $query->get_result();

$query = $mysqli->prepare("SELECT user_id FROM users WHERE user_username = $username;");
$query->execute();
$username_result = $query->get_result();

if(empty($account_result)){
	if(empty($username_result)){
		$query = $mysqli->prepare("INSERT INTO users (user_name, user_username, user_password, user_gender, user_date_of_birth, user_phone_number, user_points) VALUES (?, ?, ?, ? , ?, ?)");
		$query->bind_param("sssssii", $name , $username , $password , $gender, $birthday , $phone , $points);
		$query->execute();

		echo "Account created successfully";
	}
	else{
		echo "Username already exist!";
	}

	
}
else{
	echo "You already have an account!";
}

?>