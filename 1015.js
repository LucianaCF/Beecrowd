const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

lines1 = lines[0].split(" ");
lines2 = lines[1].split(" ");

let x1 = parseFloat(lines1.shift());
let y1 = parseFloat(lines1.shift());
let x2 = parseFloat(lines2.shift());
let y2 = parseFloat(lines2.shift());

let distancia = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));

console.log(distancia.toFixed(4));