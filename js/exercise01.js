/*1º exercício
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.*/

let btnCreate = document.createElement('button');
let btnDiv = document.querySelector('.btn-div');

let createBox = function() {
    let boxResults = document.querySelector('.box-results');
    let newBox = document.createElement('div');
    newBox.style.width = "100px";
    newBox.style.height = "100px";
    newBox.style.backgroundColor = "red";
    newBox.style.margin = "2%"
    boxResults.appendChild(newBox);
}

btnCreate.innerText = "Click to make a box, I guess";
btnCreate.addEventListener('click', createBox);

btnDiv.appendChild(btnCreate)

