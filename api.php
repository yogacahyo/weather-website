<?php
$url = "https://mgm.ub.ac.id/weather.json";
$response = file_get_contents($url);
echo $response;
?>