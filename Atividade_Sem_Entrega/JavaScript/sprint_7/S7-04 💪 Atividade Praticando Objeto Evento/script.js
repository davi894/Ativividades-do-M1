let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}

let element = document.getElementsByClassName("container")[0];
console.log(element)
let elementInformado = document.getElementsByClassName("infomacao")[0];
console.log(elementInformado)


element.addEventListener("click", function (e) {
    let elementoCapture = e.target.className;

})


element.addEventListener("click", function (e) {
    let elementoCapture = e.target.className;

    if (elementoCapture == "aqui_dispara") {
        if (elementInformado.children.length === 0) {
            elementInformado.innerHTML = "Sou um toggle";
        } else {
            elementInformado.innerHTML = "";
        }
    }
}
)


