import Buscar from "../buscar";
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class BuscarCliente extends Buscar {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    public buscar(): void {
        console.log("\nBuscar de Cliente:");

        const cpfCliente = this.entrada.receberTexto("Digite o CPF do cliente que deseja buscar: ");

        const cliente = this.encontrarClientePorCPF(cpfCliente);
        if (!cliente) {
            console.log(`\nO cliente ${cpfCliente} não encontrado.\n`);
            return;
        }
        console.log("\nDados do cliente:");
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome Social: ${cliente.nomeSocial}`);
        if (cliente.getTelefones.length > 0){
            console.log(`Telefone: ` + cliente.getTelefones[0].getNumero)
        }
        console.log(`CPF: ${cliente.getCpf.getValor}`);
        console.log(`Data de Emissão do CPF: ${cliente.getCpf.getDataEmissao} \n`);
    }
    public encontrarClientePorCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}