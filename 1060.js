const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let counter = 0

for (let i = 0; i < 6; i ++) {
    let numero  = lines.shift(); //obtive todos os valores da matriz
        if (numero > 0) {
        ++counter   //contador de todos os numeros > 0.
            
        }     
}
console.log (counter + " valores positivos" );