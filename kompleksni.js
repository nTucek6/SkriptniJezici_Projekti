
function Button()
{
    var r1 = document.getElementById("realni1").value;
    var r2 = document.getElementById("realni2").value;
    var i1 = document.getElementById("imaginarni1").value;
    var i2 = document.getElementById("imaginarni2").value;
    var Kbroj1 = new KompleksniBroj(parseInt(r1),parseInt(i1));
    var Kbroj2 = new KompleksniBroj(parseInt(r2),parseInt(i2));
    var operacija = document.getElementById("operacija").value;
    console.log(operacija);
    var rezultat = document.getElementById("rezultat");
    
    if(operacija == "Zbrajanje")
    {
        rezultat.innerHTML =  _kb.zbroji(Kbroj1,Kbroj2);
    }
    else if(operacija == "Mnozenje")
    {
        rezultat.innerHTML =_kb.pomnozi(Kbroj1,Kbroj2);
    }

}




function KompleksniBroj(_realni,_imaginarni)
{
    this.realni = _realni;
    this.imaginarni = _imaginarni;
}


var _kb = 
{
    ispisiKompleksniBroj: function(Kbroj)
    {
        console.log("z= "+Kbroj.realni+" + "+Kbroj.imaginarni+"i");
    },

    zbroji : function(k1,k2)
    {
        var r = k1.realni + k2.realni;
        var i = k1.imaginarni + k2.imaginarni;
        return "Z3 = "+r+" + "+i+"i";
    },
    pomnozi : function(num1,num2)
    {
 var num1, num2;
   var real = (num1.realni * num2.realni)-(num1.imaginarni * num2.imaginarni);
  var imaginary = (num1.realni * num2.imaginarni)+(num1.imaginarni * num2.realni); 
  //var o = new KompleksniBroj(real,imaginary);
   return "Z3 = "+real+" + "+imaginary+"i";
    }
}