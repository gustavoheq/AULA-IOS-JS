let valorProduto = parseFloat(prompt("Valor do produto:"));

let codigo = prompt("Cupom de desconto:");

let desconto = 0;

switch (codigo.toUpperCase()) {
    case "DESC1":
        desconto = 0.05;
        alert("DESC1. Desconto de 5% aplicado.");
        break;
    case "DESC2":
        desconto = 0.1;
        alert("DESC2. Desconto de 10% aplicado.");
        break;
    case "DESC3":
        desconto = 0.15;
        alert("DESC3. Desconto de 15% aplicado.");
        break;
    case "DESC4":
        desconto = 0.2;
        alert("DESC4. Desconto de 20% aplicado.");
        break;
    case "DESC5":
        desconto = 0.25;
        alert("DESC5. Desconto de 25% aplicado.");
        break;
    default:
        alert("Cupom inválido.");
}

let valorDesconto = valorProduto * (1 - desconto);

alert("Valor do produto: R$" + valorProduto.toFixed(2) + "\nValor desconto: R$" + valorDesconto.toFixed(2));