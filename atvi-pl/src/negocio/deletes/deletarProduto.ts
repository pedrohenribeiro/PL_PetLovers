import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Deletar from "../deletar";

export default class DeletarProduto extends Deletar {
    
    private produtos: Produto[];
    private entrada: Entrada;

    constructor(produtos: Produto[]) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada()
    }
    public deletar(): void {

        const codigoProduto = this.entrada.receberTexto("Digite o código do produto que deseja apagar: ");
        const produto = this.encontrarProdutoPorCodigo(codigoProduto);

        if (produto === -1) {
            console.log(`\nProduto ${codigoProduto} não encontrado.\n`);
            return;
        }

        this.produtos.splice(produto, 1);
        console.log(`\nO produto ${codigoProduto} foi excluído com sucesso!\n`);
    }
    private encontrarProdutoPorCodigo(codigo: string): number {
        return this.produtos.findIndex(produto => produto.codigoProduto === codigo);
    }      
}
    
