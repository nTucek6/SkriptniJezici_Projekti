import dajSlucajanBroj from "./slucajanbroj.js";
import * as mqtt from 'mqtt';
var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
console.log('Publisher is online!');
setInterval(function() {
//var temp = 23;
client.publish('temp', 'Random broj: ' + dajSlucajanBroj(10,1000));
console.log('Message sent!');
}, 5000);
});