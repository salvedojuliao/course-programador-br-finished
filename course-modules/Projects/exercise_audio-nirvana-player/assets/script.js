let audioNirvana = document.getElementById("audioNirvana");
let diminuiVel =  document.getElementById("diminuiVel");
let pausa =  document.getElementById("pausa");
let play = document.getElementById("play");
let aumentaVel =  document.getElementById("aumentaVel");


diminuiVel.addEventListener("click", () =>{
    audioNirvana.playbackRate -= 0.1;
})

pausa.addEventListener("click", () =>{
    audioNirvana.pause();
})

play.addEventListener("click", () =>{
    audioNirvana.play();
})

aumentaVel.addEventListener("click", () =>{
    audioNirvana.playbackRate += 0.1;
})








