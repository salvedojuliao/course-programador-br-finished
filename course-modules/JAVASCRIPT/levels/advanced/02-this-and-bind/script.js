// Bind é um método que toda função possui

function speakGeneric(){
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}


let cat = {
    sound: "Miau",
    speak: speakGeneric
}

// dog.speak();
// cat.speak();

// Eu posso dar um contexto para a função
let bindedFunction = speakGeneric.bind(cat)
bindedFunction();