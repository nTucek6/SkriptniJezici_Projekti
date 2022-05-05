var tip = ["email","number","password","text"];

tip.forEach(element=>
    {
        $("#odabir").append("<option value='"+element+"'>"+element+"</option>");
    })

$("#odabir").change(function()
{
    if($("#odabir").val() !="null")
    {
        $("#unos").html("<input id='send' type='"+$("#odabir").val()+"'><br><button onclick='Spremi()'>Spremi</button>")
    }
    else
    {
        $("#unos").html("");  
    }

});



function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function Spremi()
{
    var podatak = $("#send").val();
    var tip = $("#odabir").val();
    //var data = {tip:podatak}

   var jsonData = JSON.stringify(tip+":"+podatak); //

    download(jsonData, 'podatak.json', 'text/json');

} 
