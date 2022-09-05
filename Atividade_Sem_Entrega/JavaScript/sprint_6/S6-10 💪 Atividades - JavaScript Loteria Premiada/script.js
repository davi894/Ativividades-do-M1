let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}


function eGanhador(pessoa, ganhador) {

    let nomeSelecionado = pessoa.nome
    let nomeReformatado = nomeSelecionado.replace(`${nomeSelecionado[0]}`, `${nomeSelecionado[0].toUpperCase()}`)

    if (nomeReformatado === ganhador.nome && pessoa.cpf === ganhador.cpf) {
        return `É ganhador!`
    } else {
        return `É alarme falso!`
    }
}
console.log(eGanhador({ nome: 'adamastor', cpf: '123.321.789-98' }, ganhador))
// O retorno deverá ser 'É ganhador!'



let objetoPessoas = [
    {
        nome: "Mel",
        cpf: "123.321.789-91"
    },

    {
        nome: "Neves",
        cpf: "123.321.789-92"
    },

    {
        nome: "Arlindo",
        cpf: "123.321.789-93"
    }


]
function tentaramRetirar(pessoas) {

    let adamastor = eGanhador({ nome: 'adamastor', cpf: '123.321.789-98' }, ganhador)
    let arrayPessoas = []

    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas !== adamastor) {
            arrayPessoas.push(`${pessoas[i].nome} tentou retirar o prêmio`)
        }
    }
    return arrayPessoas || pessoas.length
}
console.log(tentaramRetirar(objetoPessoas))