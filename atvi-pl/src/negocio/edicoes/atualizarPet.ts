import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Atualizar from "../atualizar";

export default class AtualizarPet extends Atualizar {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("\nAtualização de Pet:");

        const cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente para o qual deseja atualizar o pet: ");
        const cliente = this.encontrarClientePorCPF(cpfCliente);
        
        if (!cliente) {
            console.log("\nCliente não encontrado.\n");
            return;
        }
        console.log("\nPets do Cliente:");
        cliente.getPets.forEach((pet, index) => {
            console.log(`${index + 1}. Nome: ${pet.getNome}, Tipo: ${pet.getTipo}, Raça: ${pet.getRaca}, Gênero: ${pet.getGenero}`);
        });

        const indicePet = this.entrada.receberNumero("Digite o número do pet que deseja atualizar: ");
        const pet = cliente.getPets[indicePet - 1];

        if (!pet) {
            console.log("\nPet não encontrado.\n");
            return;
        }

        console.log("\nDados atuais do pet:");
        console.log(`Nome: ${pet.getNome}`);
        console.log(`Tipo: ${pet.getTipo}`);
        console.log(`Raça: ${pet.getRaca}`);
        console.log(`Gênero: ${pet.getGenero}`);

        console.log("\n- - - - - - - - - -\n");
        console.log("\nNovos dados do pet:");
        const novoNome = this.entrada.receberTexto("Digite o novo nome do pet: ");
        const novoTipo = this.entrada.receberTexto("Digite o novo tipo do pet: ");
        const novaRaca = this.entrada.receberTexto("Digite a nova raça do pet: ");
        const novoGenero = this.entrada.receberTexto("Digite o novo gênero do pet: ");

        pet.setNome(novoNome);
        pet.setTipo(novoTipo);
        pet.setRaca(novaRaca);
        pet.setGenero(novoGenero);

        console.log(`\nPet ${novoNome} atualizado com sucesso!\n`);
    }
    public encontrarClientePorCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}
    
