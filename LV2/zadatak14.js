
var b1 = 245;//parseInt(input);

if(b1 > 99)
{
var temp1 = String(b1).charAt(0);
var temp2 = String(b1).charAt(String(b1).length-1);
console.log(parseInt(temp1)+parseInt(temp2));
}
else
{
    console.log("Uneseni broj nije troznamenkasti!")
}

