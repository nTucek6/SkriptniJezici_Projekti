function AddToList()
{
 var list = $("#to_do_list");
 var unos = $("#unos").val();
list.append("<li><input id='check' type='checkbox'><i class='fa fa-trash-o' onclick='Remove(this)' style='margin-right:5px;'></i><span>"+unos+"</span></li>");
}

function Remove(r)
{
    $(r).parent("li").remove()
}


$('body').on('change', 'input[type=checkbox]',function () {
    if($(this).is(":checked")) 
    {
        $(this).parent().children("span").css("text-decoration","line-through");
    }
    else
    {
        $(this).parent().children("span").css("text-decoration","none");
    }
    }); 
