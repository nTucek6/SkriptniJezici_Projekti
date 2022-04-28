var aPolje = [];
for(var i = 1; i<=50;i++)
{
    if(i%7==0)
    {
        aPolje.push(i);
    }
}
var aParniBrojevi = [];
aPolje.forEach(function(broj)
{
if(broj % 2 == 0)
{
    aParniBrojevi.push(broj);
}
});
aParniBrojevi.forEach(function(broj)
{
    console.log(broj)
});




