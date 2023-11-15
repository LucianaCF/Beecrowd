const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

var n = parseInt(lines.shift());
var x = [];
var contadorDentro = 0;
var contadorFora = 0;
for(let i = 0; i<n; i++){
    x[i] = parseInt(lines.shift());
    console.log (x[i])
}

for ( let i = 0; i<x.length; i++){
    if(x[i] >= 10 && x[i] <= 20){
        contadorDentro++;
    }
    else{
        contadorFora++
    }
}

console.log(contadorDentro + " in");
console.log(contadorFora + " out");
