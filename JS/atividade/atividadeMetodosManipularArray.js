var clientes = [];

do {
    var nomeCliente = prompt("Por favor, insira o nome do cliente:");

    clientes.push(nomeCliente);

    var resposta = prompt("Deseja inserir mais algum nome de cliente? (sim/não)").toLowerCase();
} while (resposta === 'sim');

if (clientes.length > 0) {
    alert("Lista de clientes:\n" + clientes.join("\n"));
} else {
    alert("Nenhum cliente foi inserido.");
}
