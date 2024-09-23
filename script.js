function initTabNav() {

    // Seleciona todos os elementos <li> dentro do elemento com a classe .js-tabmenu
    const tabMenu = document.querySelectorAll('.js-tabmenu li')

    // Seleciona todas as seções <section> dentro do elemento com a classe .js-tabcontent
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    // Verifica se existem elementos em tabMenu e tabContent
    if (tabMenu.length && tabContent.length) {
        // Adiciona a classe 'ativo' à primeira seção
        tabContent[0].classList.add('ativo')

        // Função que ativa a aba correspondente ao índice fornecido
        function activeTab(index) {
            // Remove a classe 'ativo' de todas as seções
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            // Adiciona a classe 'ativo' à seção correspondente ao índice fornecido
            tabContent[index].classList.add('ativo')
        }

        // Adiciona um evento de clique a cada item do menu de abas
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                // Chama a função activeTab passando o índice do item clicado
                activeTab(index)
            })
        })
    }
}
initTabNav()

function initAccordion() {
    // Seleciona todos os elementos <dt> dentro de um contêiner com a classe .js-accordion
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activCLass = 'ativo'
    if (accordionList.length) {
        // Define a função que será chamada quando um item do acordeão for clicado
        function activeAccodion() {
            // Alterna a classe 'ativo' no elemento clicado
            this.classList.toggle(activCLass)
            // Alterna a classe 'ativo' no próximo elemento irmão (geralmente o conteúdo do acordeão)
            this.nextElementSibling.classList.toggle(activCLass)
        }
        // Adiciona um event listener de clique para cada item na lista de acordeão
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccodion)
        })
    }
}

// Chama a função para inicializar o comportamento do acordeão
initAccordion()

function initScrollSuave() {
    // Seleciona todos os links internos dentro do elemento com a classe 'js-menu' que começam com '#'
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    // Define a função que será chamada quando um link interno for clicado
    function scrollToSection(event) {
        // Previne o comportamento padrão do link (navegar para a âncora)
        event.preventDefault();
        // Obtém o valor do atributo 'href' do link clicado
        const href = event.currentTarget.getAttribute('href');
        // Seleciona a seção correspondente ao 'href'
        const section = document.querySelector(href);

        // Rola suavemente para a seção correspondente
        section.scrollIntoView({
            behavior: 'smooth', // Define a rolagem suave
            block: 'start', // Alinha a seção ao topo da janela de visualização
        });
    }

    // Adiciona um ouvinte de evento de clique para cada link interno
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave()

function initAnimacaoScroll() {
    // Seleciona todos os elementos com a classe 'js-scroll'
    const sections = document.querySelectorAll('.js-scroll')

    // Verifica se há algum elemento selecionado
    if (sections.length) {
        // Calcula 60% da altura da janela do navegador
        const windowMetade = window.innerHeight * 0.6

        // Define a função que será executada ao rolar a página
        function animaScroll() {
            // Para cada seção selecionada
            sections.forEach((section) => {
                // Obtém a distância do topo da seção em relação ao topo da janela
                const sectionTop = section.getBoundingClientRect().top
                // Verifica se a seção está visível na janela (60% da altura)
                const isSectionVisible = (sectionTop - windowMetade) < 0
                // Se a seção estiver visível, adiciona a classe 'ativo'
                if (isSectionVisible)
                    section.classList.add('ativo')
                // Caso contrário, remove a classe 'ativo'
                else
                    section.classList.remove('ativo')
            })
        }

        // Executa a função uma vez para ativar as seções visíveis ao carregar a página
        animaScroll()

        // Adiciona um evento de rolagem que executa a função animaScroll
        window.addEventListener('scroll', animaScroll)
    }
}
// Inicializa a função de animação ao rolar a página
initAnimacaoScroll()
