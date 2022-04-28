import dajSlucajanBroj from "./slucajanbroj.js";

function Brojevi()
{
    //var brojevi = [];
    var counter = 0;
    var result = "";
    while(counter < 10)
    {
        result += dajSlucajanBroj(10,100)+" ";
        counter++;
    }
    return result;
}


//var http = require('http');
import * as http from 'http';
var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(Brojevi());
response.end();
}).listen(nPort);