let jogador = document.getElementById("jogador");

xInicial = 0;
yinicial = 0;

function mooverJogadorPara(x,y){
    let posicaoX = x + "px";
    let posicaoY = y + "px";
    jogador.style.top = posicaoX;
    jogador.style.left = posicaoY;
    
}

setInterval(function(){

    mooverJogadorPara(xInicial++, yinicial++)
}, 24)