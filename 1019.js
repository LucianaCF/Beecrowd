const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');


//Conversão de tempo >>> segundos/60=minutos ; minutos/60=horas

let segundos = parseInt(lines.shift());

let min = parseInt(segundos / 60);
segundos = segundos % 60

let horas = parseInt(min /60);
min = min % 60;

console.log(horas + ":" + min + ":" + segundos);


