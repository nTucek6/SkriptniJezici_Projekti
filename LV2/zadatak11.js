//const fs = require('fs');
import * as fs from 'fs';

let rawdata = fs.readFileSync('osobe.json');
//let student = JSON.parse(rawdata);

/*
var value = "";
student.forEach(element => {
    value += element.age+" "+element.name+" "+element.company+"\n";
}); */


import * as http from 'http';
var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(rawdata);
response.end();
}).listen(nPort);