//Usando o 'data' fica mais fácil a manipulação dos dados/
let lista = document.getElementById("lista");
lista.dataset.n = '4';
let num = parseInt(lista.dataset.n);
// O 'n' ai é um propriedade do dataset
//ATENÇÃO, O dataset transforma o atributo em uma string!
// Por isso usamos o parseInt p/ converter p/ número
// let id = parseInt(lista.getAttribute("data-id"));


console.log(lista.dataset.n);


let conteudo = "";

for(let i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>";
}
lista.innerHTML = conteudo;