console.log(`Exercício 04: Crie um programa em JavaScript que calcula e exibe a sequência de Fibonacci até um
número de termos especificado pelo usuário. A sequência de Fibonacci começa com 0 e 1, 
e cada termo subsequente é a soma dos dois termos anteriores.`);

let numTermosUsuario = parseInt(prompt("Digite o número de termos da sequência de Fibonacci a ser exibido:"));

let sequencia1 = 0;
let sequencia2 = 1;

let fibonacci = "Sequência de Fibonacci:\n";

if (numTermosUsuario >= 1) {
    fibonacci += sequencia1 + "\n";
}

if (numTermosUsuario >= 2) {
    fibonacci += sequencia2 + "\n";
}

for (let numero = 3; numero <= numTermosUsuario; numero++) {
    let proximaSequencia = sequencia1 + sequencia2;
    fibonacci += proximaSequencia + "\n";
    sequencia1 = sequencia2;
    sequencia2 = proximaSequencia;
}

alert(fibonacci);