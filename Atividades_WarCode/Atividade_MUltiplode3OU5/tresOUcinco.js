//Se listarmos todos os números naturais 
//abaixo de 10 que são múltiplos de 3 
//ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

//Finalize a solução para que ela
// retorne a soma de todos os múltiplos 
// de 3 ou 5 abaixo do número passado. Além disso,
// se o número for negativo, retorne 0 (para idiomas que os tenham).

//Observação: se o número for múltiplo de 3 e 5, conte-o apenas uma vez .

//Cortesia de projecteuler.net ( Problema 1 )
//1.CONTAGEM DOS MULTIPLOS DE 3 OU 5 (CONTAR APENAS UMA VEZ)!!
//2.SOMAR OS MULTIPLOS
// SE O NUMERO FOR NEGATIVO RETORNAR 0

function solution(number) {

    let contMultTresOuCinco = []

    for (let i = 0; i < number; i++) {

        if (number % 3 === 0 || number % 5 === 0) {
            contMultTresOuCinco.push(number)
        }
    }
    for (let i = 0; i < contMultTresOuCinco.length; i++) {
        if (contMultTresOuCinco.length > i) {
            contMultTresOuCinco.push()

        } else {
            contMultTresOuCinco.push(number)
        }

    }
    return contMultTresOuCinco
}
console.log(solution(10))