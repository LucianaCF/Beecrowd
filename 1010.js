const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');


 linha1 = lines[0].split(" ")
 linha2 = lines[1].split(" ")   
let peca1 = linha1.shift()
let qtde1 = linha1.shift()
let valor1 = linha1.shift()

let peca2 = linha2.shift()
let qtde2 = linha2.shift()
let valor2 = linha2.shift()

let valorTotal = (qtde1 * valor1) + (qtde2 * valor2)

console.log ("VALOR A PAGAR: R$ " + valorTotal.toFixed(2))

