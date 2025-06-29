import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"

export default class ExcluirCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log(`\nExclusão de cliente`)
        let cpf = this.entrada.receberTexto(`Informe o CPF do cliente a ser excluído: `)
        let indice = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf)
        if (indice !== -1) {
            this.clientes.splice(indice, 1)
            console.log(`Cliente removido com sucesso!\n`)
        } else {
            console.log(`Cliente não encontrado.\n`)
        }
    }
}