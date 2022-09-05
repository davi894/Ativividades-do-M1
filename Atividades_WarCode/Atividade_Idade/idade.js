function calculateAge(anoAtual, anofuturo) {
    let idadeFutura = anofuturo - anoAtual
    let vaiNascer = anoAtual - anofuturo
    let vainascer = vaiNascer

    if (anoAtual === 1) {
        return 'You are 1 year old.'
    } else if (anofuturo === 1) {
        return 'You will be born in 1 year.'
    }
    else if (anofuturo > anoAtual) {
        return `You are ${idadeFutura} years old.`
    } else if (anofuturo == anoAtual) {

        return `You were born this very year!`
    } else if (anofuturo > anoAtual) {
        return `You will be born in ${vaiNascer} years.`

    }
    else {
        return `You will be born in ${vainascer} years.`
    }

    // enter your code here.
}

