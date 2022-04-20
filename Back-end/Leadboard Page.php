<?php

include('ConnecttoDb\my_db.php'); 


$query = $mysqli->prepare("SELECT user_name, user_points FROM users ORDER BY user_points DESC ;);
$query->execute();
$rank_result = $query->get_result();

$rank = [];

while($users = $rank_result->fetch_assoc()){
    $rank[] = $users;
}

$json_rank = json_encode($rank);
echo $json_rank;


?>