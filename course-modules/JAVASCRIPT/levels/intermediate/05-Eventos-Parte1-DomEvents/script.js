function h1Click(){
    console.log("Excutando a função h1click");
}

function changeH1(){
    let h1 = document.getElementsByTagName('h1')[0]; 
    console.log(h1);
    //Tem esse [0] porque ele pega um array de h1 (..getElementS), tem esse 'S' no final
}

function changeH1Tittle(){
    let input = document.getElementById("texto"); // Eu poderia colocar .value aqui no final
    let h1 = document.getElementsByClassName('Teste')[0];
    h1.innerText = input.value;
}


function changeH1withThis(input){
    let newH1 = document.getElementsByClassName('Teste')[0];
    newH1.innerText = input.value;
}

function hideH1(){
    let onclickH1 = document.getElementsByTagName('h1')[0]; 
    onclickH1.style.display = "none";

}