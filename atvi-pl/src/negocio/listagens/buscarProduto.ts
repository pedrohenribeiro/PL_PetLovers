import Buscar from "../buscar";
import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class BuscarrProduto extends Buscar {
    
    private produtos: Produto[];
    private entrada: Entrada;
    constructor(produtos: Produto[]) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada()
    }
    public buscar(): void {

        console.log("\nBuscar de Produto:");
        const codigoProd = this.entrada.receberTexto("Digite o código do produto que deseja buscar: ");
        const produto = this.encontrarProdutoPorCodigo(codigoProd);

        if (!produto) {
            console.log("\nProduto não encontrado.\n");
            return;
        }
        console.log("\nDados do produto:\n");
        console.log(`Código do produto: ${produto.codigoProduto}`);
        console.log(`Nome do produto: ${produto.nomeProduto}`);
        console.log(`Descrição do produto: ${produto.descricaoProduto}`);  
        console.log(`Preço do produto: ${produto.precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`);
    }
    public encontrarProdutoPorCodigo(codigo: string): Produto | undefined {
        return this.produtos.find(produto => produto.getCodigoProduto === codigo);
    }
}
    
