let garden = [
    [0, 0, 0, "G"],
    [0, 0, "G", 0],
    [0, "G", 0, 0],
    ["G", 0, 0, 0]
]

function trimTheGrass(gardenG) {
   console.log(gardenG)
    

    for (let i = 0; i < gardenG.length; i++) {
        for (let j = 0; j < gardenG[i].length; j++) {
            if (gardenG[i][j] !== 0 ){
                gardenG[i][j] = "Cortar grama"
            }else{
                gardenG[i][j] = "grama cortada "
            }

        }
    }
    return 
}
console.log(trimTheGrass(garden))