import Listar from "../listar";
import Cliente from "../../modelo/cliente";

export default class ListarClientes extends Listar {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            if (cliente.getTelefones.length > 0){
                console.log(`Telefone: ` + cliente.getTelefones[0].getNumero)
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}