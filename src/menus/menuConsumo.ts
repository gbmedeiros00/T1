import Entrada from '../io/entrada'
import Empresa from '../modelo/empresa'
import CadastroProdutosConsumidos from '../negocio/cadastroProdutosConsumidos'
import CadastroServicosConsumidos from '../negocio/cadastroServicosConsumidos'

export default class ConsumoMenu {
    empresa: Empresa
    constructor(empresa: Empresa) {
        this.empresa = empresa
    }

    open(): void {
        let opcao
        let entrada = new Entrada()
        while (true) {
            console.log('--------------- Consumo ---------------')
            console.log(`1 - Registrar compra de produto`)
            console.log(`2 - Registrar contratação de serviços`)
            console.log("\n0 - Voltar")

            opcao = entrada.receberNumero("Escolha uma opção: ")
            if (opcao === 0) {
                console.clear()
                break
            }

            switch (opcao) {
                case 1:
                    new CadastroProdutosConsumidos(this.empresa.getClientes, this.empresa.getProdutos).cadastrar()
                    break
                case 2:
                    new CadastroServicosConsumidos(this.empresa.getClientes, this.empresa.getServicos).cadastrar()
                    break
                default:
                    console.log("Opção inválida!")
            }
        }
    }
}