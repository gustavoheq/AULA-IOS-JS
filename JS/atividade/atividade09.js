let valorProd = Number(prompt("Preço do Produto: "))
let desconto = prompt("Codigo de promoção: ")

// let codigoPromocional = (prompt("Qual o codigo de promoção: "))
// let valorProd = 1000;
// let desconto = 10;

switch (precoOriginal.toUpperCase()) {
    case "DESC1":
        desconto: 0.05;
        break;
    case "DESC2":
        desconto: 0.10;
        break;
    case "DESC3":
        desconto: 0.15;
        break;
    case "DESC4":s
        desconto: 0.20;
        break;
    case "DESC5":
        desconto: 0.25;
        break;
    default:
        console.log("Não é um cupom válido");
        break;
}


// let valorCOMDesconto = valorProd - (valorProd * desconto);

// alert ("Valor do Produto: R$" + valorProd);
// alert ("Valor com o desconto R$" + valorCOMDesconto);

const precoComDesconto = precoOriginal - (precoOriginal * desconto);
alert (`Desconto: ${desconto * 100}%`);
alert (`Preço Original: R$ ${ precoOriginal.toFixed(2)}`);
alert (`Preço incluindo com desconto: R$ ${precoComDesconto.toFixed(2)}`);

const codigo = prompt("Informe o seu código da promoção (DESC1, DESC2, DESC3, DESC4 ou DESC5: )");
const preco = parseFloat(prompt("Informe o preço do produto: "));

aplicarDesconto(codigo, preco);