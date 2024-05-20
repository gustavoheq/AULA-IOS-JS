let alunos = [
    {
        Nome:`Lucas`,
        RA: 202401,
        Matriculado: true
    },
    {
        Nome:`Leonardo`,
        RA: 202402,
        Matriculado: false
    },
    {
        Nome:`Pedro`,
        RA: 202403,
        Matriculado: true
    },
]

let nomeAlunos = alunos.map((nome)=> {
    return nome.Nome
})

console.log(nomeAlunos);

let raAlunos = alunos.map((ra)=> {
    return ra.RA
})

console.log(raAlunos);

let matriculaAlunos = alunos.map((matricula)=> {
    return matricula.Matriculado
})

console.log(matriculaAlunos);