function abrirModal(botao) {
    const modal = document.getElementById('modal-container');
    const imagemModal = document.getElementById('img-modal');
    
    // Pega a imagem que está logo após o botão dentro da tag <figure>
    const imagemOriginal = botao.nextElementSibling.src;

    // Define o src da imagem do modal como a imagem original
    imagemModal.src = imagemOriginal;

    // Mostra o modal usando flex para centralizar
    modal.style.display = 'flex';
}

function fecharModal() {
    const modal = document.getElementById('modal-container');
    modal.style.display = 'none';
}

// Fecha o modal também se apertar a tecla "Esc"
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        fecharModal();
    }
});