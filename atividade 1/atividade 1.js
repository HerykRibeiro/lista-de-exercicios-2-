let valDolar = document.querySelector("#valDolar");
let btVerificar = document.querySelector("#btVerificar");
let   h3Resultadoo = document.querySelector("#h3Resultadoo");

function reajusteDolar(){
    let valor1 = Number (valDolar.value);

    let reajuste1 = valor1 * 0.01


    let reajuste2 = valor1 * 0.02


    let reajuste5 = valor1 * 0.05

    
    let reajuste10 = valor1 * 0.10

    h3Resultadoo.textContent = reajuste1 + valor1
} 

btVerificar.onclick = function(){
    reajusteDolar()
}