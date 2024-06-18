import RegistrarConsumo from "../registrarConsumo";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class TopProdutosServicosPorTipoRaca {
    private registrarConsumo: RegistrarConsumo;

    constructor(registrarConsumo: RegistrarConsumo) {
        this.registrarConsumo = registrarConsumo;
    }
    public listarTopProdutosServicosPorTipoRaca(): void {
        const consumoPorTipoRaca = this.calcularConsumoPorTipoRaca();

        console.log("\nProdutos ou serviços mais consumidos por tipo e raça de pets:");
        consumoPorTipoRaca.forEach((consumo, tipoRaca) => {
            console.log(`Tipo/Raça: ${tipoRaca}`);
            consumo.forEach((quantidade, item) => {
                console.log(`- ${item instanceof Produto ? "Produto" : "Serviço"}: ${item instanceof Produto ? item.getNomeProduto : item.getNomeServico} - Quantidade Consumida: ${quantidade}`);
                console.log();
            });
        });
    }
    private calcularConsumoPorTipoRaca(): Map<string, Map<Produto | Servico, number>> {
        const consumoPorTipoRaca = new Map<string, Map<Produto | Servico, number>>();
 
        this.registrarConsumo.listarTodosOsClientes().forEach(cliente => {
            const consumoPorItem = this.registrarConsumo.listarConsumoPorCliente(cliente);
            if (consumoPorItem) {
           
                const petsDoCliente = cliente.getPets;

                if (petsDoCliente.length > 0) {
                    petsDoCliente.forEach(pet => {
                        const tipo = pet.getTipo; 
                        const raca = pet.getRaca; 
                        const tipoRaca = `${tipo}/${raca}`; 

                        if (!consumoPorTipoRaca.has(tipoRaca)) {
                            consumoPorTipoRaca.set(tipoRaca, new Map<Produto | Servico, number>());
                        }

                        const consumoAtual = consumoPorTipoRaca.get(tipoRaca) ?? new Map<Produto | Servico, number>();
                        consumoPorItem.forEach((quantidade, item) => {
                            consumoAtual.set(item, (consumoAtual.get(item) ?? 0) + quantidade);
                        });
                        consumoPorTipoRaca.set(tipoRaca, consumoAtual);
                    });
                }
            }
        });
        return consumoPorTipoRaca;
    }
}