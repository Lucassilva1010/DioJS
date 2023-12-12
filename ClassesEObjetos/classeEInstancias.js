//Classes são forma de criar modelos de algo que seja fisico ou abstrato
// Podemos ainda chamar as Classes de um tipo de Objeto, porém eles tem outra forma de interação, que são chamados de: Instâncias

class pessoa {

    nome;
    idade;
    //Quando vamos criar um metodo que ele esteja dentro de uma classe, ele não precisa da palavra função
    descreve() {
        console.log(`Meu nome é: ${this.nome} e a minha idade é: ${this.idade}`)
    }
}

//Aqui são o que chamamos de Instancias das classes
const novaPesoa = new pessoa();
const novaPesoa2 = new pessoa();

novaPesoa.nome = 'Lucas';//essas são os preenchimentos das instancias, o que chamamos de novos atributos da nossa classe
novaPesoa.idade = 34

novaPesoa.descreve()//ivocação do metodo a partir de uma Instância 

novaPesoa2.nome = 'Antonella'
novaPesoa2.idade = 4
novaPesoa2.descreve()
