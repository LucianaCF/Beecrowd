const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

lines = lines[0].split(" ");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

if (a >= b && a % b == 0) {
    console.log ("Sao Multiplos");

} else if (b >= a && b % a == 0 ) {
    console.log ("Sao Multiplos");

} else { console.log ("Nao sao Multiplos");

} 