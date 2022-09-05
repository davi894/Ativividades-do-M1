let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
}


function qualIdade(idade) {

    let anoAtual = 2022
    let idadeAtual = anoAtual - idade

    return `A idade atual de Clara é ${idadeAtual} anos`
    //Lógica
}
console.log(qualIdade(pessoa.anoNascimento))


function normalizaDado(name) {



    let indiceReformatado = name.replace(`${name[0]}`, `${name[0].toUpperCase()}`)


    /*  console.log(indiceReformatado) */
    return indiceReformatado
    //Lógica
}
console.log(normalizaDado(pessoa.nome))

let listaUsuarios = {
    nome: "Jucelino"
}

function criandoListaDeUsuarios(name) {

    let novoNome = name.toLowerCase()
    let arrayUsuario = []
    /*  for (let i = 0; i < name.length; i++) { */
    arrayUsuario.push(novoNome)
    /*   } */

    return arrayUsuario
    //Lógica
}
console.log(criandoListaDeUsuarios(listaUsuarios.nome))



function calculaVale(distancia) {
    let valorLitro = 6.99
    let conversao = parseInt(distancia)
    let valeCombustivel = (conversao * valorLitro) * 0.7

    return `O vale combustível vai ser de ${valeCombustivel} `
    //Lógica
}
console.log(calculaVale(pessoa.distanciaDoTrabalho))

let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo: []
}


function adicionarTipo(endereco) {
    //Lógica  

    endereco.tipo.push("casa")

    return endereco
}
console.log(adicionarTipo(endereco))

/* let adicionarEnderecoEmPessoa(){
    //Lógica
} */

let pessoaUm = {
    nome: "Cleito"
}
let enderecoDois = {
    tipo: []
}

function adicionarEnderecoEmPessoa(pessoaUm, enderecoDois) {
    let pessoaUmAtualizado = {
        nome:""
    }

    if (pessoaUm.nome) {
        pessoaUmAtualizado.nome += `${pessoaUm.nome}`
    }

     if (enderecoDois.tipo) {
        pessoaUmAtualizado.tipo = []
      }
    pessoaUmAtualizado.tipo.push("casa") 
    /*  pessoaUmAtualizado.nome+= */

    return pessoaUmAtualizado
}

console.log(adicionarEnderecoEmPessoa(pessoaUm, enderecoDois))


/* if(!objeto.online) {
    objeto.online = []}
   objeto.online.push(friends[i].username ) */