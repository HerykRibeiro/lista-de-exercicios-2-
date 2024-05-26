let insiraNumero = document.querySelector("#coloqueNumero");
let btNumero = document.querySelector("#bNumberr");

function parImpar(){
    let valorUm = Number(coloqueNumero.value);

    if (valorUm % 2 == 0){
        alert("seu numero e par");

    }else
        alert("seu numero e impar");
}

bNumberr.onclick = function(){
    parImpar();}
