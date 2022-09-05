function getRandomInt(max) {

    let NomesUm = prompt("Digite seu nome")
    let nomeDois = prompt("Digite seu nome")
    let nomeTres = prompt("Digite seu nome")

    let Vencedor = ""

    if (max === 1) {
        Vencedor += `A ${NomesUm} foi o/a ganhador(a)`
    } else if (max === 2) {
        Vencedor += `A ${nomeDois} foi o/a ganhador(a)`
    } else if (max === 3) {
        Vencedor += `A ${nomeTres} foi o/a ganhador(a)`
    }

    return Vencedor.toString()
}
console.log(getRandomInt(Math.floor(Math.random() * (4 - 1) + 1)))























function funcaoContaPasso(passos) {
    let i = 1
    While(i < passos){
        //lógica
        if (i < passos) {
            i++
            console.log(``)
        }else{

        }

    }
}
console.log(funcaoContaPasso(20))























