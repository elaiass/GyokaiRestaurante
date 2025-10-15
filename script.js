document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os elementos que devem ser animados
    const elementosParaAnimar = document.querySelectorAll('.animaçao');

    // 2. Configurações do IntersectionObserver
    const opcoesObserver = {
        root: null, // O viewport é o root
        rootMargin: '0px 0px -10% 0px', // O elemento deve estar 10% dentro da tela
        threshold: 0.1 // Pelo menos 10% do elemento deve estar visível
    };

    // 3. Função que será executada quando houver uma interseção
    const callbackObserver = (entries, observer) => {
        entries.forEach(entry => {
            const elemento = entry.target;

            if (entry.isIntersecting) {
                // Se o elemento entrou na tela (descendo)
                elemento.classList.add('visivel');
            } else {
                // Se o elemento saiu da tela (subindo ou descendo)
                // Se o topo do elemento estiver abaixo do topo do viewport (ou seja, saiu por cima)
                // Usamos o topo para não remover a classe assim que ele sair por baixo
                if (entry.boundingClientRect.top > 0) {
                    // Se o elemento estiver abaixo do viewport (por exemplo, subindo)
                    // Você pode remover a classe para ele sumir novamente
                    elemento.classList.remove('visivel');
                }
            }
        });
    };

    // 4. Cria o Observer
    const observer = new IntersectionObserver(callbackObserver, opcoesObserver);

    // 5. Observa cada elemento
    elementosParaAnimar.forEach(elemento => {
        observer.observe(elemento);
    });
});