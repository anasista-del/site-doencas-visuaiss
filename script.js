// Lógica interativa do Quiz (Forçando atualização de cor no clique)
function verificarResposta(botaoClicado, eCorreta) {
    if (eCorreta === true || eCorreta === "true") {
        botaoClicado.style.setProperty("background-color", "#2ec4b6", "important");
        botaoClicado.style.setProperty("color", "#ffffff", "important");
        botaoClicado.innerHTML = "✅ Correto!";
    } else {
        botaoClicado.style.setProperty("background-color", "#e63946", "important");
        botaoClicado.style.setProperty("color", "#ffffff", "important");
        botaoClicado.innerHTML = "❌ Tente novamente";
    }
    botaoClicado.disabled = true;
}

// Lógica de filtragem dos cards
function filtrarDoenca(doenca) {
    const miopia = document.getElementById('card-miopia');
    const astigmatismo = document.getElementById('card-astigmatismo');
    const glaucoma = document.getElementById('card-glaucoma');
    const catarata = document.getElementById('card-catarata');

    if (!miopia || !astigmatismo || !glaucoma || !catarata) return;

    miopia.style.display = 'none';
    astigmatismo.style.display = 'none';
    glaucoma.style.display = 'none';
    catarata.style.display = 'none';

    if (doenca === 'todos') {
        miopia.style.display = 'block';
        astigmatismo.style.display = 'block';
        glaucoma.style.display = 'block';
        catarata.style.display = 'block';
    } else if (doenca === 'miopia') {
        miopia.style.display = 'block';
    } else if (doenca === 'astigmatismo') {
        astigmatismo.style.display = 'block';
    } else if (doenca === 'glaucoma') {
        glaucoma.style.display = 'block';
    } else if (doenca === 'catarata') {
        catarata.style.display = 'block';
    }
}
