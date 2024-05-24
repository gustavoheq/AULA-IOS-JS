// Utilize o método map para criar um novo array contendo apenas os nomes
// dos alunos.

estudantes = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Jane',
        age: 25
    },
    {
        name: 'Mark',
        age: 22
    }
]

let nomeAlunos = estudantes.map((nome)=> {
    return nome.name
})
console.log(nomeAlunos);