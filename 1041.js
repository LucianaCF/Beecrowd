const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

let x = lines.shift();
let y = lines.shift();

//console.log(x + " " + y)

if (x==0 && y==0){
    console.log ("Origem");

} else if (x>0 && y>0){
    console.log ("Q1");

} else if (x>0 && y<0){
    console.log ("Q4");

} else if (x>0 && y==0){
    console.log ("Eixo X");

} else if (x<0 && y>0){
    console.log ("Q2");

} else if (x<0 && y<0){
    console.log ("Q3");

} else if (x<0 && y==0){
    console.log ("Eixo X");

}else if (x==0 && y>0){
    console.log ("Eixo Y");

}else if (x==0 && y<0){
    console.log ("Eixo Y");

}