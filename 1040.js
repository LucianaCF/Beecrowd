const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

linha1 = lines[0].split(" ")


let n1 = parseFloat(linha1[0])
let n2 = parseFloat(linha1[1])
let n3 = parseFloat(linha1[2])
let n4 = parseFloat(linha1[3])

//console.log (n2);

let media = parseFloat((n1*2 + n2*3 + n3*4 + n4*1)/10).toFixed(1);
media = parseFloat(media);

console.log ("Media: " + parseFloat(media).toFixed(1));

linha2 = lines[1].split(" ")
    let n5 = parseFloat(linha2.shift());

    let mediaFinal = ((n5 + media)/2).toFixed(1);
    mediaFinal = parseFloat(mediaFinal);

if(media>=7.0){
    console.log ("Aluno aprovado.");

} else if (media<5){
    console.log ("Aluno reprovado.");

} else if (media>=5 && media <= 6.9){
    
    console.log ("Aluno em exame.");
    console.log ("Nota do exame: " + (n5).toFixed(1));
}

if(mediaFinal >= 5.0){

    console.log ("Aluno aprovado.");
    console.log ("Media final: " + parseFloat(mediaFinal).toFixed(1));

} else if (mediaFinal <= 4.9){
  
    console.log ("Aluno reprovado.");
    console.log ("Media final: " + parseFloat(mediaFinal).toFixed(1));
}