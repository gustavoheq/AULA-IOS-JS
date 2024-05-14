// Criar um array para armazenar os nomes dos clientes
var clientes = [];

// Loop para permitir que o usuário insira múltiplos nomes de cliente
do {
    // Solicitar ao usuário que insira o nome do cliente
    var nomeCliente = prompt("Por favor, insira o nome do cliente:");

    // Adicionar o nome do cliente ao array de clientes
    clientes.push(nomeCliente);

    // Perguntar ao usuário se deseja inserir mais algum nome do cliente
    var resposta = prompt("Deseja inserir mais algum nome de cliente? (sim/não)").toLowerCase();
} while (resposta === 'sim');

// Exibir os nomes dos clientes armazenados no array
if (clientes.length > 0) {
    alert("Lista de clientes:\n" + clientes.join("\n"));
} else {
    alert("Nenhum cliente foi inserido.");
}
