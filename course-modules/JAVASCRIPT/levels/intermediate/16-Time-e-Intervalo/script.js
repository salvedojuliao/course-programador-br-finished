/* 

Timer é quando eu tenho uma função e eu quero que ocorra um Delay na execução dessa função
Existe uma função no window chamada setTimeout()
Ele recebe dois argumentos:
1) O que eu quero fazer
2) O tempo de delay (É em milesegundo, logo se eu quero 1 segundo eu coloco 1000)

*/

//------------------------------------------\\

// function mudarCor(){
//     let h = document.getElementsByTagName("h1")[0];
//     h.style.color = "blue";
// }


// function mudarTexto(){
//     let h = document.getElementsByTagName("h1")[0];
//     h.innerHTML = "Novo título";
//     setTimeout(mudarCor, 1000) // Depois que mudar o conteúdo, ele vai demorar um segundo e vai ficar azul;
// }


//------------------------------------------\\

// Existe outro tipo de intervalo, caso eu queira que ela seja repetida de acordo com um intervalo:
// var numero = 0;
// function atualizarTexto(){
//     let h = document.getElementsByTagName("h1")[0];
//     h.innerHTML += " " + numero;
//     numero++;
// }


// function mudarTexto(){
//     setInterval(atualizarTexto, 3000);
// }

//------------------------------------------\\

//Outro forma:
var numero = 0;
var interval;
// var timer;
function atualizarTexto(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += " " + numero;
    numero++;
}

function iniciar(){
    interval = setInterval(atualizarTexto, 1000);
    // timer = setTimeout(atualizarTexto, 1000);
}

function parar(){
    clearInterval(interval);
    // clearTimeout(timer);
}

//Existe uma função chamada 'clearinterval()'
/* 
Existe uma função chamada 'clearTimeOut(interval)' 
- É usado para cancelar/parar após algo já ter começado!
*/