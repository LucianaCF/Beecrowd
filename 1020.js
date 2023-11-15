const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');


let dias = parseInt(lines.shift());

let idadeAnos = parseInt(dias / 365);

dias = (dias % 365); //POR QUE este comando está devolvendo 35 e não o resto em decimal (0,095)???


//console.log(dias)

let idadeMeses = parseInt(dias / 30);


let idadeDias = parseInt(dias % 30);


console.log(idadeAnos + " ano(s)");
console.log(idadeMeses + " mes(es)");
console.log(idadeDias + " dia(s)");
