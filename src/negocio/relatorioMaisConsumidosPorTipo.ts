import Cliente from "../modelo/cliente";

export default class ListarMaisConsumidosPorTipo {
    private clientes: Cliente[];
    constructor(clientes: Cliente[]) {
        this.clientes = clientes;
    }
    public listar(): void {
        const consumoPorTipo: { [tipo: string]: number } = {};

        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                const tipo = pet.getTipo;
                const totalConsumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
                consumoPorTipo[tipo] = (consumoPorTipo[tipo] || 0) + totalConsumo;
            });
        });

        Object.entries(consumoPorTipo)
            .sort((a, b) => b[1] - a[1])
            .forEach(([tipo, qtd]) => {
                console.log(`Tipo: ${tipo} - Consumo: ${qtd}`);
            });
    }
}