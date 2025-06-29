import Entrada from "../io/entrada"
import Servico from "../modelo/servico"

export default class ExcluirServico {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log(`\nExclusão de serviço`)
        let nome = this.entrada.receberTexto(`Informe o nome do serviço a ser excluído: `)
        let indice = this.servicos.findIndex(servico => servico.nome === nome)
        if (indice !== -1) {
            this.servicos.splice(indice, 1)
            console.log(`Serviço removido com sucesso!\n`)
        } else {
            console.log(`Serviço não encontrado.\n`)
        }
    }
}