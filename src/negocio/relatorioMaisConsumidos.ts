import Cliente from "../modelo/cliente";

export default class ListarMaisConsumidos {
    private clientes: Cliente[];
    constructor(clientes: Cliente[]) {
        this.clientes = clientes;
    }
    public listar(): void {
        const consumoProdutos: { [nome: string]: number } = {};
        const consumoServicos: { [nome: string]: number } = {};

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                consumoProdutos[produto.nome] = (consumoProdutos[produto.nome] || 0) + 1;
            });
            cliente.getServicosConsumidos.forEach(servico => {
                consumoServicos[servico.nome] = (consumoServicos[servico.nome] || 0) + 1;
            });
        });

        console.log("\nProdutos mais consumidos:");
        Object.entries(consumoProdutos)
            .sort((a, b) => b[1] - a[1])
            .forEach(([nome, qtd]) => console.log(`${nome}: ${qtd}`));

        console.log("\nServiços mais consumidos:");
        Object.entries(consumoServicos)
            .sort((a, b) => b[1] - a[1])
            .forEach(([nome, qtd]) => console.log(`${nome}: ${qtd}`));
    }
}