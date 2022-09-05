


function disemvowel(str) {
    let array = ""

    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i]) === false) {
         array = array + str[i]
        } 
    }
    return array;
}

console.log(disemvowel("This website is for losers LOL!"))