const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//Faça um programa que mostre os números pares entre 1 e 100, inclusive.

for (let i = 2; i <= 100; i +=2) {
    console.log (i)
}