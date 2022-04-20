class Moto {

    constructor(marca,modelo,cor) {
        this.marca = marca
        this.modelo = modelo
        this.cor = cor

        this.ligado = false

    }

    informacaoMoto () {
        console.log(`Marca: ${this.marca} Modelo: ${this.modelo}  Cor:${this.cor} Ligado: ${this.ligado ? "Sim" : "Não"}`)
        console.log("__________________________________________________________")

        return "Leu"
    }

    ligar() {
        this.ligado = true

    }

    desligar() {
        this.ligado = false

    }
}

let moto1 = new Moto("Honda","CG 160","Azul")
let moto2 = new Moto("Kawasaki","Ninja 400","Verde")