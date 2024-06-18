import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastrar from "../cadastrar";

export default class CadastrarServico extends Cadastrar {
    
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro de serviço`);
        console.log(`\n- - - - - - - - - `);

        let codigoServico = this.entrada.receberTexto(`Digite o código do serviço: `)
        let nomeServico = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let descricaoServico = this.entrada.receberTexto(`Digite a descrição do serviço: `);
        let precoServico = this.entrada.receberNumero(`Digite o preço do serviço: `);

        let servico = new Servico(codigoServico, nomeServico, descricaoServico, precoServico);
        this.servicos.push(servico)

        console.log(`\nCadastro concluído!\n`);
    }
}