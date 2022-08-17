// Pegando o que vai aparecer
var img = document.getElementById('img');
var nomeDoAluno = document.getElementById('nomeDoAluno');
var msgAluno = document.getElementById('msgAluno');
var notas = [3];
function media(n1, n2, n3){
    return n1 + n2 + n3;
}




function carregar(){
    // notas[0] = parseFloat(document.getElementById('nBio').value);
    // notas[1] = parseFloat(document.getElementById('nMat').value);
    // notas[2] = parseFloat(document.getElementById('nPort').value); 
    // var mediaAlunos = media(notas[0], notas[1], notas[2])
    // console.log(mediaAlunos)
    let alunoNotas = {
        nBio: parseFloat(document.getElementById('nBio').value),
        nMat: parseFloat(document.getElementById('nMat').value),
        nPort: parseFloat(document.getElementById('nPort').value),
        test: alunoNotas.nBio,
    //  media: media(this.nBio.value, this.nMat.value, this.nPort.value),
     }
    console.log(alunoNotas.test);
    
}

// img.src = 'assets/imgs/Happy.png';
// img.src = 'assets/imgs/Cry.png';
function limpar(){
    let alunoData = [3];
    for (i = 0; i<= 3; i++){
        alunoData[i] = document.getElementsByClassName("alunoData")[i];
        alunoData[i].value = "";
    }
}






// Outros códigos:




// function carregar(){
//     let nome = document.getElementById('nome').value;
//     notas[0] = Number.parseFloat(document.getElementById('nBio').value);
//     notas[1] = Number.parseFloat(document.getElementById('nMat').value);
//     notas[2] = Number.parseFloat(document.getElementById('nPort').value);
//     var pode = true;
//     var cont = 0;

//     while (pode == true){
//         for (i = 0; i <= notas.length; i++){
//             if (notas[i] > 10 || notas[i] < 0){
//                cont++;
//             } 
//         } 
//         if(cont != 0){
//             alert("Digite números somente entre 0 e 10");
//             pode = false;
//         }
//     }

//     var mediaAlunoX = media(notas[0], notas[1], notas[2]);
//     console.log(mediaAlunoX);
// }      

    // if (mediaAlunoX >= 7 && mediaAlunoX <= 10){
    //     img.src = 'assets/imgs/Happy.png'; 
    //     nomeDoAluno.innerText = `Parabéns, ${nome}!`;
    //     msgAluno.innerHTML = `Você foi <b>aprovado(a)</b> com uma <b> média </b> de: <b> ${media.toFixed(2)} </b>`
    // } else if (mediaAlunoX < 7 && mediaAlunoX >= 0){
    //     img.src = 'assets/imgs/Cry.png';
    //     nomeDoAluno.innerText = `Poxa, não dessa vez ${nome}...`;
    //     msgAluno.innerHTML = `Você foi <b>reprovado(a),</b> sua média foi <b> ${mediaAlunoX.toFixed(2)} </b>`
    // }
   

 // Tentei usar Objeto mas não funcionou
    // let aluno =  {
    //         nome: document.getElementById('nome').value,
    //         nBio: parseFloat(document.getElementById('nBio').value),
    //         nMat: parseFloat(document.getElementById('nMat').value),
    //         nPort: parseFloat(document.getElementById('nPort').value),
    //         media: (this.nBio + this.nMat + this.nPort) / 3,
    //         // media: function media(){
    //         //     return (this.nBio + this.nMat + this.nPort) /3;
    //         // }
    // }



    // function media(n1, n2, n3){
    //     return (n1 + n2 + n3) /3;
    // }
    
// function carregar(){
//     // img.src = 'assets/imgs/Happy.png';
//     // nomeDoAluno.innerHTML = "TESTE";
//     // msgAluno.innerHTML = "teste2";
//     // let nome = document.querySelector('#nome').value;
//     let nome = document.getElementById('nome').value;
//     let nBio = parseFloat(document.getElementById('bio').value);
//     let nMat = parseFloat(document.getElementById('mat').value);
//     let nPort = parseFloat(document.getElementById('port').value)
    
//     while (nBio || nMat || nPort > 10 || nBio || nMat || nPort < 0){
//         alert('Digite uma nota entre 0 e 10');
//         break;
//     }

//     // Fazendo o cálculo
//     let media = (nBio + nMat + nPort) / 3;
   
//     // Processando mensagem

//     if (media >= 7){
//         img.src = 'assets/imgs/Happy.png';
//         nomeDoAluno.innerHTML = `Parabéns!, ${nome}`;
//         msgAluno.innerHTML = `Você passou com ${media} de média`;
//     } else if (media < 7){
//         img.src = 'assets/imgs/Happy.png';
//         nomeDoAluno.innerHTML = `Poxa, ${nome}, não foi dessa vez :/=`;
//         msgAluno.innerHTML = `Você passou com ${media} de média`;
//     }
    
//     console.log(" Nome: " + nome + " Bio: " +  nBio + " Mat: " + nMat + " Port: " + nPort + " " + media);
   
//     // console.log(media1())
// } 



// A ideia e adicionar aqui futuramente TODO MUNDO!
// var alunosAprovados = [];

// Calculando a media
// function carregar (){
//     alunosAprovados[0] =  {
//         nome:  document.getElementById('nome').value,
//         nBio: parseFloat(document.getElementById('bio').value),
//         nMat: parseFloat(document.getElementById('mat').value),
//         nPort: parseFloat(document.getElementById('port').value),
//         media: nBio + nMat + nPort,
//     }
//     console.log(alunosAprovados[0]);
// }


// var pode = true;
// var cont = 0;

// while (pode == true){
//     for (i = 0; i <= notas.length; i++){
//         if (notas[i] > 10 || notas[i] < 0){
//            cont++;
//         } 
//     } 
//     if(cont != 0){
//         alert("Digite números somente entre 0 e 10");
//         pode = false;
//     }
// }


// let nome = document.getElementById('nome').value;
//     notas[0] = Number.parseFloat(document.getElementById('nBio').value);
//     notas[1] = Number.parseFloat(document.getElementById('nMat').value);
//     notas[2] = Number.parseFloat(document.getElementById('nPort').value);
//     var pode = true;
//     var cont = 0;

//     while (pode == true){
//         for (i = 0; i <= notas.length; i++){
//             if (notas[i] > 10 || notas[i] < 0){
//                cont++;
//             } 
//         } 
//         if(cont != 0){
//             alert("Digite números somente entre 0 e 10");
//             pode = false;
//         }
//     }

//     var mediaAlunoX = media(notas[0], notas[1], notas[2]);
//     console.log(mediaAlunoX);