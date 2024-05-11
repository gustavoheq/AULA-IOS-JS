function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 11);
}

function jogoDeAdivinhacao() {
    var numeroSorteado = gerarNumeroAleatorio();
    var tentativas = 0;

    while (true) {
        var palpite = parseInt(prompt("Digite um número de 0 a 10:"));
        tentativas++;

        if (isNaN(palpite) || palpite < 0 || palpite > 10) {
            alert("Por favor, digite um número válido de 0 a 10.");
            continue;
        }

        if (palpite === numeroSorteado) {
            alert("Parabéns, você acertou em " + tentativas + " tentativas!");
            break;
        } else {
            alert("Tente novamente.");
        }
    }
}

jogoDeAdivinhacao();
