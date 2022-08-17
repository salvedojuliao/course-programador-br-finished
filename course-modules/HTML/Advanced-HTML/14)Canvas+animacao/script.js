let tela = document.getElementById("tela");
let context = tela.getContext("2d");


// context.arc(x,y, raio, inicio, fim); //arc é o método
// os argumentos são nessa ordem: distanciamento na horizontal, distanciamento vertical, raio, angulo que começa, angulo q termina


let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio:  0,  // Tem q ser em radianos
    fim: 0,
    antiHorario: true,
}

function drawCircle(c){
    // Para evitar aquele 'bug' debaixo do círculo, basta criar uma tela por a cada desenho
    context.beginPath();
    context.rect(0, 0, 500, 500);
    context.fillStyle = "beige";
    context.fill();

    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    // context.arc(c.x, c.y, c.raio, c.inicio, c.fim);
    context.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHorario);//Mais um valor do context.arc
    context.fill();
    context.stroke();
}


setInterval(function(){
    if(circle.fim < 2* Math.PI){
        circle.fim+=0.3;
        circle.x += 10;
    }
    drawCircle(circle);
}, 50)