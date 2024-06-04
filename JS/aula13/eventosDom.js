const calcularMedia = (n1, n2) => {
    let n1 = Number(document.querySelector('#nota1'))
    let n2 = Number(document.querySelector('#nota2'))
    let media = (n1 + n2) / 2

    let res = document.querySelector('#resultado')
    res.innerHTML = `Nota do Aluno: ${media}`
}
