const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

let km = parseInt(lines[0]);
let litros = parseFloat(lines[1]);
let kmPorLitro = km / litros;

console.log(kmPorLitro.toFixed(3) + " km/l");