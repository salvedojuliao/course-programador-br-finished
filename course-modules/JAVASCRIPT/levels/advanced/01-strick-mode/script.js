// Posso decidir escolher a palavrar 'var' p/ declarar ou não;
// Contudo, dentro de uma função e ele só exisiste lá dentro (escopo LOCAL)
// Se eu não criar a variavel e apenas digitar ela lá, o js procura fora e se não tiver, ele cria (glocal é quando está no nível do programa)

"use strict" // É quando o js não cria automaticamente a variável
// Ele faz com que eu declare cada variável que eu crio
function imprimir(){
    x = 3 // sem declarar var
    var y = 8; // declarando var
    console.log(x)
    console.log(y)
}

imprimir()
console.log(x)
console.log(y) // Esse dá errado pois o y só existe dentro da função
console.log(window)

