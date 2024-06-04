const calcularMedia = () => {
    let n1 = Number(document.querySelector('#nota1').value)
    let n2 = Number(document.querySelector('#nota2').value)
    let media = (n1 + n2) / 2

    let res = document.querySelector('#resultado')
    res.innerHTML = `Nota do Aluno: ${media}`
}
