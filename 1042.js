const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//function main(){

lines = lines[0].split(" ");


let valor1 = Number(lines.shift());
let valor2 = Number(lines.shift());
let valor3 = Number(lines.shift());

let menor, meio, maior;

if (valor1>valor2 && valor1>valor3){
     maior = valor1 
   
        if(valor2<valor3){
            menor = valor2
            meio = valor3 
                console.log (valor2)
                console.log (valor3)
                console.log (valor1 + '\n')
                
                console.log (valor1)
                console.log (valor2)
                console.log (valor3)

        } else {
             meio = valor2 
             menor = valor3 
                console.log (valor3)
                console.log (valor2)
                console.log (valor1+ '\n')
                
                console.log (valor1)
                console.log (valor2)
                console.log (valor3)
        }

} else if (valor1<valor2 && valor1<valor3){
    menor =  valor1 
  
         if(valor2<valor3){
             meio =  valor2 
             maior = valor3 
                console.log (valor1)
                console.log (valor2)
                console.log (valor3+ '\n')
                
                console.log (valor1)
                console.log (valor2)
                console.log (valor3)

         } else {
            maior = valor2 
            meio =  valor3 
                console.log (valor1)
                console.log (valor3)
                console.log (valor2+ '\n')
              
                console.log (valor1)
                console.log (valor2)
                console.log (valor3)
    }
} else {
    meio =  valor1 
  
         if(valor2<valor3){
         menor = valor2 
         maior = valor3 
            console.log (valor2)
            console.log (valor1)
            console.log (valor3+ '\n')
          
            console.log (valor1)
                console.log (valor2)
                console.log (valor3)
         } else {
        maior =  valor2 
         menor = valor3 
            console.log (valor3)
            console.log (valor1)
            console.log (valor2+ '\n')
          
            console.log (valor1)
                console.log (valor2)
                console.log (valor3)
}
} 



 