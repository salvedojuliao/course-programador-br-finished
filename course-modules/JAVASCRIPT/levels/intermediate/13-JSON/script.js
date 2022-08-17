/* 
Existe um tipo de um 'tipo' de uma função chamada JSON
JSON = Representação de um objeto
JSON = Javascript Object Notation (Notação de um Objeto JavaScript)
As vezes teremos que gravar um objeto JS em algum lugar, mas n poderemos passar o objeto, e sim uma
String que represente o Objeto, e essa função ajuda a fazer isso
Ela tem dois métodos:

1)parse
Pega uma string e transforma num objeto JSON

2)stringfy
Pega um objeto JSON e transforma numa string

// Colocando em prática:

*/

// Com com JSON.stringfy
let a = {
    nome: 'igor',
    nota: 8.5,
}
//Transformando:
console.log("Variável 'a' antes do (JSON.stringfy(a)): ");
console.log(a);

let b = JSON.stringify(a);
console.log("\nVariável 'a' depois do (JSON.stringfy(a) na variável 'b'): ");
console.log(b);

// Agora com JSON.parse
let a2 = '{"nome": "fabio", "nota": 7.8}';// Tem que usar as aspas duplas dentro
console.log("\nVariável 'a2' antes do (JSON.parse(a2)):");
console.log(a2);

//Transformando:
let b2 = JSON.parse(a2);
console.log("\nVariável 'a2' depis do (JSON.parse(a2) na variável 'b2') => SEM ERRO::");
console.log(b2);


//Daria errado se fosse assim:
// let a2 = "(nome: 'fabio', nota: 7.8)";
// Vai dar erro porque normalmente a gente não trabalha dessa forma com JSON, pois será algo que virá do servidor
// Estar sem as aspas duplas dentrp

