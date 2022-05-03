<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 
include('Login.php');

$data = json_decode(file_get_contents("php://input"));

$new_name = $data->user_name;
$new_username = $data->user_username;
$new_password = $data->user_password;
$new_gender = $data->user_gender;
$new_birthday = $data->user_date_of_birth;
$new_phone = $data->user_phone_number;
$interest = $data->user_interest_category;


$query = $mysqli->prepare("UPDATE users SET user_name = $new_name, user_username = $new_username, user_password = 
$new_password, user_gender = $new_gender, user_date_of_birth = $new_birthday, user_phone_number = $new_phone, user_interest_category = $interest WHERE user_id = $id;");
$query->execute();

echo "Updated successfully";


?>