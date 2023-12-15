const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let number = parseInt(lines.shift ());
//let valores = -1


for (let i = 0; i < number  ; i ++) {
    valores = parseInt(lines.shift ());
    //console.log (valores)

    if (valores % 2 == 0 && valores > 0) {
        console.log ("EVEN POSITIVE")

    } else if (valores % 2 == 0 && valores < 0) {
        console.log ("EVEN NEGATIVE")

    } else if (valores % 2 != 0 && valores < 0) {
        console.log ("ODD NEGATIVE")
        
    } else if (valores % 2 != 0 && valores > 0) {
        console.log ("ODD POSITIVE")
        
    } else if (valores == 0) {
        console.log ("NULL")

}
}