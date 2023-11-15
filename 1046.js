const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//console.clear ()

//let tempo = "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23"
//let horasDia = tempo.split(" ");
lines = lines[0].split(" ");
let horaI = Number(lines[0]);
let horaF = Number(lines[1]);
let duracaoJogo

//console.log (lines);

if (horaI > horaF) {
    duracaoJogo = 24 - horaI + horaF
    console.log ("O JOGO DUROU " + duracaoJogo + " HORA(S)")
}else if (horaI === horaF) {
    duracaoJogo = 24
    console.log ("O JOGO DUROU " + duracaoJogo + " HORA(S)")
} else if (horaI < horaF) {
    duracaoJogo = horaF - horaI
    console.log ("O JOGO DUROU " + duracaoJogo + " HORA(S)")
}

