const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let ddd = lines[0];

if (ddd == 61) {
    console.log ("Brasilia");

} else if (ddd == 71) {
    console.log ("Salvador");


} else if (ddd == 11) {
    console.log ("Sao Paulo");

} else if (ddd == 21) {
    console.log ("Rio de Janeiro");

} else if (ddd == 32) {
    console.log ("Juiz de Fora");

} else if (ddd == 19) {
    console.log ("Campinas");

} else if (ddd == 27) {
    console.log ("Vitoria");
 
} else if (ddd == 31) {
    console.log ("Belo Horizonte");

} else { console.log ("DDD nao cadastrado") }
