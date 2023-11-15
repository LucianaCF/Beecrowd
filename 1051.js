const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

console.clear ();

let salario = parseFloat(lines[0]);
let impostoPrimeiraFaixa 
let impostoSegundaFaixa 
let impostoTerceiraFaixa 
let impostoQuartaFaixa

if (salario >= 0.00 && salario <= 2000.00) {
    impostoPrimeiraFaixa = "Isento"
    console.log (impostoPrimeiraFaixa);

} else if (salario >= 2000.01 && salario <= 3000.00) {
    impostoSegundaFaixa = ((salario - 2000)*0.08).toFixed(2);
    console.log ("R$ " + impostoSegundaFaixa);
     
} else if (salario >= 3000.01 && salario <= 4500.00) {
    impostoTerceiraFaixa = ((1000*0.08)+(salario - 3000)*0.18).toFixed(2);
    console.log ("R$ " + impostoTerceiraFaixa);

}  else if (salario > 4500 ) {
    impostoQuartaFaixa = ((1000*0.08) + (1500*0.18) + ((salario - 4500)*0.28)).toFixed(2);
    console.log ("R$ " + impostoQuartaFaixa);

}