//SEMPRE USAR AS 4 LINHAS ABAIXO PARA RODAR O CÓDIGO PARA O BEECROWD
//tem que estar presente em todos os arquivos de exercícios do beecrowd

const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin','utf8');
var lines = input.split('\r\n');

//COLAR NO BEECROWD O CÓDIGO ABAIXO
//aqui estamos quebrando a entrada de dados de uma linha em variáveis separadas

//lines = lines[0].split(" "); //SÓ DEVE SER USADO QUANDO OS DADOS SÃO FORNECIDOS NA MESMA LINHA

//console.log(lines); //Este comando foi feito apenas para mostrar q o comando acima pega os dados da linha de entrada do stdin e as separa por uma vírgula

//obtem o primeiro valor do arquivo stdin
let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let x = a + b;

console.log ("X = " + x);

