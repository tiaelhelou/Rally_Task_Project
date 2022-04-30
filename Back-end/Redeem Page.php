<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 
include('Login');

$query = $mysqli->prepare("SELECT user_points FROM users WHERE user_id = $id;");
$query->execute();
$point_result = $query->get_result();
$row = mysqli_fetch_row($point_result);
$points = $row[0];

echo "User's points: " + $points;


$query = $mysqli->prepare("SELECT gift_name, gift_points FROM gifts WHERE gift_status == 'available' and  gift_id != SELECT gift_id FROM users_redeems_gifts WHERE users_user_id = $id ;");
$query->execute();
$gift_result = $query->get_result();

$gift = [];

while($gifts = $gift_result->fetch_assoc()){
    $gift[] = $gifts;
}

$json_gift = json_encode($gift);
echo $json_gift;


?>