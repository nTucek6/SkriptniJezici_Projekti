<?php
header('Access-Control-Allow-Origin: *');

$host = '127.0.0.1';
$dbName = "pcshop";
$username = "root";
$password = "";

try
{
$oConnection = new PDO("mysql:host=$host;dbname=$dbName", $username, $password);
//echo "Connected to $dbName at $oConnection->host successfully.";
}
catch (PDOException $pe)
{
die("Could not connect to the database $dbName :" . $pe->getMessage());
}


?>