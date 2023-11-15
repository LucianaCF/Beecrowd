const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//cálculo de aumento de salário

//console.clear ();

lines = lines[0].split(" ");
let salario = parseFloat(lines[0]);
let percent = [4/100, 7/100, 10/100, 12/100, 15/100];
let novoSal
let reajuste
let percentual
let aumento 

//console.log (percentSal);

    if (salario >= 0 && salario <= 400) {
        let percentSal = percent[4]
        novoSal = ((salario * percentSal) + salario).toFixed(2);
        reajuste = (salario * percentSal).toFixed(2);
        percentual = (percentSal * 100).toFixed(0)

        console.log ("Novo salario: " + novoSal);
        console.log ("Reajuste ganho: " + reajuste);
        console.log ("Em percentual: " + percentual + " %");

 } else if (salario >= 400.01 && salario <= 800) {
        let percentSal = percent[3];
        novoSal = ((salario * percentSal) + salario).toFixed(2);
        reajuste = (salario * percentSal).toFixed(2);
        percentual = (percentSal * 100).toFixed(0)

        console.log ("Novo salario: " + novoSal);
        console.log ("Reajuste ganho: " + reajuste);
        console.log ("Em percentual: " + percentual + " %");

}  else if (salario >= 800.01 && salario <= 1200) {
    let percentSal = percent[2];
    novoSal = ((salario * percentSal) + salario).toFixed(2);
    reajuste = (salario * percentSal).toFixed(2);
    percentual = (percentSal * 100).toFixed(0)

    console.log ("Novo salario: " + novoSal);
    console.log ("Reajuste ganho: " + reajuste);
    console.log ("Em percentual: " + percentual + " %");

}  else if (salario >= 1200.01 && salario <= 2000) {
    let percentSal = percent[1];
    novoSal = ((salario * percentSal) + salario).toFixed(2);
    reajuste = (salario * percentSal).toFixed(2);
    percentual = (percentSal * 100).toFixed(0)


    console.log ("Novo salario: " + novoSal);
    console.log ("Reajuste ganho: " + reajuste);
    console.log ("Em percentual: " + percentual + " %");

}  else if (salario > 2000) {
    let percentSal = percent[0];
    novoSal = ((salario * percentSal) + salario).toFixed(2);
    reajuste = (salario * percentSal).toFixed(2);
    percentual = (percentSal * 100).toFixed(0)

    console.log ("Novo salario: " + novoSal);
    console.log ("Reajuste ganho: " + reajuste);
    console.log ("Em percentual: " + percentual + " %");

}