// Seleciona o elemento com a classe 'animais'
const animais = document.querySelector('.animais');

// Seleciona o elemento com a classe 'contato'
const contato = document.querySelector('.contato');

// Seleciona o elemento com a classe 'titulo' dentro de 'contato'
const titulo = contato.querySelector('.titulo');

// Seleciona o elemento com a classe 'mapa'
const mapa = document.querySelector('.mapa');

// Substitui o elemento 'titulo' dentro de 'contato' pelo elemento 'mapa'
contato.replaceChild(mapa, titulo);

//Remove o mapa do site
contato.removeChild(mapa)
