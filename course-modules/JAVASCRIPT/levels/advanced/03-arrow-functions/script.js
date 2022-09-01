let dobro = (x) => {
    console.log(2*x)
}

// Se a arrow function tiver apenas um argumento, eu não preciso
// dos parênteses
let triplo = x => (3 * x) // Se tiver só um return, não preciso escrever ele

dobro(7)
console.log(triplo(3))

/*
Cuidado, pois uma arrow function não entende muito bem o que é o this


*/ 