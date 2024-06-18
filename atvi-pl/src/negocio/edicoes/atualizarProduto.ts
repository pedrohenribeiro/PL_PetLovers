import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizar from "../atualizar";

export default class AtualizarProduto extends Atualizar {
    
    private produtos: Produto[];
    private entrada: Entrada;

    constructor(produtos: Produto[]) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada()
    }
    
    public atualizar(): void {

        console.log("\nAtualização de Produto:");
        
        const codigoProd = this.entrada.receberTexto("Digite o código do produto que deseja atualizar: ");
        const produto = this.encontrarProdutoPorCodigo(codigoProd);
        if (!produto) {
            console.log("\n Produto não encontrado.\n");
            return;
        }

        console.log("\nDados atuais do produto:\n");
        console.log(`Código do produto: ${produto.codigoProduto}`);
        console.log(`Nome do produto: ${produto.nomeProduto}`);
        console.log(`Descrição do produto: ${produto.descricaoProduto}`);
        console.log(`Preço do produto: ${produto.precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`);
        console.log("\n- - - - - - - - - -\n");
        console.log("\nNovos dados do produto:");

        const novoCodigoProduto = this.entrada.receberTexto("Novo código do produto: ");
        const novoNomeProduto = this.entrada.receberTexto("Novo nome do produto: ");
        const novoDescricaoProduto = this.entrada.receberTexto("Nova descrição do produto: ");
        const novoPrecoProduto = this.entrada.receberNumero("Novo preço do produto: ");

        produto.codigoProduto = novoCodigoProduto;
        produto.nomeProduto = novoNomeProduto;
        produto.descricaoProduto = novoDescricaoProduto;
        produto.precoProduto = novoPrecoProduto;

        console.log(`\nProduto ${novoCodigoProduto} atualizado com sucesso!\n`);
    } 
    public encontrarProdutoPorCodigo(codigo: string): Produto | undefined {
        return this.produtos.find(produto => produto.codigoProduto === codigo);
    }
}