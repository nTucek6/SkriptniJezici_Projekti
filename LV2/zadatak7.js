import dajSlucajanBroj from "./slucajanbroj.js";

var aBrojevi = [];

while(aBrojevi.length < 200)
{
    aBrojevi.push(dajSlucajanBroj(150,1500));
}

var min = 2000;
var max = 0;

aBrojevi.forEach(function(broj)
{
  if(max < broj)
  {
      max = broj;
  }
  if(min > broj)
  {
      min = broj;
  }

});

console.log(min);
console.log(max);



