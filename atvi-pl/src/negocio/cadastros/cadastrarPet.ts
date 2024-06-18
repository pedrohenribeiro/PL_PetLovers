import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Cadastrar from "../cadastrar";

export default class CadastrarPet extends Cadastrar {
    private clientes : Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do pet`);
        console.log(`\n- - - - - - - - - `);

        let cpfDono = this.entrada.receberTexto(`Digite o CPF do dono(a): `)
        let nome = this.entrada.receberTexto(`Digite o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Digite o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Digite a raça do pet: `)
        let genero = this.entrada.receberTexto(`Digite o gênero do pet `)

        const cliente = this.encontrarClientePorCPF(cpfDono);
        if (cliente) {
            let novoPet = new Pet(nome, raca, genero, tipo)
            cliente.getPets.push(novoPet)
            console.log(`\nCadastro do pet ${nome} foi concluído!\n`);
        } else {
            console.log(`\nCPF ${cpfDono} não encontrado.\n`);
        }
    }
    public encontrarClientePorCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}