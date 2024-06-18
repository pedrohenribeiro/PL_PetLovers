import RegistrarConsumo from "../registrarConsumo";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class TopProdutosServicos {
    private registrarConsumo: RegistrarConsumo;

    constructor(registrarConsumo: RegistrarConsumo) {
        this.registrarConsumo = registrarConsumo;
    }

    public exibirTopProdutosServicos(): void {
        const topProdutosServicos = this.listarTopProdutosServicos();
        console.log("\nProdutos ou serviços mais consumidos:");
        topProdutosServicos.forEach((item, index) => {
            if (item[0] instanceof Produto) {
                console.log(`${index + 1}. Produto: ${item[0].nomeProduto} - Quantidade Consumida: ${item[1]}`);
            } else if (item[0] instanceof Servico) {
                console.log(`${index + 1}. Serviço: ${item[0].nomeServico} - Quantidade Consumida: ${item[1]}`);
            }
        console.log()
        });        
    }

    public listarTopProdutosServicos(): [Produto | Servico, number][] {
        const registro = this.registrarConsumo;
        const consumoPorItem = new Map<Produto | Servico, number>();

        registro.listarTodosOsClientes().forEach(cliente => {
            const consumoPorCliente = registro.listarConsumoPorCliente(cliente);
            if (consumoPorCliente) {
                consumoPorCliente.forEach((quantidade, item) => {
                    consumoPorItem.set(item, (consumoPorItem.get(item) || 0) + quantidade);
                });
            }
        });

        const topProdutosServicos = Array.from(consumoPorItem.entries()).sort((a, b) => b[1] - a[1]);
        return topProdutosServicos;
    }
}