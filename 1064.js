const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ()

let counter = 0
let soma = 0

for (let i = 0; i < 6; i++ ) {
    let numeros = parseFloat (lines.shift ());

    if (numeros > 0) {
        counter ++
        soma += numeros
       
    }
}

console.log (counter, "valores positivos")
console.log ((soma/counter).toFixed(1))