/*
let idade = 18

if (idade < 18) {
    console.log("É menor de idade")
} else if (idade === 18) {
    console.log("Tem exatamente 18 anos")
} else {
    console.log("É maior de idade")
}
*/

/*
let contador = 0

while (contador < 5) {
    console.log(contador)
    contador++

let numero = 0

do {
    console.log(numero)
    numero++
}while (numero < 5)

for (let i = 0; i < 5; i++) {
    console.log(i)
}
*/

/*
let paragrafo = document.getElementById('meuParagrafo')

paragrafo.textContent = "Esse é o meu paragráfo"
*/

/*
let novoElemento = document.createElement ("div")
novoElemento.textContent = "Novo elemento criado."
document.body.appendChild(novoElemento)

let link = document.querySelector("a")
link.setAttribute("href", "https://www.youtube.com")
link.textContent = "Youtube"
*/

/*
meuBotao.addEventListener("click", function() {
    alert("Botão clicado!!")
})
*/

/*
meuBotao.addEventListener("click", function() {
let resposta = confirm("Você deseja continuar?")
if (resposta) {
    console.log("Você escolheu continuar")
} else {
    console.log("Você escolheu não continuar")
}
})
*/

/*
meuBotao.addEventListener("click", function() {
let nome = prompt("Qual é o seu nome?")
console.log("Olá, " + nome + "!")
})
*/

/*
function saudacao (nome) {
    return "Olá, " + nome + "!"
}

let mensagem = saudacao("Ana")
console.log(mensagem)
*/

/*
let frutas = ["Maçã", "Banana", "Laranja"]

let pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Engenheira"
}

let nome = pessoa.nome
console.log(pessoa.nome)

let idade = pessoa["idade"]
console.log(pessoa.idade)

console.log(pessoa)
console.table(pessoa)
*/

/*
// Cria array de números
const numbers = [1, 2, 3, 4, 5]
console.table(numbers)
// Acessa os elementos por índice
console.log(numbers[2])
// Adiciona um elemento ao final do array
numbers.push(6)
console.table(numbers)
// Remove o último elemento do array
numbers.pop()
console.table(numbers)
// Encontra o índice de um elemento
console.log(numbers.indexOf(4))
// Obtém o tamanho do array
console.log(numbers.length)
*/

/*
const pessoa = {
    nome: "Ana",
    idade: 30,
    profissao: "Engenheira"
}

console.log(pessoa.nome)

console.log(pessoa.idade)
pessoa.idade = 60
console.log(pessoa.idade)

pessoa.cidade = "São Paulo"
console.log(pessoa.cidade)

delete pessoa.idade
console.log(pessoa.idade)
*/

/*
const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map(function(num){
    return num * 2
})

console.log(doubledNumbers)

const greeting = function(name){
    return "Olá, " + name + "!"
}

console.log(greeting("João"))
*/