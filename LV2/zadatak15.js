import dajSlucajanBroj from "./slucajanbroj.js";

var aBrojevi = [];

while(aBrojevi.length<3)
{
    aBrojevi.push(dajSlucajanBroj(10,100));
}

var check = [];
aBrojevi.forEach(function(b)
{
check.push(String(b).charAt(String(b).length-1))
});

function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}
 
if(hasDuplicates(check))
{
    console.log("True");
}
else
{
    console.log("False");
}