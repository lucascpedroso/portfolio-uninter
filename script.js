document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'nav-item' e o botão do formulário
    let navItems = document.querySelectorAll('.nav-item');
    let contactButton = document.querySelector('form button');
    
    // Para cada item de navegação, adiciona um evento de clique
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove a classe 'selected' do item atualmente selecionado
            document.querySelector('.nav-item a.selected').classList.remove('selected');

            // Adiciona a classe 'selected' ao item clicado
            this.querySelector('a').classList.add('selected');
        });
    });

    // Adiciona um evento de clique ao botão de contato
    contactButton.addEventListener('click', function(e) {
        // Previne o comportamento padrão do botão (enviar o formulário)
        e.preventDefault();
    });


});