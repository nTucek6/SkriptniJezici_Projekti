import dajSlucajanBroj from "./slucajanbroj.js";

var aBrojevi = [];

while(aBrojevi.length<50)
{
    aBrojevi.push(dajSlucajanBroj(1,20));
}


var broj;
aBrojevi.forEach(element => {
   console.log(element);
    

});

/*
for(var i = 0; i<aBrojevi.length;i++)
{
    for(var j = 1; j<aBrojevi.length;j++)
    {
        if(indexOf(aBrojevi[i]) == indexOf(aBrojevi[j]))
        {
            aBrojevi.splice(indexOf(aBrojevi[j]));
        }
    }
}*/



/*
function uniqueArray2(arr) {
    var a = [];
    for (var i=0, l=arr.length; i<l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    return a;
}
*/

//var unique = uniqueArray2(aBrojevi)

var Unique = [];
aBrojevi.forEach(function(item)
{
    if(Unique.indexOf(item)==-1)
    {
        Unique.push(item);
    }
    else
    {
        var index = Unique.indexOf(item);
        Unique.splice(index,1)
    }

});




console.log("");
console.log(Unique);


