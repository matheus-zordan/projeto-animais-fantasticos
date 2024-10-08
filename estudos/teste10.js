//Prototype
//A propriedade prototype é um objeto adicionado a uma
//função quando a mesma é criada

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

Pessoa.prototype.andar = function () {
    return this.nome + ' andou'
}

const matheus = new Pessoa('Matheus', 27)

console.log(Pessoa.prototype)
console.log(matheus.andar())

//HERANÇA DE PROTÓTIPO
//O objeto possui acesso aos métodos e propriedades do prototipo
//de construtor responsável por criar esse objeto. O objeto abaixo 
//possui acesso a métodos que nunca definimos, mas são herdados
//do prototipo Object

console.log(Object())

 