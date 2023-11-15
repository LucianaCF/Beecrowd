const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');


let valor = lines.shift();

console.log(valor)

let notas100 = parseInt(valor/100)
valor = valor % 100

let notas50 = parseInt(valor/50)
valor = valor % 50

let notas20 = parseInt(valor/20)
valor = valor % 20

let notas10 = parseInt(valor/10)
valor = valor % 10

let notas5 = parseInt(valor/5)
valor = valor % 5

let notas2 = parseInt(valor/2)
valor = valor % 2

let notas1 = parseInt(valor/1)
valor = valor % 1


console.log (notas100 + " nota(s) de R$ 100,00");
console.log (notas50 + " nota(s) de R$ 50,00");
console.log (notas20 + " nota(s) de R$ 20,00");
console.log (notas10 + " nota(s) de R$ 10,00");
console.log (notas5 + " nota(s) de R$ 5,00");
console.log (notas2 + " nota(s) de R$ 2,00");
console.log (notas1 + " nota(s) de R$ 1,00");