
import Entrada from "../io/entrada"
import Produto from "../modelo/produto"

export default class AtualizarProduto {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nAtualização de produto`)
        let nome = this.entrada.receberTexto(`Informe o nome do produto a ser atualizado: `)
        let produto = this.produtos.find(produto => produto.nome === nome)
        if (produto) {
            let novoNome = this.entrada.receberTexto(`Novo nome (${produto.nome}): `)
            let novoPreco = this.entrada.receberTexto(`Novo preço (${produto.preco}): `)
            if (novoNome) produto.nome = novoNome
            if (novoPreco) produto.preco = Number(novoPreco)
            console.log(`Produto atualizado com sucesso!\n`)
        } else {
            console.log(`Produto não encontrado.\n`)
        }
    }
}