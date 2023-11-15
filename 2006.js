const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');


let linha1 = lines[0]    //chá oferecido para identificação
let [A,B,C,D,E] = lines[1].split(" ")       //respostas competidores serão separadas
let T = linha1
let qtdeRespCerta = 0     //contador de respostas certas
//console.log ([A,B,C,D,E])


    
if (A == T) {
    qtdeRespCerta++
}
if (B == T) {
    qtdeRespCerta++
}
if (C == T) {
    qtdeRespCerta++
}
if (D == T) {
    qtdeRespCerta++
}
if (E == T) {
    qtdeRespCerta++
}

console.log (qtdeRespCerta)





// for (let i = 0; i < 5; i++){ 
//     let cadaResp = linha2.shift()
//      //console.log (cadaResp)

//         if (cadaResp == linha1) {
//             qtdeRespCerta++
//            console.log (qtdeRespCerta)
   
//         }
            
// }

// if (qtdeRespCerta == 0) {
//     console.log (qtdeRespCerta = 0)
// }