let peso = Number(prompt("Insira seu Peso"));
let altura = Number(prompt("Insira sua Altura"));
let imc = peso / (altura * 2);


if (imc >= 18.9 && imc <= 24.9 ) {
    alert("Esta em intervalo saudável");
} else {
    alert("Não esta em intervalo saudável");
}

alert(`A sua nota média é: ${imc}`)