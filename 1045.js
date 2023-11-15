const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

let a = parseFloat(lines.shift( ));
let b = parseFloat(lines.shift( ));
let c = parseFloat(lines.shift( ));
let lados = [a, b, c]

lados.sort ((a, b) => b - a); //sort() é um método para ordenar em crescente => a-b ou decrescente => b-a.
//console.log (lados);

const A = parseFloat(lados.shift());
const B = parseFloat(lados.shift());
const C = parseFloat(lados.shift());
//console.log (A);

if (A >= (B + C)) {
    console.log ("NAO FORMA TRIANGULO");

} else if (A*A === (B*B + C*C)) {
    console.log ("TRIANGULO RETANGULO");
       
} else if (A*A > (B*B + C*C)) {
    console.log ("TRIANGULO OBTUSANGULO");
        
} else if (A*A < (B*B + C*C)) {
    console.log ("TRIANGULO ACUTANGULO");

}
if (A == B  && A == C) {
    console.log ("TRIANGULO EQUILATERO");
        
} else if ((A == B ) ||  (B == C)) {
    console.log ("TRIANGULO ISOSCELES");
        
}

