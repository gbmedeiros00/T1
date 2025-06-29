import Entrada from "../io/entrada"
import Pet from "../modelo/pet"

export default class AtualizarPet {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        this.pets = pets
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nAtualização de pet`)
        let nome = this.entrada.receberTexto(`Informe o nome do pet a ser atualizado: `)
        let pet = this.pets.find(pet => pet.getNome === nome)
        if (pet) {
            let novoNome = this.entrada.receberTexto(`Novo nome (${pet.getNome}): `)
            let novoTipo = this.entrada.receberTexto(`Novo tipo (${pet.getTipo}): `)
            let novaRaca = this.entrada.receberTexto(`Nova raça (${pet.getRaca}): `)
            let novoGenero = this.entrada.receberTexto(`Novo gênero (${pet.getGenero}): `)
            if (novoNome) (pet as any).nome = novoNome
            if (novoTipo) (pet as any).tipo = novoTipo
            if (novaRaca) (pet as any).raca = novaRaca
            if (novoGenero) (pet as any).genero = novoGenero
            console.log(`Pet atualizado com sucesso!\n`)
        } else {
            console.log(`Pet não encontrado.\n`)
        }
    }
}