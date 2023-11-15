const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ()

//só os pares e a entrada não é sequência.
// par = parseInt (x%2 = 0) >>> para pegar apenas a parte inteira do resto zero

counter = 0

for (let i = 0; i < 5 ; i++ ) {
    let numeros = lines.shift()
    
    
    if (numeros%2 == 0) {
        counter ++
       
    }
}

console.log (counter, "valores pares")