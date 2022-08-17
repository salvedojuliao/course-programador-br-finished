let tela = document.getElementById("tela");
let context = tela.getContext("2d");

// Jeito um
// let img = document.getElementById("spider");

// Jeito dois 
let img = new Image();
img.src = "./imgs/spider.jpg";

img.onload = desenharImg();

function desenharImg(){
    context.drawImage(this, 20, 20);
}

