document.title = 123;

let heading = document.createElement('H1');
heading.innerHTML = 'Gustavo Henrique';
document.body.appendChild(heading);
heading.style.border = '3px solid #000';
heading.style.color = 'red';

function alternarCorBorda(elemento) {
    const corAtual = elemento.style.borderColor;
    const corAlternativa = (corAtual === 'red') ? 'blue' : 'red';
    elemento.style.borderColor = corAlternativa;
}

const nomeUsuario = prompt("Por favor, digite seu nome:");
const h1Elemento = document.createElement('h1');

h1Elemento.textContent = nomeUsuario;
h1Elemento.style.border = "3px solid red";
h1Elemento.style.color = "darkblue";
document.body.appendChild(h1Elemento);

setInterval(() => {
    alternarCorBorda(h1Elemento);
}, 1000);