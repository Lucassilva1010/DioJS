class pessoa {
    nome;
    peso;
    altura;

    Imc() {
        let resultImc = this.peso / (Math.pow(this.altura, 2))
        if (resultImc < 18.5) {
            console.log(`${this.nome} -Abaixo do peso`)
        } else if (resultImc > 18.5 && resultImc < 24.9) {
            console.log(` ${this.nome} - Peso normal!`)
        } else if (resultImc > 25 && resultImc < 29) {
            console.log(`${this.nome} - Excesso de Peso`)
        } else if (resultImc > 30 && resultImc < 34.9) {
            console.log(` ${this.nome} - Obesidade calsse I`)
        } else if (resultImc > 35 && resultImc < 39.9) {
            console.log(`${this.nome} - Obesidade classe II`)
        } else if (resultImc >= 40) {
            console.log(`${this.nome} - Obesidade classe III`)
        }
    }
}
new pessoa('Lucas', 30)

const p = new pessoa()
p.nome = "José"
p.altura = 1.75
p.peso = 70

console.log(p.Imc())
