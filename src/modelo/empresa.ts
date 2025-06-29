import Cliente from "./cliente";
import Produto from "./produto";
import Servico from "./servico";
import Pet from "./pet";

export default class Empresa {
    private clientes: Cliente[] = [];
    private produtos: Produto[] = [];
    private servicos: Servico[] = [];
    private pets: Pet[] = [];

    public get getClientes(): Cliente[] {
        return this.clientes;
    }
    public get getProdutos(): Produto[] {
        return this.produtos;
    }
    public get getServicos(): Servico[] {
        return this.servicos;
    }
    public get getPets(): Pet[] {
        return this.pets;
    }
}