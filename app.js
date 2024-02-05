let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;


function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML =texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3});
}
function exibirMensagenInicial() {
    exibirTextoNatela('h1','Jogo do número secreto');
    exibirTextoNatela('p','Escolha um número entre 1 a 10');
}

exibirMensagenInicial();

function verificarChute(){
    let chute =document.querySelector('input').value;
     
    if(chute == numeroSecreto){
        exibirTextoNatela('h1','Acertou!');
        let palavraTentativa = tentativas >1 ?'tentativas':'tentativa';
        let mensagemTentaivas = ` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNatela('p', mensagemTentaivas);
        //ativando o botão de novo jogo
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute > numeroSecreto){
            exibirTextoNatela('p','O número secreto é menor!');
        }else{
            exibirTextoNatela('p','O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido=parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados=[]
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function  limparCampo(){
    chute = document.querySelector('input');
    chute.value='';   
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)

}