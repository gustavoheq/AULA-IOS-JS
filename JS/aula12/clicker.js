let contador = 0;
const imagem = document.getElementById("imagem");
const contadorDiv = document.getElementById("contador");
const frasesDiv = document.getElementById("frases");

imagem.addEventListener("click", () => {
    contador++;
    contadorDiv.textContent = contador;
    imagem.classList.toggle("clicked");

    if (contador % 50 === 0) {
        const frase = document.createElement("p");
        frase.textContent = "Parabéns! Continue assim!";
        frasesDiv.appendChild(frase);
    }
});