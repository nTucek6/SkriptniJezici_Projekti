$(document).ready(function()
{
	
});


function Dodaj()
{
if($("#ime").val() != "" && $("#prezime").val() != ""&& $("#jmbag").val() != "" &&$("#oib").val() != "" &&$("#datum_rod").val() != "" && $("#adresa").val() != "" &&$("#pbr").val() != ""&& $("#grad").val() != "")
{
    var osoba = {}
    var ime = $("#ime").val();
    var prezime = $("#prezime").val() ;
    var jmbag = $("#jmbag").val();
    var oib = $("#oib").val();
    var datum_rod = $("#datum_rod").val();
    var adresa = $("#adresa").val();
    var pbr = $("#pbr").val();
    var grad =$("#grad").val()
    var datum = new Date(datum_rod);
    var noviDatum = datum.getDate()+"-"+datum.getMonth()+"-"+datum.getFullYear();
    console.log(noviDatum);
    if($.isNumeric(jmbag)&&$.isNumeric(oib)&&$.isNumeric(pbr))
    {
        osoba = 
        {
            ime:ime,
            prezime:prezime,
            jmbag:jmbag,
            oib:oib,
            datum_rodjenja:noviDatum,
            adresa:adresa,
            pbr:pbr,
            grad:grad
        } 
    }
    else
    {
        alert("Oib, jmbag, postanski broj moraju bit brojevi!");
    }

console.log(osoba);

}
else
{
    alert("Sva polju moraju biti popunjena!");
}

}