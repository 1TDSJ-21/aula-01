// Function padrão
function sum(a, b) {
    return a + b
}
console.log("Função padrão: " + sum(50, 502))

// Arrow Function
const sumWith = (a, b) => a + b
console.log("Função Arrow Function: " + sumWith(50, 50))



const titulo = document.querySelector('#titulo1')

// function alteraTitulo() {
//     // Recuperando o ID com querySelector, no caso, selecionando o elemento pelo ID
//     // const titulo = document.querySelector('#titulo1')
//     titulo.style.backgroundColor = '#ff0000'

// }

titulo.addEventListener('click', () => titulo.style.backgroundColor = '#ff0000')