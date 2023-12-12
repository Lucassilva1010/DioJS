//Construi um programa que calcule o valor de uma compra com:
// Descostos a vista ou no dinheiro
//Sem desconto parcelado em 2 vzs
//Com acrescimos em mais de 2 vzs 
function desconto(valor, juros) {
    return (valor -= (valor * (juros / 100))).toFixed(2)
}
function Acrescimo(valor, juros) {
    return (valor += (valor * (juros / 100))).toFixed(2)
}

function Precos(valor, forma, juros) {

    if (forma === 1) {
        console.log(`O valor a ser pago com o desconto de 10% é : $${desconto(valor, juros)}`)
    } else if (forma === 2) {
        let pagamento = valor / 2
        console.log(`O valor ficou 2 prestações de : $${pagamento.toFixed(2)}`)
    } else {
        console.log(`O valor ficou 2 prestações de : $${Acrescimo(valor, juros)}`)
    }

}



let valor = 200.00
let formaPagamento = 3
let juros = 10
Precos(valor, formaPagamento, juros = 10)
