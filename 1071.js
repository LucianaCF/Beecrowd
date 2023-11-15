const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear()

let valor1 = parseInt(lines.shift());
let valor2 = parseInt(lines.shift());
//console.log(valor1);
//console.log(valor2);


let soma = 0

for (let i = valor2+1; i < valor1; i++) {  
    //console.log(i)
   
    if (i%2 != 0) {
            soma = soma + i
   }
} 

console.log(soma)