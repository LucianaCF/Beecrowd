const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//****ESTE FOI SIMPLES E MUITO DIFÍCIL AO MESMO TEMPO, TUDO POR FALTA DE ATENÇÃO AOS DETALHES: 
//ESTAVA COLOCANDO NO CONSOLE.LOG PARA LER O COUNTER, MAS ERA PARA COLOCAR OS VALORES DE i 

console.clear ()

let x = parseInt(lines[0])
let counter = 0
//console.log (x)

for (let i = 1; i <= x; i++) {
    //console.log (i)

    if (i % 2 != 0) {
        
        counter++
        console.log (i)
       
    } 
} 

