// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Inicialize o controlador ScrollMagic
    const controller = new ScrollMagic.Controller();

    // Selecione todas as seções
    document.querySelectorAll('.section').forEach(section => {
        // Crie uma cena para cada seção
        new ScrollMagic.Scene({
            triggerElement: section, // Elemento que inicia a animação
            triggerHook: 0.5, // Ponto da viewport onde a animação é ativada (0 = topo, 1 = fundo)
            reverse: true // Se deve ativar a animação ao rolar de volta para o início
        })
            .setClassToggle(section.querySelector('.title'), 'in-view') // Adiciona a classe 'in-view' ao título
            .addTo(controller); // Adiciona a cena ao controlador
    });
});
