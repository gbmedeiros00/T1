import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import CadastroServico from "../negocio/cadastroServicos"
import AtualizarServico from "../negocio/atualizarServicos"
import ExcluirServico from "../negocio/excluirServicos"
import ListagemServicos from "../negocio/listagemServicos"

export default class ServicoMenu {
    servicos: Servico[]
    constructor(servicos: Servico[]) {
        this.servicos = servicos
    }

    open(): void {
        const entrada = new Entrada()
        let exec = true
        while (exec) {
            console.log("\n--- Menu Serviço ---")
            console.log("1 - Cadastrar Serviço")
            console.log("2 - Listar Serviços")
            console.log("3 - Atualizar Serviço")
            console.log("4 - Excluir Serviço")
            console.log("0 - Voltar")
            let opcao = entrada.receberNumero("Escolha uma opção: ")
            switch (opcao) {
                case 1:
                    new CadastroServico(this.servicos).cadastrar()
                    break
                case 2:
                    new ListagemServicos(this.servicos).listar()
                    break
                case 3:
                    new AtualizarServico(this.servicos).atualizar()
                    break
                case 4:
                    new ExcluirServico(this.servicos).excluir()
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