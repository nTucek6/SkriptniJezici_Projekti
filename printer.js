function Printer(_nivo_tonera,_dvostranoIspisivanje)
{
    if(_nivo_tonera<0)
    {
        _nivo_tonera = 0;
    }
    else if(_nivo_tonera > 100)
    {
        _nivo_tonera = 100;
    }

 this.nivo_tonera = _nivo_tonera;
 this.dvostranoIspisivanje = _dvostranoIspisivanje;

}


var nivoTonera;
var dvostranoIspisivanje;
var ukupanBrojStranica = 0;
var ukupanBrojListova = 0;
//var ukupanBrojStranica = Math.min(Math.max(parseInt(ukupanBrojStranica), 0), 100);
//console.log(ukupanBrojStranica);

var Samsung_M283x = new Printer(100,true);
var Epson_Sx105 = new Printer(20,false);
var Cannon_Pixma = new Printer(40,false);
var HP_Smart_tank_500 = new Printer(69,true);

//console.log(Samsung_M283x);

Printer.prototype.dodajBoju = function()
{
    if(this.nivo_tonera ==0)
    {
        this.nivo_tonera = 100
    }
    else
    {
        var fali = 100-this.nivo_tonera;
        this.nivo_tonera += fali;
    }
}

Printer.prototype.printaj = function(stranice)
{
    if(this.dvostranoIspisivanje == false)
    {
     this.nivo_tonera -= stranice*0.1;
     ukupanBrojStranica += stranice;
     ukupanBrojListova += stranice;
    }
    else
    {
        this.nivo_tonera -= stranice*0.2;
        ukupanBrojStranica += stranice;
        if(stranice%2 == 0)
        {
            ukupanBrojListova += parseInt(stranice*0.5);
        }
        else
        {
            ukupanBrojListova += (parseInt(stranice*0.5)+1);
        }

        
    }
}

/*
Samsung_M283x.printaj(11);
console.log(ukupanBrojStranica);
console.log(ukupanBrojListova);
console.log(Samsung_M283x.nivo_tonera);
*/

Epson_Sx105.printaj(10);
console.log(ukupanBrojStranica);
console.log(ukupanBrojListova);
console.log(Epson_Sx105.nivo_tonera);
