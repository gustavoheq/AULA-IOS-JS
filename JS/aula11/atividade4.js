// Utilize o método forEach para exibir o nome e a idade de cada aluno no
// console.

estudantes = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
    ]

estudantes.forEach((aluno) => {
    console.log(`Nome do Aluno: ${aluno.name}`);
    console.log(`Idade do Aluno: ${aluno.age}`);
});