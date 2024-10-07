//Constructor Functions
class Carro {
    constructor(marcaAtribuida, precoAtrbuido) {
        this.marca = marcaAtribuida
        this.preco = precoAtrbuido
    }
}
// A palavra new é responsavel por criar um novo objeto baseado na função que passamos a frente dela.
const honda = new Carro('Honda', 3000)
const fiat = new Carro('Fiat', 4000)

console.log(honda)
console.log(fiat)

class Carro2 {
    constructor(marca, precoInicial) {
        const taxa = 1.2
        const precoFinal = precoInicial * taxa
        this.marca = marca
        this.preco = precoFinal
    }
} 

const bmw = new Carro2('bmw', 120000)
console.log(bmw)