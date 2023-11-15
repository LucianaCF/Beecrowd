const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let vertebra = lines[0];
let grupo = lines[1];
let alimentacao = lines[2];
//console.log (vertebra)

if (vertebra == "vertebrado" && grupo == "ave" && alimentacao == "carnivoro") {
    console.log ("aguia")

} else if (vertebra == "vertebrado" && grupo == "ave" && alimentacao == "onivoro") {
    console.log ("pomba")

} else if (vertebra == "vertebrado" && grupo == "mamifero" && alimentacao == "onivoro") {
    console.log ("homem")

} else if (vertebra == "vertebrado" && grupo == "mamifero" && alimentacao == "herbivoro") {
        console.log ("vaca")

} else if (vertebra == "invertebrado" && grupo == "inseto" && alimentacao == "hematofago") {
    console.log ("pulga")

} else if (vertebra == "invertebrado" && grupo == "inseto" && alimentacao == "herbivoro") {
    console.log ("lagarta")

} else if (vertebra == "invertebrado" && grupo == "anelideo" && alimentacao == "hematofago") {
    console.log ("sanguessuga")

} else if (vertebra == "invertebrado" && grupo == "anelideo" && alimentacao == "onivoro") {
    console.log ("minhoca")

}
