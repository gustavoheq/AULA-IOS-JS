/*
Faça um programa conferir sua idade. Se a idade for menor do que 18 anos, exiba
uma mensagem informando que o usuário é menor de idade. Se a idade for igual ou maior
do que 18 anos e menor do que 60 anos, exiba uma mensagem informando que o usuário
é adulto. Se a idade for igual ou maior do que 60 anos, exiba uma mensagem informando
que o usuário é idoso.
*/

// let idade = 25;

// if (idade < 18) {
//     console.log("O usuário é menor de idade");
// }
// else if (idade > 60) {
//     console.log("O usuário é idoso");
// }
// else if (idade < 60) {
//     console.log("O usuário é adulto");
// }
// console.log("Fim");

let idade = 15;
if (idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 18 && idade < 60){
    console.log("Você é adulto");
} else {
    console.log("Você é idoso");
}

/*
Faça um programa que teste a idade do usuário. Se a idade digitada for maior ou
igual a 18, exiba a mensagem "Você pode dirigir". Caso contrário, exiba a mensagem "Você
ainda não pode dirigir". 
*/

if (idade >= 18) {
    console.log("Você pode dirigir");
}
else if (idade < 18) {
    console.log("Você ainda não pode dirigir");
}

console.log("Fim");

/*
Faça um programa que peça ao usuário para digitar um número inteiro. Se o número
for positivo, exiba uma mensagem informando que o número é positivo. Se o número for
negativo, exiba uma mensagem informando que o número é negativo. Se o número for
igual a zero, exiba uma mensagem informando que o número é zero
*/

let numero = -15;

if (numero >= 0) {
    console.log("O número é positivo.");
} else {
    console.log("O número é negativo.");
}
console.log("Fim");

