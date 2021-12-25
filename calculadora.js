/*importando funções e pacotes necessários*/
const somar = require('./somar');
const subtrair = require('./subtrair');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');
const readlineSync = require("readline-sync");

console.log("************");
console.log("Calculadora");
console.log("************");

/*variáveis*/
let resultado = undefined;
const operacoes = ["somar", "subtrair", "dividir", "multiplicar"]

/*obtendo dados do usuário*/
let valor1 = readlineSync.questionFloat('Informe o primeiro valor: ');
let valor2 = readlineSync.questionFloat('Informe o segundo valor: ');
let operacao = readlineSync.keyInSelect(operacoes, 'Informe o número da operação: ');

/*cálculo*/ 
let calculo = (valor1, valor2, operacao) => operacao(valor1, valor2);

switch(operacao){
    case 0:
        resultado = calculo(valor1, valor2, somar);
        break;
    case 1:
        resultado = calculo(valor1, valor2, subtrair);
        break;
    case 2:
        resultado = calculo(valor1, valor2, dividir);
        break;
    case 3:
        resultado = calculo(valor1, valor2, multiplicar);
        break;
    case -1:
        console.log("Operação cancelada.");
        break;
}


/*apresentando resultados*/ 
console.log(`Vou ${operacoes[operacao]} os valores ${valor1} e ${valor2}`);
console.log(`O resultado é ${resultado}`);
