const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor)
    },
    ativar() {
        this.element().classList.add('ativar')
    }
}

class Dom2 {
    constructor(seletor) {
        this.element = function () {
            return document.querySelector(this.seletor)
        }
        this.ativar = function () {
            this.element().classList.add('ativar')
        }
    }
}

const li = new Dom2('li')
const ul = new Dom2('ul')