// anatomia do addEventListener

elemento.addEventListener('evento', function() {
    // código que deseje executar no momento do evento...
});

// capturando o paragrafo no html
//const paragrafo = document.getElementById('meuParagrafo');

// capturando o botão no html
//const botao = document.getElementById('meuBotao');

botao.addEventListener('click', function(){
    paragrafo.classList.remove('escondido');
});

// capturando o paragrafo no html
const paragrafo = document.getElementById('meuParagrafo');

// capturando o botão no html
const botao = document.getElementById('meuBotao');

// capturando o segundo botão no html
const outroBotao = document.getElementById('meuOutroBotao');

botao.addEventListener('click', function(){
    paragrafo.classList.remove('escondido');
});

outroBotao.addEventListener('click', function(){
    paragrafo.classList.add('escondido');
});