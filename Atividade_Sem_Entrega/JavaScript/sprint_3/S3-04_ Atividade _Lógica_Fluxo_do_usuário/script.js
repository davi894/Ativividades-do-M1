
let EntrarSite = prompt("Entrou no site?")
let AchouProduto = prompt("Encontrou produto?")
let Tempo =Number(prompt("Qual o tempo limite de permanecer no site?"))
let Pagamento = prompt("A forma de pagamento é em cartão?")

//const entrarSite = "Conseguiu"
//const achouProduto = true
//const tempo ="60s"
//const pagamento ="cartão"

if (EntrarSite && AchouProduto && Tempo && Pagamento) {
    alert("Você pode adquirir o produto")
} else {
    alert("Você não pode adquirir o produto")
}

