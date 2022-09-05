const container = document.getElementById("root")

console.log(container)

container.innerText = "repetir"

let tagMain = document.getElementsByTagName("main")

console.log(tagMain)

tagMain.innerText = " repetir mais"


const repetir = document.createElement("span")

console.log(repetir)


repetir.innerText = "Apenas testando"

container.appendChild(repetir)


const repetirDois = document.createElement("span")

repetirDois.innerText = "preciso repetir"
console.log(repetirDois)


let ul = document.createElement("ul")

container.appendChild(ul)

let li = document.createElement("li")

li.innerText = "repetir mais..."

ul.appendChild(li)




