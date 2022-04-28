function _lib(_selektor)
{
     this.selektor = _selektor;
     this.el = document.querySelectorAll(this.selektor);
}

_lib.prototype.ubaciElement = function(naziv,klasa,indentifikator,tekst)
{
    for(var i = 0;i<this.el.length;i++)
{
    var newElement = document.createElement(naziv);
     
if(klasa.length > 0)
{
    newElement.setAttribute("class",klasa);
}
if(indentifikator.length > 0)
{
    newElement.setAttribute("id",indentifikator);
}
if(tekst.length > 0)
{
    newElement.innerHTML = tekst;
}
this.el[i].appendChild(newElement);
}

//this.el.appendChild(newElement);


/*
this.el.forEach(element=>
    {
        element.appendChild(newElement);
    }) */

//this.el[0].appendChild(newElement);
}

_lib.prototype.dodajKlasu = function(naziv)
{
    this.el.forEach(element=>
        {
            element.setAttribute("class",naziv);
        }) 
 
}

_lib.prototype.dodajAtribut = function(atribut,vrijednost)
{
    this.el.forEach(element=>
        {
            element.setAttribute(atribut,vrijednost);
        }) 
}
_lib.prototype.prikazi = function()
{
  this.el.forEach(element =>
    {
        element.style.visibility  = "vissible";
        //element.style.display = "block";
    });
}

_lib.prototype.sakrij = function()
{
    this.el.forEach(element =>
        {
            element.style.visibility  = "hidden";
                //element.style.display = "none";
        });
}




