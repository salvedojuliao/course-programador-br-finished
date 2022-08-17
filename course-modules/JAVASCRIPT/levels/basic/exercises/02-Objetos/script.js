function criarAluno(nome, n1, n2){
    nome = document.getElementById("nome").value;
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    var conceito = "";
    var msg = document.getElementById("msg");
    var aluno =  {
        nome: nome,
        n1: n1,
        n2: n2,
        media: (n1 + n2) / 2, // media: calculo(aluno.n1, aluno.n2),
    }
   

    if (n1 > 10 || n1 < 0 || n2 > 10 || n2 < 0){
        alert("Digite número entre 0 e 10");
    }else{
        if (aluno.media >= 7 && aluno.media <= 10){
            conceito = "Aprovado";
            
        }else if(aluno.media >= 0 && aluno.media < 7){
            conceito = "Reprovado";   
        }
        msg.innerHTML = ` <b> REGISTRADO COM SUCESSO </b> <br> Aluno: ${aluno.nome} <br> Nota 1: ${aluno.n1} <br> Nota 2: ${aluno.n2} <br> Media: ${aluno.media} <br> O aluno está ${conceito} `;
    }
}
    


  















    























// function media(){
//     let n1 = parseFloat(document.getElementById("n1").value); // Peguei o valor do input com esse ID;
//     let n2 = parseFloat(document.getElementById("n2").value); // Peguei o valor do input com esse ID;;
//     let media = (n1 + n2)/2;
//     var conceito = "";


//     if (media >= 7 && media < 10){
//         conceito = "Bom";
//     } else if (media == 10){
//         conceito = "Ótimo";
//     } else if (media < 7 && media >= 0){
//         conceito = "Regular";
//     }


    // if (media >= 7 && media < 10)
    //     conceito = "Bom";
    //         else if (media == 10)
    //         conceito = "Ótimo";
    //             else if (media < 7 && media >= 0)
    //             conceito = "Regular";
    // Só vai para a direita se ESTIVER UM DENTRO DO OUTRO!

    // NUNCA USE O IF SEM CHAVES!!!!
        
    // alert("As notas são " + n1 + " e " + n2);
    // alert("\nA média é " + media);
    
    // switch(conceito){

    //     case ("Bom"):
    //         alert("Bom! Parabéns, Aprovado! Media " + media) 
    //         break;

    //     case ("Ótimo"):
    //         alert("Ótimo! Parabéns, Aprovado! Media " + media);
    //         break;

    //     case ("Regular"):
    //         alert("Reprovado, média " + media);
    //         break;

    //     default:
    //         alert("Preencha os dados corretamente");
    //         break;
    //     // Demorei 20 minutos para ver que era o Break que estava faltando;

    // }








