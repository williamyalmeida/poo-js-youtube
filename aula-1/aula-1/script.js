CLASS-POO-PRATICA
// Modelo === esqueleto
// classe que está sendo chamado de CARRO

class Carro {
  //será chamado quando instanciar um objeto
//   
  constructor(cor){
    console.log("Olá, sou um novo carro " + this.cor)
    
    //Atributos são as variáveis das classes
    //this === referenciar o propria classe
    this.cor = cor 
  }
}

// instanciar
// criando objeto apartir da classe CARRO
let carro1 = new Carro("VERMELHO")
let carro2 = new Carro("AZUL")
let carro3 = new Carro("ROSO")
let carro4 = new Carro("AMERELO")