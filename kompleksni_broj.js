function KompleksniBroj(_realni,_imaginarni)
{
    this.realni = _realni;
    this.imaginarni = _imaginarni;
}


var  kb1 = new KompleksniBroj(1,3);
var  kb2 = new KompleksniBroj(4,-5);
var  kb3 = new KompleksniBroj(2,1);
var  kb4 = new KompleksniBroj(5,5);
var  kb5 = new KompleksniBroj(3,2);


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
        return "z= "+r+" + "+i+"i"
    },
    pomnozi : function(num1,num2)
    {
 var num1, num2;
   var real = (num1.realni * num2.realni)-(num1.imaginarni * num2.imaginarni);
  var imaginary = (num1.realni * num2.imaginarni)+(num1.imaginarni * num2.realni); 
  var o = new KompleksniBroj(real,imaginary)
   return this.ispisiKompleksniBroj(o); 
    }
}

_kb.ispisiKompleksniBroj(kb1);
_kb.ispisiKompleksniBroj(kb2);
_kb.ispisiKompleksniBroj(kb3);
_kb.ispisiKompleksniBroj(kb4);
_kb.ispisiKompleksniBroj(kb5);
console.log("Rezultat zbrajanja kompleksnih brojeva"+_kb.zbroji(kb1,kb2));
_kb.pomnozi(kb1,kb2);
