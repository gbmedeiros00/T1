import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"

export default class AtualizarCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nAtualização de cliente`)
        let cpf = this.entrada.receberTexto(`Informe o CPF do cliente a ser atualizado: `)
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf)
        if (cliente) {
            let novoNome = this.entrada.receberTexto(`Novo nome (${cliente.nome}): `)
            let novoNomeSocial = this.entrada.receberTexto(`Novo nome social (${cliente.nomeSocial}): `)
            if (novoNome) cliente.nome = novoNome
            if (novoNomeSocial) cliente.nomeSocial = novoNomeSocial
            console.log(`Cliente atualizado com sucesso!\n`)
        } else {
            console.log(`Cliente não encontrado.\n`)
        }
    }
}