import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizar from "../atualizar";

export default class AtualizarServico extends Atualizar {
    
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log("\nAtualização de Serviço:");
        
        const codigoServ = this.entrada.receberTexto("Digite o código do serviço que deseja atualizar: ");
       
        const servico = this.encontrarServicoPorCodigo(codigoServ);
        if (!servico) {
            console.log("\n Serviço não encontrado.\n");
            return;
        }

        console.log("\nDados atuais do serviço:\n");

        console.log(`Código do serviço: ${servico.codigoServico}`);
        console.log(`Nome do serviço: ${servico.nomeServico}`);
        console.log(`Descrição do serviço: ${servico.descricaoServico}`);
        console.log(`Preço do serviço: ${servico.precoServico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`);
        console.log("\n- - - - - - - - - -\n");
        console.log("\nNovos dados do serviço:");

        const novoCodigoServico = this.entrada.receberTexto("Novo código do serviço: ");
        const novoNomeServico = this.entrada.receberTexto("Novo nome do serviço: ");
        const novoDescricaoServico = this.entrada.receberTexto("Nova descrição do serviço: ");
        const novoPrecoServico = this.entrada.receberNumero("Novo preço do serviço: ");

        servico.codigoServico = novoCodigoServico;
        servico.nomeServico = novoNomeServico;
        servico.descricaoServico = novoDescricaoServico;
        servico.precoServico = novoPrecoServico;
        
        console.log(`\nServiço ${novoCodigoServico} atualizado com sucesso!\n`);
    } 
    public encontrarServicoPorCodigo(codigo: string): Servico | undefined {
        return this.servicos.find(servico => servico.codigoServico === codigo);
    }
}
    
