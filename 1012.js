const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let areaTri = (a * c)/2

let areaCir = 3.14159 * Math.pow(c, 2);

let areaTrap = ((a + b) * c)/2;

let areaQuad = b * b;

let areaRet = a * b;

console.log("TRIANGULO: " + areaTri.toFixed(3));
console.log("CIRCULO: " + areaCir.toFixed(3));
console.log("TRAPEZIO: " + areaTrap.toFixed(3));
console.log("QUADRADO: " + areaQuad.toFixed(3));
console.log("RETANGULO: " + areaRet.toFixed(3));