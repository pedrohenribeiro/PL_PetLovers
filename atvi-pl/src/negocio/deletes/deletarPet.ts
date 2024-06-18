import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";

export default class DelartePet extends Deletar {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public deletar(): void {

        console.log("\nExclusão de Pet:");
        
        const cpfCliente = this.entrada.receberTexto("Digite o CPF do cliente e o nome do pet que deseja apagar: ");
        const [cpf, nomePet] = cpfCliente.split(" ");

        const clienteIndex = this.encontrarClientePorCPF(cpf);
        
        if (clienteIndex === -1) {
            console.log(`\nCliente não encontrado.\n`);
            return;
        }

        const cliente = this.clientes[clienteIndex];
        const petIndex = cliente.getPets.findIndex(pet => pet.getNome === nomePet);

        if (petIndex === -1) {
            console.log("\nPet não encontrado.\n");
            return;
        }
        cliente.getPets.splice(petIndex, 1);
        console.log(`\nO pet ${nomePet} foi excluído com sucesso!\n`);
    }
    private encontrarClientePorCPF(cpf: string): number {
        return this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf);
    }
}