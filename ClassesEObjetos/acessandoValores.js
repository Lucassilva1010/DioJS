//Temos varias formas de acessar os objetos, e uma coisa legal é acessar os atribustos pelo os seus indices
//Isso é chamado de: Acesso de objetos por Coleção
//para esse tipo de chamada, precisamos colocar e adicionar o nome das propeiedades, e assim o objeto ira fazer uma veirificação se ele existe
//Lembrando que estmaos falando de Objetos Litearais 


const pessoa = {
    nome: 'Lucas',
    idade: 34
}

console.log(pessoa['nome'])
pessoa['idade'] = 30
console.log(pessoa['idade'])