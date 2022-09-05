let tasks = [
    {
        /* id: 0, */
        titulo: "Comprar comida para o gato",
        tipo: "Urgente"
    },
    {
        /*   id: 1, */
        titulo: "Limpar o quarto",
        tipo: "urgente"
    },
    {
        /*   id: 2, */
        titulo: "Consertar Computador",
        tipo: "prioritário"
    },
    {
        /*  id: 3, */
        titulo: "Guardar dinheiro do lanche",
        tipo: "Urgente"
    },
    {
        /*  id: 4, */
        titulo: "Beber água",
        tipo: "prioritário"
    },
    {
        /*  id: 5, */
        titulo: "viajar",
        tipo: "Urgente"
    },
    {
        /*  id: 6, */
        titulo: "dormir",
        tipo: "normal"
    },
    {
        /*   id: 7, */
        titulo: "almoçar",
        tipo: "prioritário"
    }
]

let body = document.getElementsByTagName("body")[0]

let main = document.querySelector("main")

let sectionAdiconar = document.getElementsByClassName("AdicionarTarefas")[0]

let sectionTarefas = document.getElementsByClassName("tarefas")[0]

let h2Urgente = document.getElementsByClassName("h2Urgente")[0]
let ulUrgente = document.querySelector(".urgente")

let h2Prioritario = document.getElementsByClassName("h2Prioritario")[0]
let ulPrioritario = document.querySelector(".prioritario")

let h2Normal = document.getElementsByClassName("h2Normal")[0]
let ulNormal = document.querySelector(".normal")

body.append(main)
main.appendChild(sectionTarefas, sectionAdiconar)

sectionTarefas.append(h2Urgente, ulUrgente, h2Prioritario, ulPrioritario, h2Normal, ulNormal)

console.log(body)

let form = document.getElementsByTagName("form")[0]

let input = document.getElementById("input")
let InputText = input.value
/* console.log(InputText) */

let select = document.querySelector(".TipoDaTarefa")
let selectValue = select.value

/* console.log(selectValue)  */
let optionU = document.getElementsByClassName("U")[0]
let optionUValue = optionU.value
/* console.log(optionUValue)  */
let optionP = document.getElementById("P")
let optionPvalue = optionP.value
/*  console.log(optionPvalue) */
let optionN = document.getElementById("N")
let optionNValue = optionN.value
/*  console.log(optionNValue) */

button = document.getElementsByClassName("AdicionarTarefa")[0]

function inputTarefaSelectTipo() {

    let objetotituloEtipoTarefa = {
        /*  id: " ", */
        titulo: ``,
        tipo: ``
    }

    return objetotituloEtipoTarefa
}

/* let funcaoadcicionar = inputTarefaSelectTipo()
tasks.push(funcaoadcicionar) */

function urgente() {

    let ul = document.querySelector(".urgente")
    ul.innerHTML = " "

    let arrayU = []

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].tipo == "urgente" || tasks[i].tipo == "Urgente") {
            let button = document.createElement("button")
            button.classList.add("bUrgente")
            button.innerText = "remover"
            let li = document.createElement("li")

            arrayU.push(li)
            let p = document.createElement("p")
            p.innerText = `${tasks[i].titulo}`
            li.appendChild(p)
            li.appendChild(button)
            ulUrgente.appendChild(li)

            button.addEventListener("click", function (event) {
                event.target.parentElement.parentElement.removeChild(event.target.parentElement);

            })
        }
    }
    return arrayU
}
urgente(tasks)

function prioritario() {

    let ul = document.querySelector(".prioritario")
    ul.innerHTML = " "

    let arrayP = []

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].tipo == "prioritário" || tasks[i].tipo == "Prioritário") {
            let button = document.createElement("button")
            button.classList.add("bPrioritario")
            button.innerText = "remover"
            let li = document.createElement("li")

            arrayP.push(li)
            let p = document.createElement("p")
            p.innerText = `${tasks[i].titulo}`
            li.appendChild(p)
            li.appendChild(button)

            ulPrioritario.append(li)

            button.addEventListener("click", function (event) {
                event.target.parentElement.parentElement.removeChild(event.target.parentElement);

            })
        }
    }
    return arrayP
}
prioritario(tasks)

function normal() {

    let ul = document.querySelector(".normal")
    ul.innerHTML = " "

    let arrayN = []

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].tipo == "normal" || tasks[i].tipo == "Noraml") {
            let button = document.createElement("button")
            button.classList.add("bNoraml")
            button.innerText = "remover"
            let li = document.createElement("li")

            arrayN.push(li)
            let p = document.createElement("p")
            p.innerText = `${tasks[i].titulo}`

            li.appendChild(p)
            li.appendChild(button)
            ulNormal.append(li)

            button.addEventListener("click", function (event) {
                event.target.parentElement.parentElement.removeChild(event.target.parentElement);
            })
        }
    }
    return arrayN
}
normal(tasks)

button.addEventListener("click", function (event) {
    /*  console.log("oi") */


    let objetotituloEtipoTarefa = {
        /*  id: " ", */
        titulo: `${input.value}`,
        tipo: `${select.value}`
    }

   
   /*  if () */

        console.log(input.value)
    console.log(select.value)
    console.log(objetotituloEtipoTarefa.value)

    /*   if(input.value) */
    tasks.push(objetotituloEtipoTarefa)

    let U = urgente()
    let P = prioritario()
    let N = normal()
    console.log(U)
    console.log(P)
    console.log(N)

    console.log(tasks)
})


/* function adicionarInput() {

if (event.target.type == "button") {
        if (tipo == optionUValue) {
            console.log(event.target)
        } else if (tipo == optionP) {
            console.log(event.target)
        } else if (tipo == optionNValue) {
            console.log(event.target)
        }
    }
    input.addEventListener("input", function (event) {
        console.log(event.target.parentElement)
    })

}
]  if (selectValue == optionUValue) {
        objetotituloEtipoTarefa.titulo = InputText
        objetotituloEtipoTarefa.tipo = optionU
    }

    if (selectValue == optionPvalue) {
        objetotituloEtipoTarefa.titulo = InputText
        objetotituloEtipoTarefa.tipo = optionP
    }

    if (selectValue == optionNValue) {
        objetotituloEtipoTarefa.titulo = InputText
        objetotituloEtipoTarefa.tipo = optionN
    }
 */
/* function adicionarTipo() {
   /*  let inputtarefa = adicionarInput() */
/*  select.addEventListener("click", function (eventDois) { */

/*    
}) */
/* } */

/*  if (event.target.type == "button") {
       let input = form.elements
       let titulo = input[0].value
       let tipo = input[1].value
       let adicionar = input[2].value

       if (titulo !== " ") {
           if (tipo == true) {
               tasks.push(titulo,)

           }
       } */
/* 
        console.log(titulo)
        console.log(tipo)
        console.log(adicionar)
    } 
    
      /*   console.log(retornoInputtip)
    /*  console.log(event.target) 

    let optionU = document.getElementsByClassName("U")[0]
    let optionUValue = optionU.value
     console.log(optionUValue) 
    let optionP = document.getElementById("P")
    let optionPvalue = optionP.value
    /*  console.log(optionPvalue) 
    let optionN = document.getElementById("N")
    let optionNValue = optionN.value

    let input = form.elements
    let titulo = input[0].value
    let tipo = input[1].value
    let adicionar = input[2].value 
    
     let retornoInputtip = inputTarefaSelectTipo()
    console.log(retornoInputtip)
    let input = form.elements
    let titulo = input[0].value
    let tipo = input[1].value
    let adicionar = input[2].value
*/




