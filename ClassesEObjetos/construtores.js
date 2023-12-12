class pessoa {
    //atributos
    nome;
    idade;
    altura;
    //Construtores são parametros, que são passado para obrigar ou não, que a instência preencha todos os atributos definidos coomo obrigatorios

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.altura = 1.70;

    }
    //Metodos
    descreve() {
        console.log(`O meu nome é: ${this.nome} e minha idade é: ${idade}, e a minh altura é: ${this.altura}`)
    }
}

const novaPessoa = new pessoa('Lucas', 34)
const novaPessoa2 = new pessoa('Antonella', 4)

console.log(novaPessoa)
console.log(novaPessoa2)