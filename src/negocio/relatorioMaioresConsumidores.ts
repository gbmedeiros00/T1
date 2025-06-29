import Cliente from "../modelo/cliente";

export default class ListarTop10ClientesQuantidade {
    private clientes: Cliente[];
    constructor(clientes: Cliente[]) {
        this.clientes = clientes;
    }
    public listar(): void {
        const clientesOrdenados = this.clientes
            .map(c => ({
                cliente: c,
                total: c.getProdutosConsumidos.length + c.getServicosConsumidos.length
            }))
            .sort((a, b) => b.total - a.total)
            .slice(0, 10);

        console.log("\nTop 10 clientes por quantidade de consumo:");
        clientesOrdenados.forEach((item, i) => {
            console.log(`${i + 1}. ${item.cliente.nome} - ${item.total} itens`);
        });
    }
}