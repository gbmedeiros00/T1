import Entrada from "../io/entrada"
import Produto from "../modelo/produto"

export default class ExcluirProduto {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log(`\nExclusão de produto`)
        let nome = this.entrada.receberTexto(`Informe o nome do produto a ser excluído: `)
        let indice = this.produtos.findIndex(produto => produto.nome === nome)
        if (indice !== -1) {
            this.produtos.splice(indice, 1)
            console.log(`Produto removido com sucesso!\n`)
        } else {
            console.log(`Produto não encontrado.\n`)
        }
    }
}