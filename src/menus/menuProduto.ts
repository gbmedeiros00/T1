import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import CadastroProduto from "../negocio/cadastroProduto"
import AtualizarProduto from "../negocio/atualizarProduto"
import ExcluirProduto from "../negocio/excluirProduto"
import ListagemProdutos from "../negocio/listagemProduto"

export default class ProdutoMenu {
    produtos: Produto[]
    constructor(produtos: Produto[]) {
        this.produtos = produtos
    }

    open(): void {
        const entrada = new Entrada()
        let exec = true
        while (exec) {
            console.log("\n--- Menu Produto ---")
            console.log("1 - Cadastrar Produto")
            console.log("2 - Listar Produtos")
            console.log("3 - Atualizar Produto")
            console.log("4 - Excluir Produto")
            console.log("0 - Voltar")
            let opcao = entrada.receberNumero("Escolha uma opção: ")
            switch (opcao) {
                case 1:
                    new CadastroProduto(this.produtos).cadastrar()
                    break
                case 2:
                    new ListagemProdutos(this.produtos).listar()
                    break
                case 3:
                    new AtualizarProduto(this.produtos).atualizar()
                    break
                case 4:
                    new ExcluirProduto(this.produtos).excluir()
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