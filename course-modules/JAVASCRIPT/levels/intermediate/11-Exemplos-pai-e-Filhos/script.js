// window.onload = function(){
//     let d1 = document.getElementById("d1");
//     console.log(d1.children[0]); // Eu consigo pegar os filhos do elemento
//     let h1 = d1.children[0]
//     let pai = h1.parentElement //É a própria div
//     console.log(pai)
// }

window.onload = function (){
    let h1 = document.getElementsByTagName("h1")

for (let h of h1){
    console.log(h)
    h.addEventListener("click", qualEOPai)
}

function qualEOPai(e){
    let t = e.target;
    console.log(t.parentElement)
    console.log(t)
}

}
