import Cliente from "../modelo/cliente";

export default class ListarMaisConsumidosPorRaca {
    private clientes: Cliente[];
    constructor(clientes: Cliente[]) {
        this.clientes = clientes;
    }
    public listar(): void {
        const consumoPorRaca: { [raca: string]: number } = {};

        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                const raca = pet.getRaca;
                const totalConsumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
                consumoPorRaca[raca] = (consumoPorRaca[raca] || 0) + totalConsumo;
            });
        });

        Object.entries(consumoPorRaca)
            .sort((a, b) => b[1] - a[1])
            .forEach(([raca, qtd]) => {
                console.log(`Raça: ${raca} - Consumo: ${qtd}`);
            });
    }
}