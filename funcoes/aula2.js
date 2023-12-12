// Uma forma de organizar as funções para Inicio, é criar uma função principal e depois chamar as demais nessa função principal

function calMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3
    if (media > 7) {
        return `Aprovado com Media ${media.toFixed(1)}`
    } else if (media > 5.5 && media < 7) {

        return `Em recupeação com Media ${media.toFixed(1)}`
    } else if (media < 5.5) {

        return `Reprovado com Media ${media.toFixed(1)}`
    }
}

function Main() {
    console.log('Seja bem vindo ao Programa principal!')

    console.log(`Media do aluno: ${calMedia(10, 3.5, 8)}`)
}

Main()