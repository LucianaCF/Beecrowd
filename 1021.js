const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

let valor = parseFloat(lines.shift());

console.log ('NOTAS:');

let notas100 = parseInt(valor/100);
valor = valor%100;
console.log (notas100 + " nota(s) de R$ 100.00")

let notas50 = parseInt(valor/50);
valor = valor%50;
console.log (notas50 + " nota(s) de R$ 50.00")

let notas20 = parseInt(valor/20);
valor = valor%20;
console.log (notas20 + " nota(s) de R$ 20.00")

let notas10 = parseInt(valor/10);
valor = valor%10;
console.log (notas10 + " nota(s) de R$ 10.00")

let notas5 = parseInt(valor/5);
valor = valor%5;
console.log (notas5 + " nota(s) de R$ 5.00")

let notas2 = parseInt(valor/2);
valor = valor%2;
console.log (notas2 + " nota(s) de R$ 2.00")

console.log ('MOEDAS:');

let moedas1 = parseInt(valor/1);
valor = valor%1;

console.log (moedas1 + " moeda(s) de R$ 1.00")

valor = parseInt(valor * 100)

let moedas05 = parseInt(valor/50);
valor = valor%50;
console.log (moedas05 + " moeda(s) de R$ 0.50")

let moedas025 = parseInt(valor/25);
valor = valor%25;
console.log (moedas025 + " moeda(s) de R$ 0.25")

let moedas01 = parseInt(valor/10);
valor = valor%10;
console.log (moedas01 + " moeda(s) de R$ 0.10")

let moedas005 = parseInt(valor/5);
valor = valor%5;
console.log (moedas005 + " moeda(s) de R$ 0.05")

let moedas001 = parseInt(valor/1);
valor = valor%1;
console.log (moedas001 + " moeda(s) de R$ 0.01")
