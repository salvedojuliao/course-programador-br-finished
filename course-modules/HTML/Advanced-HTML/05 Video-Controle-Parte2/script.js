let video = document.getElementById("video1");
let controle = document.getElementById("controle");

function retroceder(){
    video.currentTime -= 15; 
}

function avancar(){
    video.currentTime += 15;
}

function dimunuir_vel(){
    video.playbackRate -= 0.1;
}

function aumentar_vel(){
    video.playbackRate += 0.1;
}

function play(){
    video.play(); // É o método que dá play no video
}

function stop(){ // stop volta ao início
    video.pause(); // O pause mantém onde parou, por isso eu uso o código abaixo para voltar ao início
    video.currentTime = 0;
}   

