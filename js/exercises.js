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

let nameList = document.querySelector('.name-list');
let nomes = ["Diego", "Gabriel", "Lucas"];
let newUl = document.createElement('ul');
nomes.map(function(item) {
    let newListItem = document.createElement('li');
    newListItem.innerText = item;
    newUl.appendChild(newListItem)
})
nameList.appendChild(newUl);

/*4º exercício
Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique */

let newInput = document.createElement('input');
newInput.type = 'text';
newInput.name = 'nome';

let newBtn = document.createElement('button');
newBtn.innerText = 'Adicionar novos itens';
newBtn.onclick = function() {
    let inputValue = document.querySelector('input');
    let createItem = document.createElement('li');
    createItem.innerText = inputValue.value;
    newUl.appendChild(createItem);
    inputValue.value = '';
}

nameList.append(newInput);
nameList.append(newBtn)
