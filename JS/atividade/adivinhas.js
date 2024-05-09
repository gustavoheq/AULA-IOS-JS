function pulaLinha(linhas) {
    for (var i = 1; i <= linhas; i++) {
        document.write("<br>")
    }
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha(2);
}

function sorteia10() {
    return Math.round(Math.random() * 10);
}

var numeroPensado = sorteia10();
var nome = prompt("Informe o seu nome.");
var chute = parseFloat(prompt("Informe um número de 0 a 10:"));
var tentativasRestantes = 3

// aqui o programa força o usuário a digitar apenas números
while (isNaN(chute)) {
    chute = parseFloat(prompt("Informe apenas números.\nInforme um número de 0 a 10:"));
}

// aqui o programa força o usuário a digitar apenas números de 0 a 10
while (chute < 0 || chute > 10) {
    chute = parseFloat(prompt("Erro! Informe um número de 0 a 10:"));
}

// se na primeira tentativa o usuário acertar, mostra uma mensagem de parabéns na página
if (chute == numeroPensado) {
    mostra("Parabéns, " + nome + " você acertou");
} else {

    // caso contrário, o usuário é forçado a digitar um número até que ele acerte
    while (chute != numeroPensado) {

        // o usuário possui apenas 3 tentativas
        tentativasRestantes--

        if (chute > numeroPensado) {
            alert(nome + ", você errou. O número informado é maior.\nNúmero pensado: " + numeroPensado + "\nTentativas Restantes: " + tentativasRestantes);

        } else {
            alert(nome + ", você errou. O número informado é menor.\nNúmero pensado: " + numeroPensado + "\nTentativas Restantes: " + tentativasRestantes);
        }

        // atingido o número de tentatativas, o programa é recarregado
        if (tentativasRestantes < 1) {
            alert("Número de tentativas esgotado. Passe para outro jogador");
            window.location.reload();
        }

        // feitas as verificações acima e, estando dentro do número de tentativas restantes, o usuário deve digitar outro número
        chute = parseFloat(prompt("Informe um número de 0 a 10:"));

        // caso ele acerte, programa encerrado
        if (chute == numeroPensado) {
            mostra("Parabéns, " + nome + " você acertou.");
        }
    }
}
