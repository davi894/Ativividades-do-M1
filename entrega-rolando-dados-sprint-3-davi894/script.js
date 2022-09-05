/* minhaBarra.style.width = `${larguraDaBarra}px`; *//* Copiar para àrea de transferência */

function dadosUm() {

    count = 0

    for (let i = 0; i < 1; i++) {
        count += Math.floor(Math.random() * 6 + 1)

    }
    return count
}
dadosUm()
console.log(dadosUm())

function dadosDois() {

    count = 0

    for (let i = 0; i < 1; i++) {
        count += Math.floor(Math.random() * 6 + 1)
    }

    return count
}
dadosDois()
console.log(dadosDois())

function somaDadosLancados() {

    let dadoUm = dadosUm()
    let dadoDois = dadosDois()
    let somaDados = dadoUm + dadoDois

    return somaDados
}
somaDadosLancados()
console.log(somaDadosLancados())

function milLancamantos() {

    let count = []

    for (let i = 0; i < 1000; i++) {
        count[i] = somaDadosLancados()
    }
    return count
}
milLancamantos()

function somaDadosRepetidos() {

    let ul = document.getElementsByTagName("ul")[0]
    console.log(ul)

    let lancamentos = milLancamantos()

    let um = 0
    let dois = 0
    let tres = 0
    let quatro = 0
    let cinco = 0
    let seis = 0
    let sete = 0
    let oito = 0
    let nove = 0
    let dez = 0
    let onze = 0
    let doze = 0

    for (let i = 0; i < lancamentos.length; i++) {

        if (lancamentos[i] == 1) {
            um += 1
        }
        if (lancamentos[i] == 2) {
            dois += 1
        }
        if (lancamentos[i] == 3) {
            tres += 1
        }
        if (lancamentos[i] == 4) {
            quatro += 1
        }
        if (lancamentos[i] == 5) {
            cinco += 1
        }
        if (lancamentos[i] == 6) {
            seis += 1
        }
        if (lancamentos[i] == 7) {
            sete += 1
        }
        if (lancamentos[i] == 8) {
            oito += 1
        }
        if (lancamentos[i] == 9) {
            nove += 1
        }
        if (lancamentos[i] == 10) {
            dez += 1
        }
        if (lancamentos[i] == 11) {
            onze += 1
        }
        if (lancamentos[i] == 12) {
            doze += 1
        }
    }

    let lium = document.createElement("li")
    lium.innerText = `1 : ${um}`

    let liDois = document.createElement("li")
    liDois.innerText = `2 : ${dois}`

    let liTres = document.createElement("li")
    liTres.innerText = `3 : ${tres}`

    let liQuatro = document.createElement("li")
    liQuatro.innerText = `4 : ${quatro}`

    let liCinco = document.createElement("li")
    liCinco.innerText = `5 : ${cinco}`

    let liSeis = document.createElement("li")
    liSeis.innerText = `6 : ${seis}`

    let liSete = document.createElement("li")
    liSete.innerText = `7 : ${sete}`

    let liOito = document.createElement("li")
    liOito.innerText = `8 : ${oito}`

    let linove = document.createElement("li")
    linove.innerText = `9 : ${nove}`

    let liDez = document.createElement("li")
    liDez.innerText = `10 : ${dois}`

    let liOnze = document.createElement("li")
    liOnze.innerText = `11 : ${onze}`

    let liDoze = document.createElement("li")
    liDoze.innerText = `12 : ${doze}`

    ul.append(lium, liDois, liTres, liQuatro, liQuatro, liCinco, liSeis, liSete, liOito, linove, liDez, liOnze, liDoze)
    ul.style.width = `${100}px`;
  
}
somaDadosRepetidos()


