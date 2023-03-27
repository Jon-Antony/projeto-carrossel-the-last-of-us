//OBJETIVO: Quando clicarmos no botão tem que mostrar imagem correspondente

//passo 1: dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo2: dar um jeito de indentificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoAnterior(); //passo3
        marcarBotaoSelecionado(botao); //passo4
        esconderImagemAnterior(); //passo5
        mostrarImagemCorrespondente(indice); //passo6
    })
})

function mostrarImagemCorrespondente(indice) {
    //passo6: fazer aparecer a imagem correspondente ao botão clicado
    imagens[indice].classList.add('ativa');
}

function esconderImagemAnterior() {
    //passo5: esconder a imagem de fundo anterior
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function marcarBotaoSelecionado(botao) {
    //passo4: marcar o botão clicado como se estivesse selecionado
    botao.classList.add('selecionado');
}

function desativarBotaoAnterior() {
    //passo3: desmarcar o botao selecionado anterior
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

