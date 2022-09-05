document.createElement('p')

const tag = document.createElement('p')

console.log(tag)

tag.innerText = "Olá, eu sou uma tag criada pelo JS"

document.querySelector('body').appendChild(tag)

const tagInput = document.createElement('input')

tagInput.placeholder = "Digite seu texto aqui"

const form = document.querySelector('form')

form.appendChild(tagInput)