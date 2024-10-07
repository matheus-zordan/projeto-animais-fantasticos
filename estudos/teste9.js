//Transforme o objeto abaixo em uma Constructor Function

// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//         console.log(nome + 'andou')
//     }
// }

//Resolução

class Pessoa {
    constructor(nomePessoa, idadePessoa) {
        this.nome = nomePessoa
        this.idade = idadePessoa
        this.andar = function () {
            console.log(this.nome + 'andou')
        }
    }
}
const pessoa1 = new Pessoa('Joao', 20)
const pessoa2 = new Pessoa('Maria', 25)
const pessoa3 = new Pessoa('Bruno', 15)

//Crie uma Constructor Function (Dom) para manipulação
//de listas de elementos do dom. Deve conter as seguintes
//propriedades e metodos
//
//elements, retorna NodeList com os elementos selecionados
//addClass(classe), adiciona a classe a todos os elementos,
//removeClass(classe), remover a classe a todos os elementos

//Resolução

class Dom {
    constructor(seletor) {
        const elementList = document.querySelectorAll(seletor)
        this.elements = elementList

        this.addClass = function (classe) {
            elementList.forEach((element) => {
                element.classList.add('classe')
            })
        }
        this.removeClass = function (classe) {
            elementList.forEach((element) => {
                element.classList.remove(classe)
            })
        }
    }
}

const listaItens = new Dom('li')
const ul = new Dom('ul')

listaItens.addClass("esta funcionando")



