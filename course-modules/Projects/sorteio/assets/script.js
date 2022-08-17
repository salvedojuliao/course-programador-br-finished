let btnAdicionar = document.getElementById("adicionar");
let btnSortear = document.getElementById("sortear");
let btnLimpar = document.getElementById("limpar");
var lista = [];

// () => = function ()
btnAdicionar.addEventListener("click", () =>{
    let nome = document.getElementById("valorInput").value;
    let listaDeNomes = document.getElementById("listaDeNomes");
    let li = document.createElement("li");
    console.log(nome);
    if (verificaIgual(nome)){
        alert("Nome já contém na lista, digite um nome diferente");
        return;
    };
    li.innerHTML = nome;
    listaDeNomes.appendChild(li);
    // Tem um return aqui;
})

function verificaIgual(nome){
    const listaDeNomes = document.querySelectorAll("li");
    const mapedList = [...listaDeNomes].map(elemento => {
        return elemento.innerText;
    })
    return mapedList.includes(nome);
}


btnSortear.addEventListener("click", () =>{
    let listaNomes = document.querySelectorAll("li");
    let indexSorteado = sortearNumero(listaNomes.length);
    document.getElementById("nomeSortudo").innerText = listaNomes[indexSorteado].innerText;
});

btnLimpar.addEventListener("click", () => {
    let listaNomes = document.getElementById("listaDeNomes");
    listaNomes.innerHTML = "";
 
});


function sortearNumero(totalPessoas){
    return Math.floor(Math.random() * totalPessoas);
}



//  // console.log(listaNomes[indexSorteado].innerText);
//  for (let i = 0; i < listaNomes.length; i++){
//     listaNomes[i].classList.add("item");
// }
   // let arrayNomes = document.querySelectorAll("li");
    // arrayNomes.forEach(e =>{
    //     e.remove();
    // })
    // let listaNomes = document.querySelectorAll("li");
    // console.log(listaNomes);
    // for (let i = 0; i < listaNomes.length; i++){
    //     listaNomes[i].remove();
    // }
    // arrayNomes.forEach(e =>{
    //     e.remove();
    // })
    // console.log(listaNomes);