import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Cadastrar from "../cadastrar"
import Telefone from "../../modelo/telefone"

export default class CadastrarCliente extends Cadastrar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do cliente:`);
        console.log(`\n- - - - - - - - - `);

        let nome = this.entrada.receberTexto(`Digite o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Digite o nome social do cliente: `)
        let ddd = this.entrada.receberTexto(`Digite o DDD do telefone: `);
        let numeroTelefone = this.entrada.receberTexto(`Digite o numero de telefone: `);
        let telefone = new Telefone(ddd, numeroTelefone)
        let valor = this.entrada.receberTexto(`Digite o número do cpf: `);
        let data = this.entrada.receberTexto(`Digite a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente)
        cliente.getTelefones.push(telefone)

        console.log(`\nCadastro do cliente ${nome} foi concluído!\n`);
    }
}