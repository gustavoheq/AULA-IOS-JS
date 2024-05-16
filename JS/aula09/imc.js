let altura = Number(prompt("Qual sua altura: "))
let peso = Number(prompt("Qual seu peso: "))

function calcularImc(peso = 0, altura = 0) {
    let imc = peso / (altura * altura)
    let msg
    if (imc > 40) {
        msg = 'Obesidade Grau - 3'
    } else if (imc > 35) {
        msg = 'Obesidade Grau - 2'
    } else if (imc > 30) {
        msg = 'Obesidade Grau - 1'
    } else if (imc > 25) {
        msg = 'Acima do peso'
    } else if (imc > 18.5) {
        msg = 'Peso normal'
    } else if (imc > 17) {
        msg = 'Abaixo do peso'
    } else {
        msg = 'Muito Abaixo do peso'
    }
    return msg
}