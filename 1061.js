const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

//*********NÃO TERMINEI, MUITO LOOOOONGOOOOO**********// *esboço no caderno (milhares de condições)

let inicio = lines[0].split(" ");    //separando os valores da linha 0
let dia1 = inicio[1];               //pegando o valor na posição 1 da linha 0
let fim = lines[2].split(" ");      //separando os valores da linha 2
let ultimoDia = fim[1];             //pegando o valor na posição 1 da linha 0

//let dias = ultimoDia - dia1     //calcula o total de dias sem considerar diferença de minutos pra menos.

let horaI = lines[1].split(" ");
let hora1 = horaI[0];
let horaF = lines[3].split(" ");
let hora2 = horaF[0];

let minI = lines[1].split(" ");
let min1 = minI[2];
let minF = lines[3].split(" ");
let min2 = minF[2];

let segundosI = lines[1].split(" ");
let seg1 = segundosI[4];
let segundosF = lines[3].split(" ");
let seg2 = segundosF[4];

if (ultimoDia > dia1 && hora2 < hora1 && min2 > min1 && seg2 === seg1) {
    let dias = (ultimoDia - dia1) - 1
    let horasT = (24 - hora1) + Number(hora2);
    let minT = Math.abs(min2 - min1);
    let segT = Math.abs(seg2 - seg1);
   

    console.log (dias + " dia(s)");
    console.log (horasT + " hora(s)");
    console.log (minT + " minuto(s)");
    console.log (segT + " segundo(s)");

} else if (ultimoDia === dia1 && hora2 === hora1 && min2 > min1 && seg2 === seg1) {
    let dias = (ultimoDia - dia1);
    let horasT = (hora2 - hora1);
    let minT = Math.abs(min2 - min1);
    let segT = Math.abs(seg2 - seg1);

    console.log (dias + " dia(s)");
    console.log (horasT + " hora(s)");
    console.log (minT + " minuto(s)");
    console.log (segT + " segundo(s)");

}




    //let horasT = hora2 - hora1









//console.log (seg2);
