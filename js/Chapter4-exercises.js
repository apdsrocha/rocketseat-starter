/*1º exercício - Modulo 4
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
function checaIdade(idade) {
 // Retornar uma promise
}
checaIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });*/

 function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        idade >= 18 ?
            resolve('Maior que 18') :
            reject('Menor que 18')
    })
   }
   
   checaIdade(12)
    .then(function(response) {
    setTimeout(() => console.log(response), 2000);
    })
    .catch(function(error) {
    setTimeout(() => console.log(error), 2000);
    })


/*2º exercício
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>*/

let inputBox = document.querySelector('input[name=search-name]');
let btnSearch = document.querySelector('.btn-search');
let searchList = document.querySelector('.search-list');
btnSearch.addEventListener('click', addToList);
inputBox.addEventListener('input', function() {
    if (inputBox.value.length == 0) {
        while(searchList.firstChild) {
            searchList.removeChild(searchList.firstChild)};
    }
})

function addToList() {
    let responsePromise = function() {
        return new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', `http://api.github.com/users/${inputBox.value}/repos`)
            xhr.send(null);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject('Erro na requisição')
                    }
                }
            }
        });
    }
    responsePromise()
        .then(function(response) {
            response.map(function(item) {
                let repoItem = document.createElement('li');
                repoItem.innerText = item.name;
                searchList.appendChild(repoItem);
            })
        })
        .catch(function(error) {
            let errorMsg = document.createElement('li');
            errorMsg.innerText = "User not found";
            searchList.appendChild(errorMsg)
        });
};