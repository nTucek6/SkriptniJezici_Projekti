<?php
include "connectionDb.php";
header('Access-Control-Allow-Origin: *');

if(isset($_POST['queryType']))
{
switch($_POST['queryType'])
{
    case "Dodaj":
        $query = "Insert into artikli (Naziv,Proizvodac,Model,Kolicina,Cijena) values('".$_POST['naziv']."','".$_POST['proizvodac']."','".$_POST['model']."',".intval($_POST['kolicina']).",".floatval($_POST['cijena']).")";
        echo $query;
        $result = $oConnection->query($query);
        break;
    case "Obrisi":
        $query = "Delete from artikli where Id=".$_POST['Id'];
        echo $query;
        $result = $oConnection->query($query);
        break; 
    case "Azuriraj":
        $query = "Update artikli set Naziv='".$_POST['Naziv']."' where Id=".$_POST['Id'];
        echo $query;
        $result = $oConnection->query($query);
        break;
    case "UpdateArtikl":
    $query = "Update artikli set Proizvodac='".$_POST['proizvodac']."',Naziv='".$_POST['naziv']."',Model='".$_POST['model']."',Kolicina=".$_POST['kolicina'].",Cijena=".$_POST['cijena']." where Id=".$_POST['Id'];
    echo $query;
    $result = $oConnection->query($query);
        break;
}
}




?>