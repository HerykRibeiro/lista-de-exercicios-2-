let refrigeranteQuantia = document.querySelector("#refrigeranteQuantia");
let btresults = document.querySelector("#btresults");
let h3sabore = document.querySelector("#h3sabore");
let h3precos = document.querySelector("#h3precos");

function saboresEscolhidos(){
    let primeiroSabor = document.querySelector("#primSabor").value;
    let segundoSabor = document.querySelector("#segSabor").value;
    let terceiroSabor = document.querySelector("#tercSabor").value;
    let quartoSabor = document.querySelector("#quartSabor").value;

    let sabores = primSabor + ", " + segSabor + ", " + tercSabor + ", " + quartSabor;
    h3sabor.textContent = "Os sabores escolhidos foram : " + sabores;
}

function valorFinal(){
    let valorPizzaz = 12;
    let valorBebidas = 7 * (refrigeranteQuantia.value);
    let resultadoDaCompra = (valorPizzaz* 4) + valorBebidas;
    h3preco.textContent = "O total em dinheiro e : " + resultadoDaCompra;
}



btresults.onclick = function(){
    sabores();
    valorFinal();
}