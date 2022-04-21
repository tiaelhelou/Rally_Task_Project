<?php

include('ConnecttoDb\my_db.php'); 
include('Login');


$new_name = $_POST['user_name'];
$new_username = $_POST['user_username'];
$new_password = $_POST['user_password'];
$new_gender = $_POST['user_gender'];
$new_birthday = $_POST['user_date_of_birth'];
$new_phone = $_POST['user_phone_number'];
$interest = $_POST['user_interest_category'];


$query = $mysqli->prepare("UPDATE users SET user_name = $new_name, user_username = $new_username, user_password = 
$new_password, user_gender = $new_gender, user_date_of_birth = $new_birthday, user_phone_number = $new_phone, user_interest_category = $interest WHERE user_id = $id;");
$query->execute();

echo "Updated successfully";


?>