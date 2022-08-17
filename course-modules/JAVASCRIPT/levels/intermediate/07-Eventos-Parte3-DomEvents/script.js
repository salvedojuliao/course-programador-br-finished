// Utilizando o DOM no prórpio JS
let t = document.getElementById('titulo');
// t.onclick = mudarText;

t.addEventListener("click", mudarText)
// Quando eu clicar no emento, ele vai executar o mudarText
// EU podeira usar mouseover/mouseout também:
t.addEventListener("mouseout", mouseout)

function mudarText(){
    this.innerHTML = 'Novo Texto';
    // o This é automaticamente o objeto que está executando o onblick
}


function mouseout(){
    this.innerHTML = "Mouse fora do element";
}