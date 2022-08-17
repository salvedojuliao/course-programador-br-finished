let tela = document.getElementById("tela");
let context = tela.getContext("2d");

// context.fillStyle = "blue"; // Define a cor
// context.fillRect(10,10, 100, 200); // Quando de distancia no X e Y, depois largura e altura;


// context.strokeStyle = "red";
// context.strokeRect(10, 10, 100, 200);  


context.rect(10, 10, 100, 200);
context.fillStyle = "blue";
context.fill();
context.lineWidth = 5;
context.strokeStyle = "red";
context.stroke();
// Pelo q vi a ordem dos comandas aqui IMPORTA

context.clearRect(20,20, 30, 30); // Consigo cirar algo dentro do regângulo com esse método
