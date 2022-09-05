const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 'R$ 6.799,33'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 'R$ 12.199,13'
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 'R$ 11.099,11'
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 'R$ 14.578,25'
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 'R$ 28.399,13'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 'R$ 14.350,45'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 'R$ 22.109,21'
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 'R$ 15.999,13'
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 'R$ 17.251,36'
    }
]



function contaTotal(total) {
    let resultadoTotal = total.length

    return `A quantidade de carros disponíveis são de ${resultadoTotal} carros`
}
console.log(contaTotal(carros))

function precoTotal(carros) {

    let precoTotal = []
    for (let i = 0; i < carros.length; i++) {
        precoTotal.push(carros[i].preco)
    }

    let novoPrecoTotal = []

    for (let i = 0; i < precoTotal.length; i++) {
        if (typeof (precoTotal[i]) === "string") {

            novoPrecoTotal.push(precoTotal[i].replaceAll(",", ".").split(" "))
        }
    }

    let stringParaNumber = []

    for (let i = 0; i < novoPrecoTotal.length; i++) {
        for (let j = 0; j < novoPrecoTotal[i].length; j++) {
            if (novoPrecoTotal[i][j] !== "R$") {
                stringParaNumber.push(novoPrecoTotal[i][j])
            }
            /* console.log(novoPrecoTotal[i][j]) */
        }
    }

    let arraySoma = []

    for (let i = 0; i < stringParaNumber.length; i++) {
        arraySoma.push(parseFloat(stringParaNumber[i]))
    }

    let totalSoma = 0

    for (let i = 0; i < arraySoma.length; i++) {
        if (typeof (arraySoma[i]) === "number") {
            totalSoma += arraySoma[i]
        }
    }

    return totalSoma


}

console.log(precoTotal(carros))

function filtraPorMarca(carros) {


    let arrayMarcas = []

    let Ford = []
    let VW = []
    let Fiat = []
    let Chevrolet = []

    arrayMarcas.push(Ford, VW, Fiat, Chevrolet)

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].marca === "Ford") {
            Ford.push(carros[i])
        } else if (carros[i].marca === "VW") {
            VW.push(carros[i])
        } else if (carros[i].marca === "Fiat") {
            Fiat.push(carros[i])
        } else if (carros[i].marca === "Chevrolet") {
            Chevrolet.push(carros[i])
        }
    }


    return arrayMarcas
    //Lógica
}
console.log(filtraPorMarca(carros))

function filtraPorAcessorio(carros) {

    let marcasArrayCompleto = []

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].acessorios.length === 4) {
            marcasArrayCompleto.push(carros[i].acessorios)
        }
        /*  console.log(carros[i].acessorios) */
    }

    return marcasArrayCompleto

    //Lógica
}
console.log(filtraPorAcessorio(carros))

let acessorios = []



function eCarroCompleto(carros) {

    let ArrayTotalCompleto = []

    let carrosCompletos = []
    let modeloCarrosCompletos = []
    let marcaCarrosCompletos = []

    ArrayTotalCompleto.push(carrosCompletos, modeloCarrosCompletos, marcaCarrosCompletos)


    for (let i = 0; i < carros.length; i++) {
        if (carros[i].completo == true) {
            carrosCompletos.push(carros[i].completo)
        }
    }
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].completo == true) {
            modeloCarrosCompletos.push(carros[i].modelo)
        }
    }

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].completo == true) {
            marcaCarrosCompletos.push(carros[i].marca)
        }
    }

    return ArrayTotalCompleto
    //Lógica
}
console.log(eCarroCompleto(carros))

function adicionaCarro(carros) {
    months.splice(1, 0, 'Feb');
    let carroAdicionado = []
    //Lógica
}
console.log(adicionaCarro(carros))

function removeCarro(carros) {
    months.splice(1, 0, 'Feb');
    let carroRemovido = []


    //Lógica
}
console.log(removeCarro(carros))

function contaCarrosNovos() {


    let array = []

    for (let i = 0; i < carros.length; i++) {
        array.push(carros[i].ano)

    }

    let arrayConvertido = []

    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "string") {

            arrayConvertido.push(parseInt(array[i]))
        }

    }

    let arrayCarrosVelhos = []

    for (let i = 0; i < arrayConvertido.length; i++) {
        if ((2022 - arrayConvertido[i]) < 10) {
            arrayCarrosVelhos.push(arrayConvertido[i])
        }

    }


    return arrayCarrosVelhos.length


    //Lógica
}
console.log(contaCarrosNovos(carros))

function contaCarrosVelhos(carros) {

    let array = []

    for (let i = 0; i < carros.length; i++) {
        array.push(carros[i].ano)

    }

    let arrayConvertido = []

    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "string") {

            arrayConvertido.push(parseInt(array[i]))
        }

    }

    let arrayCarrosVelhos = []

    for (let i = 0; i < arrayConvertido.length; i++) {
        if ((2022 - arrayConvertido[i]) > 10) {
            arrayCarrosVelhos.push(arrayConvertido[i])
        }

    }

    return arrayCarrosVelhos.length

}
console.log(contaCarrosVelhos(carros))


function insereDono(list, position, person) {
    list[position].donos = [person]
}
//Chamada da função
insereDono(carros, 1, { nome: 'Jhon Dhoe', cpf: '122-133-144-55' })

console.log(insereDono(list, position, person)) 