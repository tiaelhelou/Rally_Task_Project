<?php

header('Access-Control-Allow-Origin: *');

include('ConnecttoDb\my_db.php'); 

$query = $mysqli->prepare("SELECT user_name, user_points FROM users ORDER BY user_points DESC;");
$query->execute();
$rank_result = $query->get_result();

$rank = [];
$count =0;

while($users = $rank_result->fetch_assoc() and $count < 5){
    $rank[] = $users; 
    $count++;
}

$json_rank = json_encode($rank);
echo $json_rank;


?>