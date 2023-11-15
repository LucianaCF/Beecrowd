const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());

maiorAB = (a+b+Math.abs(a-b))/2;

maiorABC = (maiorAB + c + Math.abs(maiorAB - c))/2;

console.log(maiorABC + " eh o maior");