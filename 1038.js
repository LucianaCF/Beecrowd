const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

lines = lines[0].split(" ");

let codigo = parseInt(lines.shift());

let qtde = parseInt(lines.shift());


if (codigo==1){
    console.log ("Total: R$ " +  parseFloat(4 * qtde).toFixed(2));

} else if (codigo==2){
    console.log ("Total: R$ " +  parseFloat(4.5 * qtde).toFixed(2));

}else if (codigo==3){
    console.log ("Total: R$ " +  parseFloat(5 * qtde).toFixed(2));

}else if (codigo==4){
    console.log ("Total: R$ " +  parseFloat(2 * qtde).toFixed(2));

}else if (codigo==5){
    console.log ("Total: R$ " +  parseFloat(1.5 * qtde).toFixed(2));
}
