import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Deletar from "../deletar";

export default class DeletarServico extends Deletar {
    
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada()
    }
    public deletar(): void {

        const codigoServico = this.entrada.receberTexto("Digite o código do serviço que deseja apagar: ");
        const servico = this.encontrarServicoPorCodigo(codigoServico);

        if (servico === -1) {
            console.log(`\nServiço ${codigoServico} não encontrado.\n`);
            return;
        }
      
        this.servicos.splice(servico, 1);
        console.log(`\nO servico ${codigoServico} foi excluído com sucesso!\n`);
    }
    private encontrarServicoPorCodigo(codigo: string): number {
        return this.servicos.findIndex(servico => servico.codigoServico === codigo);
    }    
}