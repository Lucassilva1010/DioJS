//Programa que leia 5 numeros e mostre qual o maior numero entre eles

const numeros = [5, 50, 10, 98, 23]

let i = 0;

function get1() {
    const valor = numeros[i]
    i++;
    return valor
}

function print1(valor) {
    console.log(`valor ${valor}`)
}
function imprime(valor) {
    console.log(`O maior numero é: ${valor}`)
}

module.exports = {
    get1, print1, imprime
}