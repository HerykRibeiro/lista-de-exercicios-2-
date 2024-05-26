let numPessoas = document.querySelector("#numPessoas");
let btVerificar = document.querySelector("#btVerificar");
let h3VlrTotal = document.querySelector("#h3VlrTotal");


function calcularingredients(){
    valorDePessoas = Number (numPessoas.value)
    
    let ovosP =  valorDePessoas * 2;
    let queijoP = valorDePessoas * 50;

    let totOvos = numPessoas * ovosP
    let totQueijo = numPessoas * queijoP

    h3VlrTotal.textContent = "o total de ovos e gramas de queijo sao " + (ovosP + queijoP)
}


btVerificar.onclick = function(){
    calcularingredients()
}


