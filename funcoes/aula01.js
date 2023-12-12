//Funções são pequenos trechos de codigos que podem ser invocados a qualquer momento da execução do programa 
// Funçõe que não possuiem retornos, são chamados de Procedimentos
// As funções que devolvem um valor Return, elas ficam assinas com os valores das operações que são passadas/processadas

//declaração de uma função
function BoasVindas() {
    console.log('Olá Mundo!')
}

//invocação da função
BoasVindas()


//Função co retorno 
function Calcula(numero1, numero2) {
    let result = numero1 + numero2
    return Number(result)
}

let resultadoFuncao = Calcula(30, 100);
console.log(resultadoFuncao)
console.log(`Aqui está a função impressa no console.Log = ${Calcula(30, 50)}`)
