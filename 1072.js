const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let valores = parseInt(lines.shift( )); //removendo o elemento do ídice 0 (zero)
let x = []
let counterIn = 0
let counterOut = 0

for (let i = 0; i < valores; i ++) {
    x[i]= parseInt(lines.shift( )); //colocando os valores sem o índice 0 num vetor
    //vetor [i] = x
    console.log (x[i])
}

for ( let i = 0; i < x.length; i ++) { //percorrendo esse vetor
    if (x[i] >= 10 && x[i] <= 20) {
        counterIn ++;  

    } else {counterOut ++}
        
    }


console.log (counterIn +  " in")
console.log (counterOut +  " out")










