document.addEventListener('DOMContentLoaded', function() {
    var imagem = document.getElementById('imagem');
    var contador = document.getElementById('contador');

    function incrementarContador() {
        var valorAtual = parseInt(contador.textContent);
        contador.textContent = valorAtual + 1;
    }

    imagem.addEventListener('click', incrementarContador);

    incrementarContador();
});


// faça um programa em que o usuario possa clca e a cada clique adicione 1 ao contador 
// exiba o contado na tela 


extra 
// adicione frases a cada 50 cliquephin