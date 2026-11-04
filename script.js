// Função para filtrar os cards na tela
function filtrarDoenca(doenca) {
    const miopiaCard = document.getElementById('card-card-miopia') || document.getElementById('card-miopia');
    const astigmatismoCard = document.getElementById('card-card-astigmatismo') || document.getElementById('card-astigmatismo');
    const glaucomaCard = document.getElementById('card-card-glaucoma') || document.getElementById('card-glaucoma');
    const catarataCard = document.getElementById('card-catarata');

    miopiaCard.style.display = 'none';
    astigmatismoCard.style.display = 'none';
    glaucomaCard.style.display = 'none';
    catarataCard.style.display = 'none';

    if (doenca === 'todos') {
        miopiaCard.style.display = 'block';
        astigmatismoCard.style.display = 'block';
        glaucomaCard.style.display = 'block';
        catarataCard.style.display = 'block';
    } else if (doenca === 'miopia') {
        miopiaCard.style.display = 'block';
    } else if (doenca === 'astigmatismo') {
        astigmatismoCard.style.display = 'block';
    } else if (doenca === 'glaucoma') {
        glaucomaCard.style.display = 'block';
    } else if (doenca === 'catarata') {
        catarataCard.style.display = 'block';
    }
}

// NOVA FUNÇÃO: Lógica interativa do Quiz
function verificarResposta(botaoClicado, eCorreta) {
    // Se a resposta for correta, o botão fica verde. Se errar, fica vermelho.
    if (eCorreta) {
        botaoClicado.style.backgroundColor = "#2ec4b6"; // Verde/Ciano de acerto
        botaoClicado.style.borderColor = "#ffffff";
        botaoClicado.innerHTML += "  ✅ (CORRETO!)";
    } else {
        botaoClicado.style.backgroundColor = "#e63946"; // Vermelho de erro
        botaoClicado.style.borderColor = "#ffffff";
        botaoClicado.innerHTML += "  ❌ (Tente novamente!)";
    }
    
    // Desativa o botão após o clique para o usuário não clicar duas vezes na mesma alternativa
    botaoClicado.disabled = true;
}
