window.onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
        
        // Exibir a caixa de mensagem 2 segundos após a animação da flor
        setTimeout(() => {
            document.getElementById("conteudo").style.display = "block"; // Exibe a mensagem
        }, 2000); // 2 segundos após a animação da flor
    }, 1000); // Tempo para remover a classe not-loaded
};
