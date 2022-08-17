let tela = document.getElementById("tela");
let context = tela.getContext("2d"); // Esse 2d é pro contexto de desenho que teremos
context.moveTo(0,0); //É um método, o (0,0) move até o cantinho)  Em outras palavras é o INÍCIO do contexto;
context.lineTo(250,250); //Move até o meio do quadrado que tem 500px
context.lineWidth = 5;
context.lineTo(500, 0);
context.strokeStyle = "blue"
context.stroke(); // Mede a espessura
