estudante = [
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

let nomeAlunos = estudante.map((nome)=> {
    return nome.name
})
console.log(nomeAlunos);