function adivinhas() {
    let numeroSorte = 7;

    while (true) {
        let chute = parseInt(prompt("Digite um número de 0 a 10:"));

        if (!(chute >= 0 && chute <= 10)) {
            alert("Digite um número de 0 a 10.");
            continue;
        }
        if (chute === numeroSorte) {
            alert("Parabéns, você acertou!");
            break;
        }
        else {
            alert("Tente novamente");
        }
    }
}

adivinhas();