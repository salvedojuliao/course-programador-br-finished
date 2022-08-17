let tela = document.getElementById("tela");
let context = tela.getContext("2d");


// context.arc(x,y, raio, inicio, fim); //arc é o método
// os argumentos são nessa ordem: distanciamento na horizontal, distanciamento vertical, raio, angulo que começa, angulo q termina

let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;  // Tem q ser em radianos
let fim = 2 * Math.PI;


context.beginPath();
context.strokeStyle = "red";
context.fillStyle = "blue";

context.arc(x,y, raio, inicio, fim); // Cada parte de um círculo

context.fill();
context.stroke();