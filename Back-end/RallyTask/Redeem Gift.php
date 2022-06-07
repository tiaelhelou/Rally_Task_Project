<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$data = json_decode(file_get_contents("php://input"));

$g_id = $data->gift_id;
$id = $data->user_id;


$query = $mysqli->prepare("SELECT gift_points FROM gifts WHERE gift_id = ?;");
$query->bind_param('i',$g_id);
$query->execute();
$gpoint_result = $query->get_result();
$row = mysqli_fetch_row($gpoint_result);
$gpoints = $row[0];


$query = $mysqli->prepare("SELECT user_points FROM users WHERE user_id = ?;");
$query->bind_param('i',$id);
$query->execute();
$point_result = $query->get_result();
$row = mysqli_fetch_row($point_result);
$upoint = $row[0];

$new_points = $upoint - $gpoints; 

$query = $mysqli->prepare("UPDATE users SET user_points = ? WHERE user_id = ?;");
$query->bind_param('ii',$new_points, $id);
$query->execute();

$query = $mysqli->prepare("UPDATE gifts SET gift_status = 'redeemed' WHERE gift_id = ?;");
$query->bind_param('i',$id);
$query->execute();


$query = $mysqli->prepare("SELECT gift_id FROM gifts WHERE gift_id = ?;");
$query->bind_param('i',$id);
$query->execute();
$gid_result = $query->get_result();
$row = mysqli_fetch_row($gid_result);
$gid = $row[0];


$query = $mysqli->prepare("INSERT INTO users_redeems_gifts (users_user_id, gifts_gift_id) VALUES (?, ?)");
$query->bind_param("ii", $id, $gid);
$query->execute();

$response = [];
$response["status"] = true;

$json_response = json_encode($response);
echo $json_response;
return;

?>