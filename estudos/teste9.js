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

console.log(pessoa1)

//Crie uma Constructor Function (Dom) para manipulação
//de listas de elementos do dom. Deve conter as seguintes
//propriedades e metodos
//
//elements, retorna NodeList com os elementos selecionados
//addClass(classe), adiciona a classe a todos os elementos,
//removeClass(classe), remover a classe a todos os elementos

//Resolução

class Dom {
    // Define a classe Dom

    constructor(seletor) {
        // O constructor é chamado quando um novo objeto da classe é criado
        const elementList = document.querySelectorAll(seletor)
        // Seleciona todos os elementos do DOM que correspondem ao seletor e os armazena em elementList
        this.elements = elementList
        // Armazena elementList na propriedade elements do objeto para uso posterior

        this.addClass = function (classe) {
            // Define um método addClass que recebe um parâmetro classe
            elementList.forEach((element) => {
                // Para cada elemento em elementList
                element.classList.add('classe')
                // Adiciona a classe especificada ao elemento
            })
        }

        this.removeClass = function (classe) {
            // Define um método removeClass que recebe um parâmetro classe
            elementList.forEach((element) => {
                // Para cada elemento em elementList
                element.classList.remove(classe)
                // Remove a classe especificada do elemento
            })
        }
    }
}
const listaItens = new Dom('li')
// Cria uma nova instância da classe Dom para todos os elementos <li>

const ul = new Dom('ul')
// Cria uma nova instância da classe Dom para todos os elementos <ul>

listaItens.addClass("ativar")
// Chama o método addClass da instância listaItens para adicionar a classe 'ativar' aos elementos <li>




