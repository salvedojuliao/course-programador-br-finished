let usuarios = ["Adriano", "Marcia", "José"]

function inserirUsuario(nome, callback){
    setTimeout(() => {
        usuarios.push(nome); // São listados antes de meu nome ser inserido
        callback(); // Agora vai listar correto
    }, 1000) 

}

function listarUsuarios(){
    console.log(usuarios)
}

inserirUsuario("Júlio", listarUsuarios)



















// function ola(){
//     console.log("Olá")
// }

// function tchau(){
//     console.log("tchau")
// }


// function saudacao(s, nome){
//     s();
//     console.log(nome)
// }

// saudacao(tchau, "Igor")