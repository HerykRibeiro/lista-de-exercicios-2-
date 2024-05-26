let notaBimestre = document.querySelector("#nBimestre");
let btNota = document.querySelector("#bNotas");

function mediaBim(){
    let valorUm = Number(nBimestre.value);

    if(valorUm >= 6){
        alert("Aprovado!")
    }

    else if(valorUm >=4 && valorUm <6){
        alert("faz a prova la");

    }else
        alert("Reprovado!");

}   

bNotas.onclick = function(){
    mediaBim();
}