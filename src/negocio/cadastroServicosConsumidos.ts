import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";

export default class CadastroServicosConsumidos {
    private clientes: Cliente[];
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(clientes: Cliente[], servicos: Servico[]) {
        this.clientes = clientes;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log("\nRegistro de consumo de serviço");
        let cpf = this.entrada.receberTexto("Informe o CPF do cliente: ");
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpf);
        if (!cliente) {
            console.log("Cliente não encontrado.");
            return;
        }
        let nomeServico = this.entrada.receberTexto("Nome do serviço: ");
        let servico = this.servicos.find(s => s.nome === nomeServico);
        if (servico) {
            cliente.adicionarServicoConsumido(servico);
            console.log("Serviço registrado!");
        } else {
            console.log("Serviço não encontrado.");
        }
    }
}