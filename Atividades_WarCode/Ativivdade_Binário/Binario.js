function fakeBin(x) {

    let ArrayBinomioSplit = ""

    for (let i = 0; i < x.length; i++) {
        if (x[i] == "1" || x[i] == "2" || x[i] == "3" || x[i] == "4") {
            ArrayBinomioSplit += "0"
        } else {
            ArrayBinomioSplit += "1"
        }
    }
    //transformar numero em string
    //numeros abaixo de 5 substituir por 0
    //numeros acima de 5 substituir por um
    //retornar em forma de numero o novo valor
    return Number(ArrayBinomioSplit)
}
console.log(fakeBin("45385593107843568"))
