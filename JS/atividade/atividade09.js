let valorProd = parseFloat(prompt("Valor Produto: "));
let cupom = prompt("Cupom Desconto: ");

let desconto = 0;

switch (cupom.toUpperCase()) {
    case "DESC1":
        desconto = 0.05;
        break;
    case "DESC2":
        desconto = 0.10;
        break;
    case "DESC3":
        desconto = 0.15;
        break;
    case "DESC4":
        desconto = 0.20;
        break;
    case "DESC5":
        desconto = 0.25;
        break;
    default:
        console.log("Cupom Inválido.");
        break;
}

let valorDesconto = valorProd * (1 - desconto);
alert("Valor Total: R$" + valorDesconto.toFixed(2));