/* import { converterAPI } from "../module/API.js";
import { Renderizar } from "../JS/module/renderizar";

console.log(converterAPI);
console.log(Renderizar.renderizando(converterAPI)); */
let arrayPiadasFavoritas = [];
const APIChuckNorris = `https://api.chucknorris.io/jokes/search?query=`;
const aleatorio = "random";

const APIchuckNorris = async (teste = "random") => {
  if (teste.trim() !== "") {
    let uri = await fetch(`${APIChuckNorris}${teste}`, {
      method: "GET",
      "Content-Type": "application/json",
    });

    let userData = await uri.json();

    return userData;
  }
};

const btnpesquisar = document.querySelector("#btnpesquisar");

btnpesquisar.addEventListener("click", async function (event) {
  let input = document.querySelector(".pesquisa").value;
  if (input.trim() == "") renderizando(await APIchuckNorris(aleatorio));

  renderizando(await APIchuckNorris(input));

});

function renderizando(json) {
  let jsonlength = Object.values(json)[1];

  let ulPiadas = document.querySelector(".lista__piadas");
  ulPiadas.innerHTML = "";

  jsonlength.forEach((ele, i) => {
    let li = document.createElement("li");
    let btnAdicionargostei = document.createElement("button");
    btnAdicionargostei.classList.add("btnMarcarComoGostei");
    btnAdicionargostei.innerText = "add to favorites"
    let btnid = btnAdicionargostei.id;
    btnAdicionargostei.id = btnid + 1;
    li.innerText = ele.value;
    li.append(btnAdicionargostei);
    ulPiadas.appendChild(li);

    btnAdicionargostei.addEventListener("click", (event) => {
      if (event.target == btnid) arrayPiadasFavoritas.push(ele);
    });
  });
}

renderizando(await APIchuckNorris());


function renderizaCategoriaNaoEncontrada(categoria) {

  return `A category "${categoria}" does not come out `
}
let input = document.querySelector(".pesquisa");

input.addEventListener("keyup", function (e) {
  console.log(e.key)
})
console.log(renderizaCategoriaNaoEncontrada(input))

/* 
O que mais predent colocar no meu projeto ?

**um lugar onde irá armazenar as piadas favoritas

**piada o dia

**curiosidades sobre Chuck Norris

**parte de cadastro

**melhorar o layout

**mostrar categorias das piadas


*/
