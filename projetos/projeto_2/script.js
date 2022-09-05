let array = [1, 2, 3, 4, 4, 5, 6, 7, 8]

let body = document.getElementsByTagName("body")[0]
let ul = document.createElement("ul")
let ol = document.getElementsByTagName("ol")[0]
//console.log(ol.remove())

array.forEach(function (elemt) {

    let li = document.createElement("li")

    if (elemt % 2 == 0) {
        li.innerText = `${elemt}`
    }

    ul.appendChild(li)
    body.appendChild(ul)
    return body
})

let arrayaaa = [
    {
        img: "https://img.icons8.com/small/32/000000/add-shopping-cart.png"
    }
]
console.log(arrayaaa[0].img)
/* function filtroParaOSomatorio(somaFiltro) {

    let spanPreco = document.querySelector("#totalDacompra")

    let valorsomaFiltro = 0

    somaFiltro.forEach((element) => {
        let precoConvetido = parseInt(element.preco)
        valorsomaFiltro += precoConvetido
    })
    return spanPreco.innerText = `R$ ${valorsomaFiltro},00`
} */
// filtroParaOSomatorio(arrayBtnPesquisa); 201
//  filtroParaOSomatorio(arrayPesquisa); 164
// // filtroParaOSomatorio(result) 65
// filtroParaOSomatorio(arrayProdutos); 43
/* var searchRegex = /(mxEvent\.addListener\([^,]+,[^,]+),([ a-zA-Z0-9]+)(\))/g;
var replaceRules = "$1,(typeof($2)=='string')?eval($2):$2$3"
let code = code.replaceAll(searchRegex, replaceRules);
console.log(searchRegex, replaceRules, code)

function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  var rand = new Pessoa("Rand McNally", 33, "M");
  var ken = new Pessoa("Ken Jones", 39, "M");

  console.log(rand)
  console.log(ken)

  function Carro(fabricante, modelo, ano, dono) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
  }

  
  var carro1 = new Carro("Eagle", "Talon TSi", 1993, rand);
  var carro2 = new Carro("Nissan", "300ZX", 1992, ken);

  console.log(carro1)
  console.log(carro2)



 */
  console.log("//////////////////////////////////////////////////////")

/* const handleColour =
{
    'red': stop,
    'amber': stop,
    'green': go,
    'pishing amber': go
}
 */

const stop = () => { console.log("stop called"); }
const go = () => { console.log("go called"); }

const colour = 'red';

const handleColour = 
{
    'red'               : stop,
    'amber'             : stop,
    'green'             : go,
    'flashing amber'    : go
}
switch (colour) {
    case 'red':
    case 'amber':
        stop();
        break;
    case 'green':
    case 'flashing amber':
        go();
        break;
    default:
        throw 'Invalid colour';
}





handleColour[colour](); 

console.log("//////////////////////////////////////////////////////")

const handleShape = (shape) => { console.log(shape.area(5)); }

class Shape
{
    constructor(width = 2)
    {
        this.width = width;
    }
    area()
    {
         return 0;
    }
}

class Square extends Shape
{ 
    area()
    {
        return this.width ** 2;  
    }
}

class Circle extends Shape
{
    area()
    {
        return Math.PI * (this.width / 2) ** 2;
    }
}

const shape = new Square();

handleShape(shape);    // logs 4
console.log("//////////////////////////////////////////////////////")
let item;

try
{
    item = previousItem;
}
catch (ReferenceError)
{
    item = new Item();
    previousItem = item;
}

console.log("//////////////////////////////////////////////////////")


/* fatorial(0) ::= 1 
fatorial(n) ::= n * fatorial(n-1) */

let fatorial = (número) => { 
    return number.matches ( 
      (x = 0) => 1, 
      (x) => x * fatorial (x - 1) 
    ) 
  } 
   
  fatorial(6) // retorna 720