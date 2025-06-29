import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CadastroCliente from "../negocio/cadastroCliente"
import AtualizarCliente from "../negocio/atualizarCliente"
import ExcluirCliente from "../negocio/excluirCliente"
import ListagemClientes from "../negocio/listagemClientes"

export default class ClienteMenu {
    clientes: Cliente[]
    constructor(clientes: Cliente[]) {
        this.clientes = clientes
    }

    open(): void {
        const entrada = new Entrada()
        let exec = true
        while (exec) {
            console.log("\n--- Menu Cliente ---")
            console.log("1 - Cadastrar Cliente")
            console.log("2 - Listar Clientes")
            console.log("3 - Atualizar Cliente")
            console.log("4 - Excluir Cliente")
            console.log("0 - Voltar")
            let opcao = entrada.receberNumero("Escolha uma opção: ")
            switch (opcao) {
                case 1:
                    new CadastroCliente(this.clientes).cadastrar()
                    break
                case 2:
                    new ListagemClientes(this.clientes).listar()
                    break
                case 3:
                    new AtualizarCliente(this.clientes).atualizar()
                    break
                case 4:
                    new ExcluirCliente(this.clientes).excluir()
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