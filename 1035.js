const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

let a = parseInt(lines.shift());

let b =  parseInt(lines.shift());

let c =  parseInt(lines.shift());

let d =  parseInt(lines.shift());
 
if ((((b > c) && (d > a))    &&    ((c + d) > (a + b) && (c > 0 < d)))   &&   (a % 2 === 0)) {

    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}

