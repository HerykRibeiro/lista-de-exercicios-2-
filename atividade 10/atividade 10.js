let vVendas = document.querySelector("#vVenda");
let metMinima = document.querySelector("#metMinima");
let metFinal = document.querySelector("#metFinal");
let btResults = document.querySelector("#btResults");
let h3minimas = document.querySelector("#h3minimas");
let h3finais = document.querySelector("#h3finais");
let h3results = document.querySelector("#h3results")

function metAtingida(){
    if (parseFloat(vVenda) >= parseFloat(metMinima)){
        alert("o vendedor atingiu a meta");
    }else
        alert("nao atingida");
}

function metMaxima(){
    if (parseFloat(vVendas) >= parseFloat(metFinal)){
        alert("A meta foi atingida")
    }else
        alert("A meta nao foi atingida");
}



function porcentagens(){
    let porceMinima = (parseFloat(vVendas / metMinima)) * 100;
    let porceMeta = (parseFloat(vVendas / metFinal)) * 100;
    let results1 = "A porcentagem  da meta mínima e : " + porceMinima;
    let results2 = "A porcentagem  da meta e de: " + porceMeta;
    h3results.textContent = results1 + ", " + results2;
}

btResults.onclick = function(){
    let vVendas = document.querySelector("#vVenda").value;
    let metMinima = document.querySelector("#metMinima").value;
    let metFinal = document.querySelector("#metFinal").value;
    metAtingida();
    metMaxima();
    porcentagens();
}