//Nesse exercício você irá retornar a resposta de uma pergunta baseada na inicial do nome passado por parâmetro na função

//Tradução do CodeWars
//Crie uma função que responda à pergunta "Você está tocando banjo?".

//Se o seu nome começar com a letra "R" ou "r" minúsculo, você está tocando banjo!

//A função recebe um nome como seu único argumento e retorna uma das seguintes strings:

function areYouPlayingBanjo(name) {
    // Implement me
    if (name[0] == "R" || name[0] == "r") {
       console.log(name + " plays banjo") 
    }else{
        console.log(name + " does not play banjo")
    }
    
    
    return name;
}