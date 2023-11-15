const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear()

let x = parseInt(lines[0]);

//console.log (x);
//usamos x+12 pois queremos uma sequencia de 6 ímpares (6*2=12).
for ( let i = x; i < x+12; i++) { 
    //console.log(i)
    
   if(i % 2 != 0  ) {
    
   
   console.log(i)

   }
}