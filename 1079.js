const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

//let notas1 = lines[1].split (" ");
//let notas2 = lines[2].split (" ");
//let notas3 = lines[3].split (" ");

let notas =  Number(lines.shift ())

//console.log (lines)

for (let i = 0; i < notas; i ++) {
    let [a,b,c] = lines[i].split(" ");
    //let notas1 = lines[0].split (" ");
    //let notas2 = lines[1].split (" ");
    //let notas3 = lines[2].split (" ");
    //let notas =  lines.shift ()
    media = ((a*2 + b*3 + c*5)/(10));
 console.log (media.toFixed(1));
 }