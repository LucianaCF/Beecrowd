const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

let raio = parseFloat(lines.shift());
let volume = (4/3)* 3.14159 * Math.pow(raio, 3);

console.log("VOLUME = " + volume.toFixed(3)); 