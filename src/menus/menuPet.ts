import Entrada from "../io/entrada"
import Pet from "../modelo/pet"
import CadastroPet from "../negocio/cadastroPet"
import AtualizarPet from "../negocio/atualizarPet"
import ExcluirPet from "../negocio/excluirPet"
import ListagemPets from "../negocio/listagemPets"

export default class PetMenu {
    pets: Pet[]
    constructor(pets: Pet[]) {
        this.pets = pets
    }

    open(): void {
        const entrada = new Entrada()
        let exec = true
        while (exec) {
            console.log("\n--- Menu Pet ---")
            console.log("1 - Cadastrar Pet")
            console.log("2 - Listar Pets")
            console.log("3 - Atualizar Pet")
            console.log("4 - Excluir Pet")
            console.log("0 - Voltar")
            let opcao = entrada.receberNumero("Escolha uma opção: ")
            switch (opcao) {
                case 1:
                    new CadastroPet(this.pets).cadastrar()
                    break
                case 2:
                    new ListagemPets(this.pets).listar()
                    break
                case 3:
                    new AtualizarPet(this.pets).atualizar()
                    break
                case 4:
                    new ExcluirPet(this.pets).excluir()
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