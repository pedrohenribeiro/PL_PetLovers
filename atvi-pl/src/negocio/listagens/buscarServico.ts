import Buscar from "../buscar";
import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";

export default class BuscarServico extends Buscar {
    
    private servicos: Servico[];
    private entrada: Entrada;
    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada()
    }
    public buscar(): void {
        console.log("\nBuscar de Serviço:");

        const codigoServ = this.entrada.receberTexto("Digite o código do serviço que deseja buscar: ");
        const servico = this.encontrarServicoPorCodigo(codigoServ);
        
        if (!servico) {
            console.log("\nServiço não encontrado.\n");
            return;
        }

        console.log("\nDados do serviço:\n");
        console.log(`Código do serviço: ${servico.codigoServico}`);
        console.log(`Nome do serviço: ${servico.nomeServico}`);
        console.log(`Descrição do serviço: ${servico.descricaoServico}`); 
        console.log(`Preço do serviço: ${servico.precoServico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`);    
    }
    public encontrarServicoPorCodigo(codigo: string): Servico | undefined {
        return this.servicos.find(servico => servico.codigoServico === codigo);
    }
}
    