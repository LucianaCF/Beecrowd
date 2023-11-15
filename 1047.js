const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//console.clear ();

lines = lines[0].split(" ");
let horaI = parseInt(lines[0]);
let minI = parseInt(lines[1]);
let horaF = parseInt(lines[2]);
let minF = parseInt(lines[3]);
let tempoJogoH
let tempoJogoMin
let resultadoH
let resultadoMin

//console.log (lines)

//qdo  minI > minF, removemos 1h das horas totais e imprimimos o total de min como '60 - tempoJogoMin'
if (horaI > horaF && minI > minF) {
    tempoJogoH = 24 - horaI + horaF
    tempoJogoMin = minI - minF
    resultadoH = tempoJogoH - 1
    resultadoMin = 60 - tempoJogoMin
    console.log ("O JOGO DUROU " + resultadoH + " HORA(S) E " + resultadoMin + " MINUTO(S)")

//qdo  minI < minF, mantemos a horas totais e imprimimos o total de min como 'tempoJogoMin'
} else if (horaI > horaF && minI < minF) {
    tempoJogoH = 24 - horaI + horaF
    tempoJogoMin = minF - minI
    resultadoH = tempoJogoH 
    resultadoMin = tempoJogoMin
    console.log ("O JOGO DUROU " + resultadoH + " HORA(S) E " + resultadoMin + " MINUTO(S)")

} else if (horaI > horaF && minI === minF) {
    tempoJogoH = 24 - horaI + horaF
    tempoJogoMin = minF - minI
    resultadoH = tempoJogoH 
    resultadoMin = tempoJogoMin
    console.log ("O JOGO DUROU " + resultadoH + " HORA(S) E " + resultadoMin + " MINUTO(S)")
    
} else if (horaI < horaF && minI < minF) {
    tempoJogoH = horaF - horaI
    tempoJogoMin = minF - minI
    resultadoH = tempoJogoH 
    resultadoMin = tempoJogoMin
    console.log ("O JOGO DUROU " + resultadoH + " HORA(S) E " + resultadoMin + " MINUTO(S)")
    
} else if (horaI < horaF && minI > minF) {
    tempoJogoH = horaF - horaI
    tempoJogoMin = minI - minF
    resultadoH = tempoJogoH - 1
    resultadoMin = 60 - tempoJogoMin
    console.log ("O JOGO DUROU " + resultadoH + " HORA(S) E " + resultadoMin + " MINUTO(S)")

} else if (horaI < horaF && minI === minF) {
    tempoJogoH = horaF - horaI
    tempoJogoMin = minF - minI
    resultadoH = tempoJogoH 
     resultadoMin = tempoJogoMin
     console.log ("O JOGO DUROU " + resultadoH + " HORA(S) E " + resultadoMin + " MINUTO(S)") 

} else if ( horaI === horaF && minI > minF ) {
    tempoJogoH = 24
    tempoJogoMin = minI - minF
    resultadoH = tempoJogoH - 1
    resultadoMin = 60 - tempoJogoMin
    console.log ("O JOGO DUROU " + resultadoH + " HORA(S) E " + resultadoMin + " MINUTO(S)")


} else if ( horaI === horaF && minI < minF ) {
    tempoJogoH = 0
    tempoJogoMin = minF - minI
    resultadoH = tempoJogoH 
    resultadoMin = tempoJogoMin
    console.log ("O JOGO DUROU " + resultadoH + " HORA(S) E " + resultadoMin + " MINUTO(S)")

} else if ( horaI === horaF && minI === minF ) {
    tempoJogoH = 24
    tempoJogoMin = minF - minI
    resultadoH = tempoJogoH 
    resultadoMin = tempoJogoMin
    console.log ("O JOGO DUROU " + resultadoH + " HORA(S) E " + resultadoMin + " MINUTO(S)")

}