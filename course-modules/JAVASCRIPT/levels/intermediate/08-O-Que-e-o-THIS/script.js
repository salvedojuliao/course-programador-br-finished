let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');

t1.onclick = colocarEmMaiusculo;
t2.onclick = colocarEmMaiusculo;

function colocarEmMaiusculo(){
    this.innerHTML = this.innerHTML.toUpperCase();
} // Economiza linah de código e variável

// Se o this ficaria assim:
// function colocarEmMaiusculo(){
//     let t = document.getElementById('t1');
//     t.innerHTML = t.innerHTML.toUpperCase();
// } // Mas o título 2 não funcionaria



/*

É importante eu tentar utilizar o THIS porque ele é um propriedade muito importante!

*/ 