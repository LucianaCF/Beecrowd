const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. 
//Em caso positivo, calcule o perímetro do triângulo. 
//Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura

lines = lines[0].split(" ");

let valor1 = parseFloat(lines.shift());
let valor2 = parseFloat(lines.shift());
let valor3 = parseFloat(lines.shift());
let perimetro;
let area;
area = (((valor1 + valor2) * valor3)/2).toFixed(1)
//console.log(valor3)
// fazer a soma entre os dois lados menores. Se a soma entre eles for maior que o terceiro lado, é possível construir um triângulo.
if (valor1 >= valor2 && valor1 >= valor3 && valor2 + valor3 > valor1){
    perimetro = (valor1 + valor2 + valor3).toFixed(1);
    console.log("Perimetro = " + perimetro);

} else if (valor2 >= valor1 && valor2 >= valor3 && valor1 + valor3 > valor2){
    perimetro = (valor1 + valor2 + valor3).toFixed(1);
    console.log("Perimetro = " + perimetro);

} else if (valor3 >= valor1 && valor3 >= valor2 && valor1 + valor2 > valor3){
    perimetro = (valor1 + valor2 + valor3).toFixed(1);
    console.log("Perimetro = " + perimetro);

} else  { console.log("Area = " + (area))

}

