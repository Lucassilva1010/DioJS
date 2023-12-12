let peso = 80;
let altura = 1.70;

let imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log(`O seu IMC ${imc.toFixed(2)}, está a Baixo do Peso!`)
} if (imc > 18.5 && imc < 25.00) {
    console.log(`O seu IMC ${imc.toFixed(2)}, está Normal!`)
} if (imc > 25.00 && imc <= 30.00) {
    console.log(`O seu IMC ${imc.toFixed(2)}, está a Acima do Peso!`)
} if (imc > 30.00 && imc < 40.00) {
    console.log(`O seu IMC ${imc.toFixed(2)}, é de classe Obesa!`)
} else if (imc > 40.00) {

    console.log(`O seu IMC ${imc.toFixed(2)}, é de classe Obesidade Grave!`)
}