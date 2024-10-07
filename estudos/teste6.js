//Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const novoMenu = menu.cloneNode(true)
copy.appendChild(novoMenu)

//Selecione o primeiro DT da dl em FAQ
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

//Selecione o DD referente ao primeiro DT
const proximo = primeiroDt.nextElementSibling

//substitua o conteudo HTML da .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML



