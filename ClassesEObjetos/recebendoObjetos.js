//Recebendo Objetos em Funções
//Todos os objetos que serão usado nesse exemplos vão vir de dentro de uma classe

class Pessoa {
    //Atributos
    nome;
    idade;

    //Construtores obrigatorios
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }
}


//Função que compara Objetos de uma determinada classe
function compara(p1, p2) {

    //Comparando os obejetos a partir de um atributo
    if (p1.idade > p2.idade) {
        console.log(`A pessoa ${p1.nome}, é mais velha que é a pessoa ${p2.nome}, e ela tem ${p1.idade} `)
    } else if (p2.idade > p1.idade) {

        console.log(`A pessoa ${p2.nome}, é mais velha que é a pessoa ${p1.nome}, e ela tem ${p2.idade} `)
    } else {

        console.log(`A pessoa ${p2.nome}, tem a mesma idade que a pessoa ${p1.nome} que é ${p1.idade} `)
    }

}

//Criando instancias de uma classe e preenchendo os seus construtores
const p1 = new Pessoa('Lucas', 34);
const p2 = new Pessoa('Anastacia', 23);

//invocando a função e passando como parametros os objetos
compara(p1, p2)

