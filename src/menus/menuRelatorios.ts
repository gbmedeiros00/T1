import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import ListarTop10ClientesValor from "../negocio/relatorioClientePorValorGasto"
import ListarTop10ClientesQuantidade from "../negocio/relatorioMaioresConsumidores"
import ListarMaisConsumidos from "../negocio/relatorioMaisConsumidos"
import ListarMaisConsumidosPorRaca from "../negocio/relatorioMaisConsumidosPorRaca"
import ListarMaisConsumidosPorTipo from "../negocio/relatorioMaisConsumidosPorTipo"

export default class RelatoriosMenu {
    clientes: Cliente[]
    constructor(clientes: Cliente[]) {
        this.clientes = clientes
    }

    open(): void {
        const entrada = new Entrada()
        let exec = true
        while (exec) {
            console.log("\n--- Menu Relatorios ---")
            console.log("1 - Top 10 Clientes por Valor Gasto")
            console.log("2 - Top 10 Clientes por Quantidade Consumida")
            console.log("3 - Produtos e Serviços Mais Consumidos (Geral)")
            console.log("4 - Produtos Mais Consumidos por Tipo de Pet")
            console.log("5 - Produtos Mais Consumidos por Raça de Pet")
            console.log("0 - Voltar")
            let opcao = entrada.receberNumero("Escolha uma opção: ")
            switch (opcao) {
                case 1:
                    new ListarTop10ClientesValor(this.clientes).listar()
                    break
                case 2:
                    new ListarTop10ClientesQuantidade(this.clientes).listar()
                    break
                case 3:
                    new ListarMaisConsumidos(this.clientes).listar()
                    break
                case 4:
                    new ListarMaisConsumidosPorTipo(this.clientes).listar()
                    break
                case 5:
                    new ListarMaisConsumidosPorRaca(this.clientes).listar()
                    break
                case 0:
                    exec = false
                    break
                default:
                    console.log("Opção inválida!")
            }
        }
    }
}