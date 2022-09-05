let datas = ["João", "Matheus", "Julia", "Lucas", "Carlos"]


function analyticsData(nome, array) {

    
    for (let i = 0; i < array.length; i++) {
        /*  let nomeIncluso = array[i] */
        if (array[i] == nome) {
            return ` O usuário ${array[i]} existe na lista e está na ${array.indexOf(nome)} ° posição`
        } 
    }
    return `Como o usuário não foi encontrado, foi inserido dentro da lista, segue a nova estrutura:${array.concat(nome)} `
}
analyticsData("Carlos", datas)
console.log(analyticsData("juelson", datas))