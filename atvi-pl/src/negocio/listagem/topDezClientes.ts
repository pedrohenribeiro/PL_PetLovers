import RegistrarConsumo from "../registrarConsumo";
import Cliente from "../../modelo/cliente";

export default class TopDezClientes {
    private registrarConsumo: RegistrarConsumo;

    constructor(registrarConsumo: RegistrarConsumo) {
        this.registrarConsumo = registrarConsumo;
    }

    public exibirTopClientes(): void {
        const topClientes = this.listarTopDezClientes();
        console.log("Top 10 clientes que mais consumiram em quantidade:");
        topClientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nome}`);
        });
    }
    private listarTopDezClientes(): Cliente[] {
        const registro = this.registrarConsumo;
        const consumoPorCliente = new Map<Cliente, number>();

        registro.listarTodosOsClientes().forEach(cliente => {
            const consumoPorItem = registro.listarConsumoPorCliente(cliente);
            if (consumoPorItem) {
                let consumoTotalCliente = 0;
                consumoPorItem.forEach((quantidade, _) => {
                    consumoTotalCliente += quantidade;
                });
                consumoPorCliente.set(cliente, consumoTotalCliente);
            }
        });
        const topClientes = Array.from(consumoPorCliente.entries()).sort((a, b) => b[1] - a[1]);
        return topClientes.slice(0, 10).map(entry => entry[0]);
    }
}