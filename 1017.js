const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//Vm=dist/tempo >>> dist = Vm * tempo

let tempo = parseInt(lines[0]);
let vMedia = parseInt(lines[1]);
let dist = vMedia * tempo;
let qtdeL = dist / 12;

console.log (qtdeL.toFixed(3));

        