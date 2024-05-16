function converterParaEuro() {
    var valorEmReal = parseFloat(prompt("Digite valor do Real:"));
    var taxaCambioEuro = 5.58; 
    var valorEmEuro = valorEmReal / taxaCambioEuro;

    alert("R$" + valorEmReal.toFixed(2) + " equivale a aproximadamente em Euros €" + valorEmEuro.toFixed(2));
}

converterParaEuro();