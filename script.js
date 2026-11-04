function filtrarDoenca(doenca) {
    // Seleciona todos os cards da tela
    const miopiaCard = document.getElementById('card-miopia');
    const astigmatismoCard = document.getElementById('card-astigmatismo');
    const glaucomaCard = document.getElementById('card-glaucoma');
    const catarataCard = document.getElementById('card-catarata');

    // Esconde todos os cards inicialmente definindo a exibição para 'none'
    miopiaCard.style.display = 'none';
    astigmatismoCard.style.display = 'none';
    glaucomaCard.style.display = 'none';
    catarataCard.style.display = 'none';

    // Mostra apenas o card selecionado ou todos eles
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

