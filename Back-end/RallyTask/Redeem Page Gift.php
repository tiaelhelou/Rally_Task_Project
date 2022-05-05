<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

session_start();
$id = $_SESSION['ID'];

$query = $mysqli->prepare("SELECT gift_id, gift_name, gift_points FROM gifts WHERE gift_status == 'available' and  gift_id != SELECT gift_id FROM users_redeems_gifts WHERE users_user_id = ? ;");
$query->bind_param('i',$id);
$query->execute();
$gift_result = $query->get_result();

$gift = [];

while($gifts = $gift_result->fetch_assoc()){
    $gift[] = $gifts;
}

$json_gift = json_encode($gift);
echo $json_gift;


?>