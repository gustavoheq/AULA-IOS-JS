console.log(`Exercício 01: Dado um array de números, let números = [1, 2, 3, 4, 5] calcule a soma de todos os elementos do array.:`);

let números = [1, 2, 3, 4, 5];

let soma = números.reduce((total, num) => total + num, 0);
console.log("A soma de todos os elementos do array é:", soma);
console.log('---- ---- ----');
console.log(`Exercício 01: Imprima os números pares de 2 a 10:`);


let contador = 2

while (contador <= 10) {
    console.log(contador);
    contador += 2   
}

console.log('---- ---- ----');
console.log(`Exercício 02: Dado um array de números, let números = [...] crie um novo array apenas com os números pares.`);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
    }
}

console.log("Números pares:", numerosPares);

console.log('---- ---- ----');
console.log(`Exercício 03: Crie um objeto que represente uma pessoa com as propriedades nome, idade e cidade, e apresente as informações dessa pessoa em uma string`);

let pessoa = [{
        nome: 'Henrique',
        idade: 27,
        cidade: 'Osasco'
    }
];

let pessoaString = (`Nome: ${pessoa[0].nome}, Idade: ${pessoa[0].idade}, Cidade: ${pessoa[0].cidade}`);

console.log(pessoaString);

console.log('---- ---- ----');
console.log(`Exercício 05: Atualize a idade de um objeto pessoa para 30 anos e passe o resultado em tela`);

let pessoas = {
    Nome: "Maria",
    Idade: 28,
    Cidade: "Rio de Janeiro"
}

pessoas.Idade = 30;

console.log(pessoas.Nome);
console.log(pessoas.Idade);
console.log(pessoas.Cidade);