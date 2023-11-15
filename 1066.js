const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//console.clear ()

let par = 0
let impar = 0
let positivo = 0
let negativo = 0 

for (let i = 0; i < 5; i++ ) {
    let numeros = lines.shift();

    if (numeros % 2 == 0 ) {
        par ++
    }

    if (numeros % 2 != 0 ) {
       impar ++
    }

    if (numeros > 0) {
        positivo ++
    }
    if (numeros < 0) {
        negativo ++
    }
    
}
//console.log deu trabalho no beecrowd, funcionou como realizado abaixo:
console.log (`${par} valor(es) par(es)
${impar} valor(es) impar(es)
${positivo} valor(es) positivo(s)
${negativo} valor(es) negativo(s)`)
//console.log ("")



// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)