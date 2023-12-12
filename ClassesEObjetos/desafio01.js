class carro {
    marca;
    modelo;
    cor;
    kmm;

    constructor(marca, modelo, cor, kmm) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.kmm = kmm
    }

    calculaViagem(valorCombustivel) {

        if (this.modelo === 'uno') {

            const gasto = ((this.kmm / 14.3) * valorCombustivel)

            return `Para uma viagem de ${this.kmm} com um ${this.modelo}, Você vai gastar $${gasto.toFixed(2)} reais para apenas ir.\n
            Se você quiser ir e vir terá que gastar $${(gasto * 2).toFixed(2)}`

        } else if (this.modelo === 'gol') {

            const gasto = ((this.kmm / 11.8) * valorCombustivel)

            return `Para uma viagem de ${this.kmm} com um ${this.modelo}, Você vai gastar $${gasto.toFixed(2)} reais para apenas ir.\n
            Se você quiser ir e vir terá que gastar $${(gasto * 2).toFixed(2)}`
        }

    }
}

const viagem = new carro('VW', 'gol', 'branco', 200)


const valorCombustivel = 6.3
console.log(viagem.calculaViagem(valorCombustivel))