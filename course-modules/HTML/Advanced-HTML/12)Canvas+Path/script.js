let tela = document.getElementById("tela");
let context = tela.getContext("2d");

context.beginPath(); // Aqui começa o caminho da linha

context.lineWidth = 4;
context.strokeStyle = "red";
context.moveTo(10,10);
context.lineTo(400,300);
context.stroke();

//Nova linha
context.beginPath();

context.lineWidth = 7;
context.strokeStyle = "blue";
context.fillStyle = "green";
context.moveTo(50,10);
context.lineTo(300,300);
context.lineTo(200,300);
context.closePath();
context.fill();
context.stroke();