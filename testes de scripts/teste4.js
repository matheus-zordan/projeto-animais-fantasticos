const h1 = document.querySelector('h1') // Seleciona o primeiro elemento <h1> encontrado no documento
const faq = document.querySelector('.faq') // Seleciona o primeiro elemento com a classe 'faq' encontrado no documento
const cloneH1 = h1.cloneNode(true)  // Cria uma cópia profunda (deep clone) do elemento <h1>, incluindo seus filhos
faq.appendChild(cloneH1) // Adiciona a cópia do elemento <h1> como filho do elemento com a classe 'faq'


