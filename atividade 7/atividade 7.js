let primeiroNumero = document.querySelector("#primNumero");
let segundoNumero = document.querySelector("#segNumero");
let btMaiorMenor = document.querySelector("#btNumeros");

function statusNumeros(){
    let v1 = Number(primNumero.value);
    let v2 = Number(segNumero.value);

    if (v1 > v2){
        alert("O primeiro numero e maior")
    }else if (v1 == v2)
        alert("O numero um e  o numero dois sao iguais")
    else
        alert("O primeiro numero e menor que o segundo");
}

btNumeros.onclick = function(){
    statusNumeros();
}