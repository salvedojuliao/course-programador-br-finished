function f(){
    console.log("Teste F com Onclick na Tag"),
    console.log(this); // Aqui o this é o window
}

function f1(){
    console.log("Teste f1 com addEventListener")
    console.log(this); // Aqui o this é o proprio elemento
}

function comArgumento(e){
    console.log("Teste f1 com addEventListener")
    console.log(e.target); // O elemento aqui é o evento do addEventListener
}


window.onload = function(){ // window.onload é a mesma coisa que Colocar onload no body
    let h1 = document.getElementsByTagName('h1')[0];
    h1.addEventListener("click", f1); // Deixando sem os parêntese neste caso é um referência à função
    // No addEventListener eu adiciono o evento que eu quero capturar/ver/ouvir(Neste caso é o click) 
    //e depois a função
    // Seu deixar o f1 com parênteses, o js vai achar que naquele momento eu vou executar aquela função
    h1.addEventListener("click", comArgumento);
}

