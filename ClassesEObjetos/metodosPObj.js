//No javaScript podemos dentros dos objetos colocarmos funções
//No js, pode reatribuir valores dentro de funções, ou até mesmo reatribuir valores de funções
//Podemos fazer refrerencia de um objeto a ele mesmo. 

const pessoa = {

    nome: 'Lucas',
    idade: 34,
    descreve: function () {
        console.log(`O nome da pessoa é ${this.nome} e a idade é ${this.idade}`)
    }
}
console.log(pessoa)
pessoa.descreve()

console.log('Podemos ainda realizar os incrementos e exclusões.')
console.log('Incluindo a Altura da pessoa sem sair na função')

pessoa.idade = 34
pessoa.altura = 1.70
console.log(pessoa)
pessoa.descreve()
console.log('Excluido um atribudo do OBJ')
console.log('Excluido o atributo Idade')

delete pessoa.idade;
console.log(pessoa)
pessoa.descreve()

console.log('Reatribuindo a função e colocando outro texto')

pessoa.descreve = function () {
    console.log(`O nome é: ${this.nome} a idade é ${this.idade} a altura é: ${this.altura}`)
}
pessoa.idade = 34
pessoa.descreve();