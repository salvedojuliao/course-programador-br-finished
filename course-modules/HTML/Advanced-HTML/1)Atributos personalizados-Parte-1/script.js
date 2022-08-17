let img1 = document.getElementById("img1");

/* Jeito 1:
img1.addEventListener("click", function(){
    img1.src = "./imgs/img2.jpg";

}) */

/* Jeito 2:
img1.addEventListener("click", function(){
    img1.setAttribute("src",  "./imgs/img2.jpg");
    // setAttribute É um método que eu posso escolher um atributo e colocar ele ali dentro;
}) */

img1.addEventListener("click", function(){
    let lastImage = img1.getAttribute("src");
    img1.setAttribute("src",  "./imgs/img2.jpg");
    console.log(lastImage);
    img1.setAttribute("cor", "vermelho"); // Criei um atributo que não existe
}) 

// É importante porque eu posso pegar atributos que não existem;
// Eles permitem que eu consiga criar e acessar atributos;



let lista = document.getElementById("lista");
let num = parseInt(lista.getAttribute("num"));

let conteudo = "";

for(let i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;