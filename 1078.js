const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let valor = parseInt(lines.shift ());

let mult = 0 

for (let i = 1; i <= 10; i ++) {
    mult = i * valor
   console.log (i + " x " + valor + " = " + mult)

}