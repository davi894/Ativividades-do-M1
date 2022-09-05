
function lista() {

    let amigoHigiene = ["papel", "escova", "pasta", "sabão", "condicionador"]
    let amigoAlimentação = ["marshmallows", "biscoito", "chocolate", "chocolate quente", "chá"]
    let amigoCuidados = ["remédios", "colar cervical", "tala de imobilização", "máscara para proteção facial", "óculos de proteção"]
    let amigoMedicos = ["pinça", "termômetro", "agulhas esterilizadas", "algodão", "ataduras"]
    let amigoLazer = ["bola de futebol", "pés de pato", "raquete", "bola de tênis", "roupa de banho"]

    let caixaSuprimentos = [
        amigoHigiene,
        amigoAlimentação,
        amigoCuidados,
        amigoMedicos,
        amigoLazer
    ]

    for (let i = 0; i < caixaSuprimentos.length; i++) {
        for (let j = 0; j < caixaSuprimentos[i].length; j++) {
            if (caixaSuprimentos[i].length == 5) {
                console.log(`A quantidade de produtos de cada amigo está correta`)
            }
            else if ( caixaSuprimentos[i].length < 5) {
                console.log(`Está faltando produtos no ${caixaSuprimentos[i][j]}`)

            }
        }
    }
    return caixaSuprimentos
}
console.log(lista())

