const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

let numFuncionario = parseInt(lines[0]);
let horasTrab = parseInt(lines[1]);
let valorHora = parseFloat(lines[2]);

let salarioFuncionario = horasTrab * valorHora;

console.log ("NUMBER = " + numFuncionario);

console.log ("SALARY = U$ " + salarioFuncionario.toFixed(2));