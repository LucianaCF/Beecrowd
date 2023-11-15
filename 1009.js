const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

let nome = lines[0];
let salarioFixo = parseFloat(lines[1]);
let totalVendas = parseFloat(lines[2]);

let salarioTotal = salarioFixo + totalVendas * 0.15

console.log ("TOTAL = R$ " + salarioTotal.toFixed(2));