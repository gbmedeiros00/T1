import Cliente from "../modelo/cliente";

export default class ListarTop5ClientesValor {
    private clientes: Cliente[];
    constructor(clientes: Cliente[]) {
        this.clientes = clientes;
    }
    public listar(): void {
        const clientesOrdenados = this.clientes
            .map(c => ({
                cliente: c,
                total: c.getProdutosConsumidos.reduce((soma, p) => soma + p.preco, 0) +
                       c.getServicosConsumidos.reduce((soma, s) => soma + s.preco, 0)
            }))
            .sort((a, b) => b.total - a.total)
            .slice(0, 5);

        console.log("\nTop 5 clientes por valor consumido:");
        clientesOrdenados.forEach((item, i) => {
            console.log(`${i + 1}. ${item.cliente.nome} - R$ ${item.total.toFixed(2)}`);
        });
    }
}