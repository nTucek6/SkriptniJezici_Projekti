import dajSlucajanBroj from "./slucajanbroj.js";
var aBrojevi = [];
for(var i = 0;i<100;i++)
{
aBrojevi.push(dajSlucajanBroj(50,5000));
}
var pCount = 0;
var nCount = 0;
aBrojevi.forEach(function(broj)
{
    if(broj%2==0)
    {
        pCount++;
    }
    else
    {
        nCount++;
    }
});
console.log(pCount); //Ispis count parnih brojeva
console.log(nCount); //Ispis count neparnih brojeva