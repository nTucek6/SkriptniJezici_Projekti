$(".icon").html('<i class="fa fa-plus" aria-hidden="true"></i>');
var plus = '<i class="fa fa-plus" aria-hidden="true"></i>';
var minus ='<i class="fa fa-minus" aria-hidden="true"></i>';
$(".icon").css("cursor", "pointer")

$(".hide").hide();

$(".icon").click(function()
{
    var ikona =$(this);
    var roditelj =$(this).parent();
    var djeca = roditelj.children("ul");
    djeca.fadeToggle();
    if(ikona.html() == plus)
    {
        ikona.hide();
        ikona.html(minus);
        ikona.show();
    }
    else
    {
        ikona.hide();
        ikona.html(plus);
        ikona.show();
    }
});


$("a").click(function()
{
    var broj = $(this).attr("value");
    console.log(broj);
    $("#slika").html("<img src ='img/slider_"+broj+".jpg'>");
})