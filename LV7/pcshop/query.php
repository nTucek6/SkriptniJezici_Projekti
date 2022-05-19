<?php
include "connectionDb.php";
//include "classes.php";
header('Access-Control-Allow-Origin: *');


//var_dump($_POST);
$query = "Insert into artikli (Naziv,Proizvodac,Model,Kolicina,Cijena) values('".$_POST['naziv']."','".$_POST['proizvodac']."','".$_POST['model']."',".intval($_POST['kolicina']).",".floatval($_POST['cijena']).")";
echo $query;
$result = $oConnection->query($query);

?>