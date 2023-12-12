//Cálculo de valor de uma viagem 
const gasolina = 6.40;
const etanol = 5.50;
let consumoCarro = 16.3
let distanciaViagem = 200.6;

let usuario = 'gasolina'

const km = parseFloat(distanciaViagem / consumoCarro)

if (usuario == 'gasolina'.toLocaleLowerCase()) {
    let viagemGas = parseFloat((distanciaViagem / consumoCarro) * gasolina)
    console.log(`Você terá que colocar R$ ${viagemGas.toFixed(2)} de Gasolina`)

} else {

    let viagemetanol = parseFloat((distanciaViagem / consumoCarro) * etanol)
    console.log(`Você terá que colocar R$ ${viagemetanol.toFixed(2)} de Etanol`)
}

