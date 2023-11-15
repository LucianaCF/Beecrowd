const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

// Báskara >>> x = (-b +- raiz quad (b2 - 4 * a * c)) / 2 * a



lines = lines[0].split(" ");

let a = parseFloat(lines.shift());

let b = parseFloat(lines.shift());

let c = parseFloat(lines.shift());

let delta = Math.pow(b , 2) - (4 * a * c);

let x1 = ( ((( (b * (-1)) + (Math.sqrt(delta))) / (2 * a))).toFixed(5)); //AQUI EU ESTAVA ERRANDO: pq na divisão, o programa primeiro divide por 2 e então multiplica pelo"a". 
                                                                         //Tem q colocar entre parênteses pra isso não acontecer.
let x2 = (((( (b *(-1)) - (Math.sqrt(delta))) / (2 * a))).toFixed(5));

/*console.log(delta)
console.log(x1)
console.log(x2)*/


if (delta > 0 && a !== 0) {

console.log("R1 = " + x1);
console.log("R2 = " + x2);

} else {

console.log("Impossivel calcular");

}