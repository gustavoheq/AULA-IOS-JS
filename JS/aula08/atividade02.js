let idade;

do {
    idade = parseInt(prompt("Insira sua idade:"));

    if (idade <= 0 || isNaN(idade)) {
        alert("Idade inválida.");
    } 
} while (idade <= 0 || isNaN(idade));

console.log("Idade válida:", idade);
