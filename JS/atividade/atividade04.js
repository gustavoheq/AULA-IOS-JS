/*
Crie um variável preço e atribua a ela um valor numérico. Em seguida, crie um variável
desconto e atribua a ela um valor 0.2, representando a porcentagem (20%) de desconto
que você deseja aplicar. Por fim, crie uma variável Preço final que use as variáveis preço e
desconto para calcular o preço com desconto e imprima o resultado no console
*/

let desconto = 0.2
let valorProd = Number(prompt("Qual o valor do produto> "))
let valorFinal = valorProd - (desconto * valorProd)
alert(`O valor final do produto é de: ${valorFinal}`)

// let preco = 100;
// let desconto = 0.2;
// let preçoFinal = preco (preço * desconto);
// console.log(preçoFinal);
// alert(`O Resultado é: ${preçoFinal}`)