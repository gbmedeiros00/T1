import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import ClienteMenu from "../menus/menuCliente";
import ProdutoMenu from "../menus/menuProduto";
import ServicoMenu from "../menus/menuServico";
import PetMenu from "../menus/menuPet";
import ConsumoMenu from "../menus/menuConsumo";
import RelatoriosMenu from "../menus/menuRelatorios";
import Seeder from "../seeder/seeder";

console.clear();
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias!`);
let empresa = new Empresa();

Seeder.inserirDadosAleatorios(empresa);

let execucao = true;
let entrada = new Entrada();

while (execucao) {
    console.log(`\n=== Menu Principal ===`);
    console.log(`1 - Clientes`);
    console.log(`2 - Produtos`);
    console.log(`3 - Serviços`);
    console.log(`4 - Pets`);
    console.log(`5 - Consumo`);
    console.log(`6 - Relatorios`);
    console.log(`0 - Sair`);

    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            new ClienteMenu(empresa.getClientes).open();
            break;
        case 2:
            new ProdutoMenu(empresa.getProdutos).open();
            break;
        case 3:
            new ServicoMenu(empresa.getServicos).open();
            break;
        case 4:
            new PetMenu(empresa.getPets).open();
            break;
        case 5:
            new ConsumoMenu(empresa).open();
            break;
        case 6:
            new RelatoriosMenu(empresa.getClientes).open();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais!`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}

export { empresa }