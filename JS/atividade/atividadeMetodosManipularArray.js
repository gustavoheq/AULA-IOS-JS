var clientes = [];

do {
    var nomeCliente = prompt("Insira o nome do cliente:");

    clientes.push(nomeCliente);

    var resposta = prompt("Deseja inserir mais algum nome? (sim/não)").toLowerCase();
} while (resposta === 'sim');

if (clientes.length > 0) {
    alert("Lista de clientes:\n" + clientes.join("\n"));
}
