import dajSlucajanBroj from "./slucajanbroj.js";
var aBrojevi = [];

while(aBrojevi.length < 30)
{
    aBrojevi.push(dajSlucajanBroj(10,200));
}

function Sortiraj(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }

  var aBrojevi = Sortiraj(aBrojevi);

  aBrojevi.forEach(element => {
      console.log(element);
  });


  
