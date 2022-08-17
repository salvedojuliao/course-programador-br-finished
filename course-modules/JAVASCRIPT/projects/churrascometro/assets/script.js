// QUALQUER PROGRAMA QUE EU FIZER EU PRECISO TER DEFINITIVAMENTE O QUÊ TEREI DE FAZER
// Neste caso a regra é essa:
// Carne - 400gr por pessoa (Se foir +de 6 horas - é 650gr por pessoa);
// Cerveja - 1200ml por Pessoa (Se for +6 horas - 2000ml é por pessoa);
// Refrigerante/agua - 1000ml por pessoa (Se for +6 horas é 1500ml é por pessoa);
// Crianças valem por 0,5 (Metade)

// Recebendo todos valores:
let inputAdult = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

//Pegando o resultado
let resultado = document.getElementById("resultado");

function carnePorPessoa(duracao){
    if (duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if (duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if (duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}


// Quando clicar em Calcular, um função será executada
function calcular(){
    resultado.style.display = "block";
    console.log("Calculando...");
    let adultos = inputAdult.value;
    let criancas = inputCriancas.value; 
    let duracao = inputDuracao.value;
  
    let carne = carnePorPessoa(duracao);
    let cerveja = cervejaPorPessoa(duracao);
    let bebidas = bebidasPorPessoa(duracao);

    let qtdTotalCarne = carne * adultos + (carne/2) * criancas;
    let qtdTotalCerveja = cerveja * adultos; // Criança não bebe cerveja
    let qtdTotalBebidas = bebidas * adultos + (bebidas/2) * criancas;

    // resultado.innerHTML = `<h3>Resultado: </h3>`;
    // resultado.innerHTML += `<p>${qtdTotalCarne/1000}kl de Carne</p>`;
    // resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cervejas</p>`;  // Eu coloco o += por que assim ele soma!
    // resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Pet's de 2l de Bebidas</p>`;

    resultado.innerHTML = 
    `<h3>Resultado: </h3>
    <p>${qtdTotalCarne/1000}kl de Carne</p>
    <p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cervejas</p>
    <p>${Math.ceil(qtdTotalBebidas/2000)} Pet's de 2l de Bebidas</p>`;
}


