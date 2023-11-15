const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

let nota1 = (lines[0]);
let nota2 = (lines[1]);

let media = parseFloat(((nota1 * 3.5)+ (nota2 * 7.5))/11);

console.log("MEDIA = " + media.toFixed(5));


