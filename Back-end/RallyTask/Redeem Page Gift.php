<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$id = $_GET['user_id'];

$query = $mysqli->prepare("SELECT gifts_gift_id FROM users_redeems_gifts WHERE users_user_id = ?;");
$query->bind_param('i',$id);
$query->execute();
$id_gift_result = $query->get_result();
$row = mysqli_fetch_row($id_gift_result);


if ($row == null){

    $query = $mysqli->prepare("SELECT gift_id, gift_name, gift_points FROM gifts WHERE gift_status = 'available'  ;");
    $query->execute();
    $gift_result = $query->get_result();
}
else{
    $id_gift = $row[0];
    $query = $mysqli->prepare("SELECT gift_id, gift_name, gift_points FROM gifts WHERE gift_status = 'available' and gift_id != ? ;");
    $query->bind_param('i',$id_gift);
    $query->execute();
    $gift_result = $query->get_result();
}

$gift = [];
$count =0;

while($gifts = $gift_result->fetch_assoc() and $count<3){
    $gift[] = $gifts;
    $count++;
}

$json_gift = json_encode($gift);
echo $json_gift;


?>