/* Até então tudo se perdia quando eu atualizasse a página, agora é possível armazenar as informações mesmo
 Se eu fechar o navegador 

---------------------------------

O window possui três métodos importante, e por ser window, não precisa por ele antes dos métodos
Ou seja, aqui embaixo só está window.nomeDoMéotodo para fins didáticos

window.localStorage.setItem()
// Grave um arquivo no navegador e eu posso usar esse dado depois
// Para gravar, preciso de dois argumetnos (CHAVE e VALOR);

window.localStorage.getItem()
// É a forma que eu tenho de acessar na memória do navegador o dado gravado com o .setItem()

window.localStorage.removeItem()
// Ele acessa a memória do navaador e removo o item armazenado.

window.localStorage.clear()
// Apaga tudo que está dentro da memória

*/

// localStorage.setItem("nome", "Julio"); (Executei ele e depois coloquei na memória)
// let n = localStorage.getItem("nome") // Eu pego pela chave
// localStorage.removeItem("nome");
// console.log(n);

// Um possível uso para isso:
function atualizar(element){
    let valor = element.value;
    console.log(valor);

    let h1 = document.getElementById('nome');
    h1.innerHTML = valor;

    //Toda vez que eu atualiar o valor, vou guardar:
    localStorage.setItem("nome", valor);
}

// Agora por fora eu executo outra função (Para guardar as alterações):

onload = function(){
    let nome = localStorage.getItem("nome"); // Eu pego pela chave
    let h1 = document.getElementById('nome');
    h1.innerHTML = nome;
    // Toda vez que eu atualizar a página, o valor armazenado na chave 'nome' é adicionado no h1
}


// Armazenando outros tipos de dados agora:

localStorage.setItem("numero", 5);
let numero = localStorage.getItem("numero");
console.log(numero);
// Vai aparecer preto, ou seja, será um string
// Ou seja no LocalStorage é possível só salvar apenas String e é por isso que existe o JSON! 
// Posso trasformar um objeto do js numa String

let aluno = {nome: "Julio", n1: 10}; // Objeto
localStorage.setItem("aluno", JSON.stringify(aluno)); //Guarda como string
// Aqui teoricamente eu já salvei o aluno dentro da chave aluno (como string)

let alunoArmazenado = localStorage.getItem("aluno");
console.log(alunoArmazenado); // Vai aparecer em forma de String, logo eu uso o JSON:
console.log(JSON.parse(alunoArmazenado))
// Imporante, isso só funciona dentro do mesmo domínio!



 