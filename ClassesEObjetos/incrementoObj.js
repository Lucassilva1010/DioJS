//Podemos incrementar de forma dinamica um valor ao objeto
// POdemos além de incremetar posso també fazer a exclusão desse atributo 
//Precisamos sempre lembrar que um objeto é contido por Chave-Valor


const pessoa = {
    nome: 'lucas',
    idade: 34
}
pessoa.altura = 1.71

console.log(pessoa)

console.log('Excluindo valores de um Objeto. Nesse exemplo vmaos excluir o nome')

delete pessoa.nome;

console.log(pessoa)
console.log('Incrementando um valor no atributo nome do objeto ')

pessoa.nome = 'Antonella'
console.log(pessoa)
