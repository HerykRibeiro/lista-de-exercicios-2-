let quantosAlunos = document.querySelector("#quantosAlunos");
let quantasSalas = document.querySelector("#quantasSalas");
let btQuantos = document.querySelector("#btQuantos");
let resultado1= document.querySelector("#resultado1");
let resultado2 = document.querySelector("#resultado2");

function salaDeAlunos(){
    let numAlunos = Number(quantosAlunos.value);
    let numSalas = Number(quantasSalas.value);
    let resultado = (numAlunos / numSalas);
    resultado1.textContent = ("O numero de alunos por sala sao " + resultado);

    let semTurma = (numAlunos % numSalas);
    resultado2.textContent = ("Os alunos sem turma sao " + semTurma);
}

btQuantos.onclick = function(){
    salaDeAlunos();
}