import RegistrarConsumo from "../registrarConsumo";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class TopClientesPorValor {
    private registrarConsumo: RegistrarConsumo;

    constructor(registrarConsumo: RegistrarConsumo) {
        this.registrarConsumo = registrarConsumo;
    }

    public exibirTopClientesPorValor(): void {
        const topClientes = this.listarTopClientesPorValor();
        console.log("\nTop 5 clientes que mais consumiram em valor:");
        topClientes.forEach(([cliente, valorGasto], index) => {
            console.log(`${index + 1}. ${cliente.nome} - Valor gasto: R$${this.calcularValorFormatado(cliente)}`);
        });
        console.log();
    }
    private listarTopClientesPorValor(): [Cliente, number][] {
        const registro = this.registrarConsumo;
        const valorPorCliente = new Map<Cliente, number>();

        registro.listarTodosOsClientes().forEach(cliente => {
            const consumoPorItem = registro.listarConsumoPorCliente(cliente);
            if (consumoPorItem) {
                let valorTotalCliente = 0;
                consumoPorItem.forEach((quantidade, item) => {
                    valorTotalCliente += this.calcularPrecoTotal(item, quantidade);
                });
                valorPorCliente.set(cliente, valorTotalCliente);
            }
        });
        const topClientes: [Cliente, number][] = Array.from(valorPorCliente.entries()).sort((a, b) => b[1] - a[1]);
        return topClientes;
    }
    private calcularPrecoTotal(item: Produto | Servico, quantidade: number): number {
        if (item instanceof Produto) {
            return item.precoProduto * quantidade;
        } else if (item instanceof Servico) {
            return item.precoServico * quantidade;
        }
        return 0;
    }
    private calcularValorFormatado(cliente: Cliente): string {
        const topClientes = this.listarTopClientesPorValor();
        const valorGasto = topClientes.find(entry => entry[0] === cliente)?.[1] || 0;
        return valorGasto.toFixed(2); // Formata o valor para duas casas decimais
    }
}