//Constructor Funcions
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


