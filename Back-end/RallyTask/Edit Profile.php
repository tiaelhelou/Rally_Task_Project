<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

session_start();
$id = $_SESSION['ID']; 

$data = json_decode(file_get_contents("php://input"));

$new_name = $data->user_name;
$new_username = $data->user_username;
$new_password = $data->user_password;
$new_gender = $data->user_gender;
$new_birthday = $data->user_date_of_birth;
$new_phone = $data->user_phone_number;
$interest = $data->user_interest_category;


$query = $mysqli->prepare("UPDATE users SET user_name = ?, user_username = ?, user_password = 
?, user_gender = ?, user_date_of_birth = ?, user_phone_number = ?, user_interest_category = ? WHERE user_id = $id;");
$query->bind_param("sssssis", $new_name , $new_username , $new_password , $new_gender, $new_birthday , $new_phone , $interest);
$query->execute();

$response = [];
$response["status"] = true;

$json_response = json_encode($response);
echo $json_response;
return;

?>