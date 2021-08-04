/* //Function Padrão //
function sum (a,b) {
    return a + b
}

console.log("Função Padrão: " + sum(2,2))
const sum1 = (a , b) => a + b
console.log("Arrow Function: " + sum1(20 , 30)) */

const titulo = document.querySelector('#titulo1')

function alteraTitulo(){

    
    //Recuperando o ID com queryselector
    //const titulo1 = document.getElementById('titulo1')
    const titulo = document.querySelector('#titulo1')
    titulo.style.backgroundColor = '#ff0000'

}

//titulo.addEventListener('click', alteraTitulo)

//Utilizando Função Anônima
/* titulo.addEventListener('click', function(){
    titulo.style.backgroundColor = '#ff0000'

}) */

//Utilizando ArrowFunction
titulo.addEventListener('click',() => titulo.style.backgroundColor = '#ff0000')
