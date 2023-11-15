const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let x = [];
let contadora = 0

for (let i = 0; i< 10; i++ ) {
    x[i] = parseInt(lines.shift ( ));
    //console.log (x[i]);

    if (x[i] <= 0) {
        contadora ++
        x[i] = 1
        
        console.log ("X[" + i + "] = " + x[i]);

    } else { console.log ("X[" + i + "] = " + x[i])}

}
