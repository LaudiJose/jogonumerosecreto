let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Você acertou!');
        exibirTextoNaTela('p','Esse era o número secreto!!!');
    } else {
        if(chute > numeroSecreto){
            alert('O número secreto é menor');
        } else {
            alert('O número secreto é maior');
        }
    }     
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
