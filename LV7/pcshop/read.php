<?php
include "connectionDb.php";
include "classes.php";
header('Access-Control-Allow-Origin: *');
header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');
$query = "Select * From artikli";
$result = $oConnection->query($query);
//var_dump($result);
$oArtikli = array();
while($oRow = $result->fetch(PDO::FETCH_BOTH))
{
$id = $oRow['Id'];
$N = $oRow['Naziv'];
$P = $oRow['Proizvodac'];
$M = utf8_encode($oRow['Model']);
$K = $oRow['Kolicina'];
$C = $oRow['Cijena'];
$artikl = new Artikl($id, $N,$P,$M,$K,$C);
array_push($oArtikli,$artikl);
}
//var_dump($oArtikli);
echo json_encode($oArtikli);
?>