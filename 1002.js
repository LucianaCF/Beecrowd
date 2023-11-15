const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//Área do círculo

let raio = lines.shift();

area = parseFloat(3.14159 * Math.pow(raio , 2));

console.log ("A=" + area.toFixed(4));

