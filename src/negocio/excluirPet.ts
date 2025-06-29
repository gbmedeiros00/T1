import Entrada from "../io/entrada"
import Pet from "../modelo/pet"

export default class ExcluirPet {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        this.pets = pets
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log(`\nExclusão de pet`)
        let nome = this.entrada.receberTexto(`Informe o nome do pet a ser excluído: `)
        let indice = this.pets.findIndex(pet => pet.getNome === nome)
        if (indice !== -1) {
            this.pets.splice(indice, 1)
            console.log(`Pet removido com sucesso!\n`)
        } else {
            console.log(`Pet não encontrado.\n`)
        }
    }
}