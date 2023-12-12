function Marioridade(nome, idade) {
    if (idade >= 18) {
        return `Olá ${nome}, você tem ${idade} e é maior de idade!`
    } else {

        return `Olá ${nome}, você tem ${idade} e é menor de idade!`
    }
}

function boasVindas() {
    console.log(`Seja bem vindo! ${Marioridade('lucas', 34)}`)
}

boasVindas()