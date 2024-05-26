let nmr1 = document.querySelector("#nmr1");
let nmr2 = document.querySelector("#nmr2");
let btVerificar = document.querySelector("#btVerificar");
let vlrTotal = document.querySelector("#vlrTotal");

function fazerCalculos(){
    let valor1 = Number (nmr1.value);
    let valor2 = Number (nmr2.value);


    let soma = valor1 + valor2
    alert(" a soma dos valores e" + soma);

    let divisao = valor1 / valor2
    alert(" a divisao dos valores e" + divisao)
    
    let multiplicao = valor1 * valor2
    alert("a multiplicacao dos valores e" + multiplicao)

    let subtracao = valor1 - valor2
    alert(" a subtracao dos valores e" + subtracao)

   
}

btVerificar.onclick = function(){
    fazerCalculos()
}