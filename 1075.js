const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let valor = parseInt(lines.shift ());
let index = 1

do {index++
    if (index % valor ==2) {
         console.log (index)
} 
} while (index <= 10000);

// let valor = parseInt(lines.shift ());


// for (let index = 1; index <= 10000; index++) {
//     //console.log (index)
//     if (index % valor ==2) {
//         console.log (index)
//     }
    
// }

while (condition) {
    
}
