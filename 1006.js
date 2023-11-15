const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

let a = lines[0];
let b = lines[1];
let c = lines[2];

let media = parseFloat(((a * 2) + (b * 3) + (c * 5))/10);

console.log("MEDIA = " + media.toFixed(1));