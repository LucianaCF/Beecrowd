const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let number = lines.shift ();
let quad = 0
//console.log (number);

for (let i = 1; i <= number; i ++) {
    if (i % 2 == 0) {
        quad =  Math.pow (i, 2)
        console.log (i + "^2 = " + quad);

    }
}