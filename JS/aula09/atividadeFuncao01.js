// IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarPeso(imc) {
    if (imc < 16.9) {
        return "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc <= 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}

var peso = parseFloat(prompt("Digite seu peso:"));
var altura = parseFloat(prompt("Digite sua altura:"));

var imc = calcularIMC(peso, altura);
var classificacao = classificarPeso(imc);

alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação de peso: " + classificacao);