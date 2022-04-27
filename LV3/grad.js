function Grad(_NazivGrada,_BrojStanovnika,_Latituda,_Longituda)
{
    this.Naziv_Grada = _NazivGrada;
    this.Broj_stanovnika = _BrojStanovnika;
    this.Latituda = _Latituda;
    this.Longituda = _Longituda;
}



var g1 = new Grad("Virovitica",21291,45.83194,17.38389);
var g2 = new Grad("Slatina",13686,45.70333,17.70278);
var g3 = new Grad("Bjelovar",40276,45.89861,16.84889);
var g4 = new Grad("Osijek",75916,45.55111,18.69389);
var g5 = new Grad("Zagreb",806341,45.815399,15.966568);


Object.prototype.dajVelicinuGrada = function ()
{
    if(this.Broj_stanovnika < 30000)
    {
        return 1;
    }
    else if(this.Broj_stanovnika > 30000 && this.Broj_stanovnika < 200000)
    {
        return 2;
    }
    else if(this.Broj_stanovnika > 200000)
    {
        return 3;
    }
};

function dajUdaljenost(grad1,grad2)
{
var lat1 = grad1.Latituda;
var lat2 = grad2.Latituda;
var lon1 = grad1.Longituda;
var lon2 = grad2.Longituda;  

const R = 6371; // metres
const φ1 = grad1.Latituda * Math.PI/180; // φ, λ in radians
const φ2 = lat2 * Math.PI/180;
const Δφ = (lat2-lat1) * Math.PI/180;
const Δλ = (lon2-lon1) * Math.PI/180;

const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

const d = R * c; // in metres

return d;
}

console.log(dajUdaljenost(g1,g2) + " km");
