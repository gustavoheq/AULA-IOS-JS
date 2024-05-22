estudante = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
    ]

estudante.forEach((valor, elemento, array) => {
    console.log(`Nome do Aluno: ${valor}`);
    console.log(`Idade do Aluno: ${elemento}`);
    console.log(`Idade do Aluno: ${array}`);
});