function qualTipoDeElemento(lista) {
    let valor = ""


    for (let i = 0; i < lista.length; i++) {
        if (typeof (lista[i]) === "number") {
            valor += "number"
        }
        else if (typeof (lista[i]) === "string") {
            valor += "String"
        }
        else if (typeof (lista[i]) === "boolean") {
            valor += "true"
        }
        else if (typeof (lista[i]) === "number") {

            valor += "number"
        }
        return valor
        //Este if não está correto, faça a alteração pertinente
        //para que ele teste o tipo da maneira correta
    }
}
let tiposDiversos = [1.5, "String", true, 10]
console.log(qualTipoDeElemento([1.5, "String", true, 10]))
//for (let i = pocisao; posicao < lista; posicao++){}



