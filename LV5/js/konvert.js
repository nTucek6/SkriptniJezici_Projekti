var valuta = ["Euro","Kuna","Dollar"];

function LoadSelect1()
{
    $("#kon1").empty();
   
valuta.forEach(element=>
    {
        $("#kon1").append("<option value='"+element+"'>"+element+"</option>")
    });  
}
function LoadSelect2()
{
    $("#kon2").empty();
    valuta.forEach(element=>
        {
            if(element != $("#kon1").val())
            $("#kon2").append("<option value='"+element+"'>"+element+"</option>")
        });
}
LoadSelect1();
LoadSelect2();
$("#kon1").change(function()
{
   LoadSelect2();
});



function Konvert()
{
    var c1 = $("#kon1").val();
    var c2 = $("#kon2").val();
    var unos = $("#unos").val();
    var prikaz = $("#prikazi");
    if(c1 == "Euro" && c2 == "Kuna")
    {
        prikaz.val(parseInt(unos)*7.55);
    }
    if(c1 == "Euro" && c2 == "dollar")
    {
        prikaz.val(parseInt(unos)* 1.06);
    }
    if(c1 == "Dollar" && c2 == "Kuna")
    {
        prikaz.val(parseInt(unos)*7.12);
    }
    if(c1 == "Dollar" && c2 == "Euro")
    {
        prikaz.val(parseInt(unos)*0.94);
    }
    if(c1 == "Kuna" && c2 == "Euro")
    {
        prikaz.val(parseInt(unos)*0.13);
    }
    if(c1 == "Kuna" && c2 == "Dollar")
    {
        prikaz.val(parseInt(unos)*0.14);
    }


   


}

