const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//Produto simples

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let produto = a * b;

console.log("PROD = " + produto);