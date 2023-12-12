let n1 = 10.0;
let n2 = 7.0;
let n3 = 6.5;
let n4 = 8.0;

let media = (n1 + n2 + n3 + n4) / 4;

if (media >= 6.0) {
    console.log('Aluno aprovado')
    console.log(`Media do aluno ${media.toFixed(2)}`)
} else if (media >= 5 && media < 6) {
    console.log('Aluno em recuperação')
    console.log(`Media do aluno ${media.toFixed(2)}`)
} else {
    console.log('Aluno em reprovado')
    console.log(`Media do aluno ${media.toFixed(2)}`)
}