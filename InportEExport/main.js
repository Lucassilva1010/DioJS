const teste = require('./funcoesAuxiliares')

//Isso é chamado de objeto Destructuring
//é uma fimr de trazer o que está sendo importado, na definição da variavel 
const { get, Print, nomes } = require('./funcoesAuxiliares')

const { get1, print1, imprime } = require('./exercicio01')

//isso imprime os valores das funções Importadas, de acordo com as suas configurações
// Print(get())
// nomes(get())

//Lista Vazia
const numerosget = [];
//Loop para preencher a lista vazia
// for (let i = 0; i < 5; i++) {
//     const element = get1();
//     numerosget.push(element)
// }
//FOi impresso para veirificar se os numeros estavam na lista
console.log(numerosget)
//loop para percorrer a lista e verificar qual o numero maior
let maiorvalor = 0
// for (let j = 0; j < numerosget.length; j++) {
//     const numeroSorteado = numerosget[j];
//     if (numeroSorteado > maiorvalor) {
//         maiorvalor = numeroSorteado;
//     }

// }

//Simplificando a Logica anterior

let novoMaiorValor = 0;

for (let i = 0; i < 5; i++) {
    const element = get1();

    if (element > novoMaiorValor) {
        novoMaiorValor = element;
    }

}

imprime(maiorvalor)
imprime(novoMaiorValor)

