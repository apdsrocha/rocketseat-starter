/*1º exercício
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

2º exercício
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0 */

let btnCreate = document.createElement('button');
let btnDiv = document.querySelector('.btn-div');

let createBox = function() {
    let boxResults = document.querySelector('.box-results');
    let newBox = document.createElement('div');
    newBox.style.width = "100px";
    newBox.style.height = "100px";
    newBox.style.backgroundColor = "red";
    newBox.style.margin = "2%";
    newBox.onmouseover = function() {
        newBox.style.backgroundColor = getRandomColor();
    };
    boxResults.appendChild(newBox);
}

btnCreate.innerText = "Click to make a box, I guess";
btnCreate.addEventListener('click', createBox);

btnDiv.appendChild(btnCreate)

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }



/*3º exercício
A partir do seguinte vetor:
var nomes = ["Diego", "Gabriel", "Lucas"];
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Diego
● Gabriel
● Lucas*/

