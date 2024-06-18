import Deletar from "../deletar";
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";


export default class DeletarCliente extends Deletar {
    
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    public deletar(): void {

        const cpfCliente = this.entrada.receberTexto("Digite o CPF do cliente que deseja excluir: ");
        const indiceCliente = this.encontrarIndiceClientePorCPF(cpfCliente);

        if (indiceCliente === -1) {
            console.log(`\nCpf ${cpfCliente}não foi encontrado.\n`);
            return;
        }

        this.clientes.splice(indiceCliente, 1);
        console.log(`\nO cliente ${cpfCliente}excluído com sucesso!\n`);
    }
    private encontrarIndiceClientePorCPF(cpf: string): number {
  
        return this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf);
    }
}