<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$data = json_decode(file_get_contents("php://input"));

$new_name = $data->user_name;
$new_username = $data->user_username;
$new_password = $data->user_password;
$new_gender = $data->user_gender;
$new_birthday = $data->user_date_of_birth;
$new_phone = $data->user_phone_number;
$interest = $data->user_interest_category;
$id = $data->user_id;


$query = $mysqli->prepare("UPDATE users SET user_name = ?, user_username = ?, user_password = 
?, user_gender = ?, user_date_of_birth = ?, user_phone_number = ?, user_interest_category = ? WHERE user_id = ?;");
$query->bind_param("sssssisi", $new_name , $new_username , $new_password , $new_gender, $new_birthday , $new_phone , $interest, $id);
$query->execute();

return;

?>