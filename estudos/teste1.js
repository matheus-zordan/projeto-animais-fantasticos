// Seleciona o primeiro elemento <h1> do documento
const h1 = document.querySelector('h1');

// Seleciona o elemento com a classe 'animais-descricao'
const animaisLista = document.querySelector('.animais-descricao');

// Exibe o conteúdo HTML interno do elemento <h1>
console.log(h1.innerHTML);

// Exibe o conteúdo HTML externo do elemento <h1>, incluindo a própria tag <h1>
console.log(h1.outerHTML);

// Exibe o conteúdo HTML interno do elemento com a classe 'animais-descricao'
console.log(animaisLista.innerHTML);

// Seleciona o elemento com a classe 'animais-lista'
const lista = document.querySelector('.animais-lista');

// Exibe todos os filhos do elemento 'lista'
console.log(lista.children);

// Seleciona e exibe o último elemento <li> dentro de 'lista'
console.log(lista.querySelector('li:last-child'));

// Exibe o nó anterior ao elemento 'lista' no DOM
console.log(lista.previousSibling);