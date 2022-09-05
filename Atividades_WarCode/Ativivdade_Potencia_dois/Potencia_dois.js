function powersOfTwo(n) {
    let arrayPotencia = []
    let expoente = Math.pow(2, n)
    for (let i = -1; i < n; i++) {
        if (i < 0) {
            arrayPotencia.push(expoente)
        }
    }




    return expoente
}
console.log(powersOfTwo(0))