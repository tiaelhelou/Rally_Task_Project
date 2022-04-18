<?php

include('ConnecttoDb\my_db.php'); 

$name = $_POST['user_name'];
$username = $_POST['user_username'];
$password = $_POST['user_password'];
$gender = $_POST['user_gender'];
$birthday = $_POST['user_date_of_birth'];
$phone = $_POST['user_phone_number']
$points = 0;
 
$query = $mysqli->prepare("SELECT user_id FROM users WHERE user_name = $name and user_phone_number = $phone;");
$query->execute();
$result = $query->get_result();

if(empty($result)){

	$query = $mysqli->prepare("INSERT INTO users (user_name, user_username, user_password, user_gender, user_date_of_birth, user_phone_number, user_points) VALUES (?, ?, ?, ? , ?, ?)");
	$query->bind_param("sssssii", $name , $username , $password , $gender, $birthday , $phone , $points);
	$query->execute();
}
else{
	echo "You already have an account!"
}

?>