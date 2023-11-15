const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

let N = parseInt(lines.shift()); //pega a 1a linha da entrada

for (let i = 0; i < N; i++) {
    let linha = (lines.shift());                 //pega as demais linhas da entrada, uma por uma 
    let num1 = parseInt(linha.slice(2, 4));      //e extrai os números nas posições especificadas pelo método slice
    let num2 = parseInt(linha.slice(5, 8));
    let num3 = parseInt(linha.slice(11));

    console.log (num1 + num2 + num3)
}































// let texto = "Ab23s249ttu21"
// let textoNumero = ""            //o prof chamou de textoNumero pois a inteção é concatenar os valores dentro dessa variável;
// let caractere
// let codCaractere
// //let soma = 0
// let anteriorNumero = false
// //desafio: pegar letra por letra do texto e verificar se é um número (usa-se laço for) >> SEMPRE USAR O FOR NESSAS SITUAÇÕES DE LETRA POR LETRA;

// for (let indice = 0; indice < texto.length; indice++) {
//     caractere = texto.charAt(indice);

//     //console.log (texto.charAt(indice));     //>> ao executar esse código, aparecerá no terminal letra por letra (uma abaixo da outra)    
//     //optou-se por declarar a variável 'caractere', pois o método charAt irá se repetir no código. Por isso o 'console.log' foi comentado.
// //o charAt() retorna o caractere em um indice (posição) específicado em uma string.   
// //agora, precisamos descobrir qual desses caracteres do texto é número? Utilizou-se aqui a tabela ASC; hoje, a tabela ASC encontra-s dentro de uma tabela maior chamada Unidode

//     codCaractere = Number(caractere.charCodeAt())

//     /*se o caractere está na tabela ASC dentro dos números 48 a 57 (localização dos algarismos na tabela ASC), então, caractere é um número.
//     então eu vou concatenar esse número na variável textoNumero */
//     // if (codCaractere >= 48 && codCaractere <=57) {
//     //     textoNumero += caractere     
//     // }        
//     //abaixo, optou-se por utilizar o ternário ao invés da estrutura de decisão if (por isso o if foi comentado)

//     textoNumero += (codCaractere >= 48 && codCaractere <=57) ? caractere : ""
//     console.log (textoNumero)
// }
// //agora temos q descobrir a hora q começa e a hora q termina o número, pois os números estão saindo concatenados no terminal.
// /*criou-se lá em cima a 'let soma = 0' e vamos introduzir uma flag, q indica um evento q já ocorreu. 
// Queremos saber se a variável anterior à variável q está sendo lida no momento é uma letra ou número. 
// Se for uma letra, é pq o número lido anteriormente já está 'formado', pronto para a soma. Para isso, criou-se a variável 'anteriorNumero = false'. */
       
    

