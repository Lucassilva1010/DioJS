//quando invocamos uma função  no JS, estamso invocando valores também e com isso podemoas chamar eles sem os ()
//Sempre que quisermos os retornos e suas ações, precisamos invoclas com os ()
// uam função pode atribuir uma função a outra. 
//as funções por sua ves podem ser confundidas e usadas como obejtos
//podemos criar funções imediatas, são as que são criadas e elas mesmos se executam. 

(function teste() {
    console.log('Olá, deu certo!')
})();

//Podemos ainda criar funções que são imediatas e também anonimmas como o exemplo a abaixo 
(function () {
    console.log('Função Anonima')
})();
