let valorProduto = 20.00;
let pagamento = 'tres';

if (pagamento === 'debito') {
    valorProduto -= (valorProduto * 0.1)
    console.log(`O valor com desconto no ${pagamento} de 10%, fica $${valorProduto.toFixed(2)}`)

} else if (pagamento === 'pix' || pagamento === 'dinheiro') {
    valorProduto -= (valorProduto * 0.15)
    console.log(`O valor com desconto no $${pagamento} de 15%, fica ${valorProduto.toFixed(2)}`)

} else if (pagamento === 'duas') {
    console.log(`O valor a sera pago é: $${valorProduto.toFixed(2)}`)
} else {
    valorProduto += (valorProduto * 0.1)
    console.log(`O valor com juroso de 15%, fica: $${valorProduto.toFixed(2)}`)
}