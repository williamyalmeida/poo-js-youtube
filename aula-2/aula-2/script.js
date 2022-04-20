// Modelo === esqueleto
// classe que está sendo chamado de CARRO

class Carro {  
  constructor(marca,modelo,cor){
    this.marca = marca
    this.modelo = modelo
    this.cor = cor 
    this.ligado = false
    this.km = 0
    this.combustivel = 10
  }
  
  info() {
    console.log("Marca: " + this.marca )
    console.log("Modelo: " + this.modelo )
    console.log("Cor: " + this.cor )
    console.log("Ligado: " + (this.ligado ? "SIM" : "NÃO" ))
    console.log("km: " + this.km )
    console.log("Combustivel: " + this.combustivel )
    console.log("__________________________________")
  }
  
  ligar() {
    this.ligado = true
  }
  
  desligar() {
    this.ligado = false
  }
}


// instanciar
// criando objeto apartir da classe CARRO
let carro1 = new Carro("Honda","HRV","Azul")
let carro2 = new Carro("VW","Golf","AZUL")
let carro3 = new Carro("GM","Camaro","Preto")
let carro4 = new Carro("Ford","Mustamg","Preto")

// chamando os métodos
carro1.info()
carro2.info()
carro3.info()
carro4.info()