/* 
A ideia é acessar qualquer elmento por meio de um método do document.


*/

let p1 = document.getElementById("p1");
// O element vem no singular porque só se pode ter um ID
console.log(p1);

let paragrafos = document.getElementsByClassName("paragrafo");
// O element vem no plural porque classe pode ter mais de uma
console.log(paragrafos);

// Imprimindo cada parágrafo
for(let p of paragrafos){
    console.log(p);
}


// Pegando todos os H1
let th = document.getElementsByTagName("h1");
console.log(th);

// Pegando todos os Parágrafos
let tp = document.getElementsByTagName('p');
console.log(tp);