import Empresa from "../modelo/empresa"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"
import Pet from "../modelo/pet"
import CPF from "../modelo/cpf"

export default class Seeder {
    static inserirDadosAleatorios(empresa: Empresa): void {
        empresa.getProdutos.push(new Produto("Ração Premium", 120));
        empresa.getProdutos.push(new Produto("Coleira", 30));
        empresa.getProdutos.push(new Produto("Brinquedo", 25));

        empresa.getServicos.push(new Servico("Banho", 50));
        empresa.getServicos.push(new Servico("Tosa", 60));
        empresa.getServicos.push(new Servico("Consulta Veterinária", 150));

        const cliente1 = new Cliente("Maria Silva", "Mariazinha", new CPF("12345678900", new Date(2000, 1, 1)));
        const cliente2 = new Cliente("João Souza", "Joãozinho", new CPF("98765432100", new Date(1999, 5, 10)));
        empresa.getClientes.push(cliente1, cliente2);

        const pet1 = new Pet("Rex", "Vira-lata", "Macho", "Cachorro");
        const pet2 = new Pet("Mimi", "Persa", "Fêmea", "Gato");
        empresa.getPets.push(pet1, pet2);

        cliente1.getPets.push(pet1);
        cliente2.getPets.push(pet2);

        cliente1.adicionarProdutoConsumido(empresa.getProdutos[0]);
        cliente1.adicionarServicoConsumido(empresa.getServicos[0]);
        cliente2.adicionarProdutoConsumido(empresa.getProdutos[1]);
        cliente2.adicionarServicoConsumido(empresa.getServicos[1]);
    }
}