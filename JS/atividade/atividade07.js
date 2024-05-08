/*
Faça um programa que peça ao usuário para digitar um número inteiro. Se o número
for positivo, exiba uma mensagem informando que o número é positivo. Se o número for
negativo, exiba uma mensagem informando que o número é negativo. Se o número for
igual a zero, exiba uma mensagem informando que o número é zero
*/

let nu1 = parseInt(prompt("Escolhe um número inteiro"));
if (nu1 > 0){
    alert("O número é positivo")    
} else if (nu1 < 0){
    alert("O número é negativo")    
} else {
    alert("O número é zero")
}

