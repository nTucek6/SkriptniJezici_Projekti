
var element = new _lib(".page-list");

element.el[0].style.color = "red";


var navigacija = new _lib(".page-list");
console.log(navigacija.el);
//navigacija.el[0].ubaciElement("li","","","Hello");
//console.log(navigacija)

navigacija.ubaciElement("p","","","Hello");

/*
navigacija.el.forEach(element => function()
{
element.ubaciElement("p","","","Hello")

}); 
*/
//navigacija.sakrij();

navigacija.dodajKlasu("test");
navigacija.dodajAtribut("test","hello");


localStorage.setItem("racunarstvo","http://racunarstvo.vuv.hr/");
localStorage.setItem("loomen","http://loomen.vsmti.hr/");
localStorage.setItem("imagine","http://e5.onthehub.com/d.ashx?s=ui4qkso06k");
localStorage.setItem("studentski_dom","http://studom.vsmti.hr/");
localStorage.setItem("office365","https://outlook.office365.com/owa/?realm=vsmti.hr%23path=/mail");

var footer = new _lib(".footer-navigation");


for(var i = 0;i<5;i++)
{
    footer.ubaciElement("li","item","","");
}

/*
querySelector('.item:nth-child(0)').ubaciElement("a","","",localStorage.getItem("http://racunarstvo.vuv.hr/"));
querySelector('.item:nth-child(1)').ubaciElement("a","","",localStorage.getItem("http://loomen.vsmti.hr/"));
querySelector('.item:nth-child(2)').ubaciElement("a","","",localStorage.getItem("http://e5.onthehub.com/d.ashx?s=ui4qkso06k"));
querySelector('.item:nth-child(3)').ubaciElement("a","","",localStorage.getItem("http://studom.vsmti.hr/"));
querySelector('.item:nth-child(4)').ubaciElement("a","","",localStorage.getItem("https://outlook.office365.com/owa/?realm=vsmti.hr%23path=/mail")); */


var link1 = new _lib('.item:nth-child(0)');
var link2 = new _lib('.item:nth-child(1)');
var link3 = new _lib('.item:nth-child(2)');
var link4 = new _lib('.item:nth-child(3)');
var link5 = new _lib('.item:nth-child(4)');

link1.ubaciElement("a","","",localStorage.getItem("racunarstvo"));
var link1 = new _lib('.item:nth-child(0) a');
link1.dodajAtribut("href",localStorage.getItem("racunarstvo"))
link2.ubaciElement("a","","",localStorage.getItem("loomen"));
var link2 = new _lib('.item:nth-child(1) a');
link2.dodajAtribut("href",localStorage.getItem("loomen"))
link3.ubaciElement("a","","",localStorage.getItem("imagine"));
var link3 = new _lib('.item:nth-child(2) a');
link3.dodajAtribut("href",localStorage.getItem("imagine"))
link4.ubaciElement("a","","",localStorage.getItem("studentski_dom"));
var link4 = new _lib('.item:nth-child(3) a');
link4.dodajAtribut("href",localStorage.getItem("studentski_dom"))
link5.ubaciElement("a","","",localStorage.getItem("office365"));
var link5 = new _lib('.item:nth-child(4) a');
link5.dodajAtribut("href",localStorage.getItem("office365"))


//document.querySelector(footer.selektor+':nth-child(1)');

/*footer.ubaciElement("li","item","",localStorage.getItem("racunarstvo"));
footer.ubaciElement("li","","",localStorage.getItem("loomen"));
footer.ubaciElement("li","","",localStorage.getItem("imagine"));
footer.ubaciElement("li","","",localStorage.getItem("studentski_dom"));
footer.ubaciElement("li","","",localStorage.getItem("office365")); */