import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";

export default class CadastroProdutosConsumidos {
    private clientes: Cliente[];
    private produtos: Produto[];
    private entrada: Entrada;

    constructor(clientes: Cliente[], produtos: Produto[]) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log("\nRegistro de consumo de produto");
        let cpf = this.entrada.receberTexto("Informe o CPF do cliente: ");
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpf);
        if (!cliente) {
            console.log("Cliente não encontrado.");
            return;
        }
        let nomeProduto = this.entrada.receberTexto("Nome do produto: ");
        let produto = this.produtos.find(p => p.nome === nomeProduto);
        if (produto) {
            cliente.adicionarProdutoConsumido(produto);
            console.log("Produto registrado!");
        } else {
            console.log("Produto não encontrado.");
        }
    }
}