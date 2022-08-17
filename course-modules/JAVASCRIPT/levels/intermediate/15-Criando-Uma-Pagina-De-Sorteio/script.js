// A idea é gerar um numero sorteado
// Lembrando que o Math.random gera um número de 0 a 0.999999999 (Não gera 1), por isso eu multiplico ele
function sortear1(){
    let numeroDePessoas = 100; // Digamos que 100 pessoas compraram minha rifa
    //Gerando o número sorteado
    let numeroSorteado = Math.round(Math.random() * numeroDePessoas);
    document.getElementById("display").innerHTML = numeroSorteado;
}

// Agora usando um Array de nomes

let pessoasQueCompraram = ["Igor", "Julio", "Gabi", "Vanessa", "Viviane"];

function sortear2(){
    let numeroDePessoas = pessoasQueCompraram.length;
    //É o tamanho do array o numero de pessoas, neste caso 4, pois é do 0: 0, 1, 2, 3, 4 (5 elementos)
    // Por isso na hora de usar o random, é importante usar o Math.floor(Vai pegar o número anterior)
    // Se o Array tem 5 elementos, o Math.floor vai pegar apenas 4 (A lógica se aplica a outro valores tmb)
    let numeroSorteado = Math.floor(Math.random() * numeroDePessoas);
    document.getElementById("display").innerHTML = pessoasQueCompraram[numeroSorteado];
    // o numeroSorteado é o index do array pessoasQueCompraram

}