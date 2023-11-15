const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();


let N = [];
N[0] = parseInt(lines.shift ( ));


for (let i = 1; i < 10; i++) {  //como a 1a posição já foi inserida N[0], começamos o índice em 1.
    N[i] = N[i-1]*2     // queremos o dobro da posição anterior, por isso N[i-1], q representa essa posição.
                        //N[i] representa a posição atual                        
   //console.log (N[i])

} for (i = 0; i < 10; i++) {
    console.log ("N[" + i + "] = " + N[i]);

} 


    


