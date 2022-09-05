const bigBoss = [
    ["Nome", "Boss"],
    ["Idade", 89],
    ["Cidade", "Rio de Janeiro"],
    ["Estado", "RJ"],
    ["Ano de Nascimento", 1933]
]



function senhadoChefe(parteUm, parteDois) {

    let senhasUm = parteUm.split("").reverse()
    let senhaDois = parteDois.toString().split("").reverse()

    let novaSenha = senhasUm.concat(senhaDois)
    
   /*  console.log({
        senhasUm,
        senhaDois
    }) */

    return `AzBn${novaSenha.join("")}@3`
}
console.log(senhadoChefe(bigBoss[0][0], bigBoss[4][1]))

