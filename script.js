function init() {
    window.onload = () => {
        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
            setTimeout(showContent, 2000);
        }, 1000);
    };

    document.getElementById("yesButton").onclick = handleYesClick;
    document.getElementById("noButton").onmouseover = handleNoHover;
}

function showContent() {
    document.getElementById("conteudo").style.display = "block";
    document.getElementById("bgMusic").play();
}

function handleYesClick() {
    document.querySelector('.flowers').style.display = 'none';
    document.getElementById("conteudo").style.display = "none";
    document.getElementById("video").style.display = "block"; // Exibe o vídeo
    createHearts();
}

function handleNoHover() {
    const noButton = this;
    noButton.style.position = 'absolute';
    noButton.style.bottom = geraPosicao(10, 90);
    noButton.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

function createHearts() {
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💘'][Math.floor(Math.random() * 3)];
        heart.style.position = 'fixed';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

init();
