const classificarPeso = () => {
    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);
    
    let res = document.querySelector('#resultado');

    let imc = peso / (altura * altura);

    res.innerHTML = `Seu IMC: ${imc.toFixed(2)}<br>`;

    if (imc < 16.9) {
        res.innerHTML += "Você está muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
        res.innerHTML += "Você está abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML += "Você está com peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        res.innerHTML += "Você está acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
        res.innerHTML += "Você está com obesidade grau I";
    } else if (imc >= 35 && imc <= 40) {
        res.innerHTML += "Você está com obesidade grau II";
    } else {
        res.innerHTML += "Você está com obesidade grau III";
    }
}

let calcular = document.querySelector('#botaoEnviar');
calcular.addEventListener('click', classificarPeso);
