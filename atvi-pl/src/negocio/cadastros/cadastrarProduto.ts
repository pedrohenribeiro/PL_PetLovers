import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastrar from "../cadastrar";

export default class CadastrarProduto extends Cadastrar {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do produto`);
        console.log(`\n- - - - - - - - - `);

        let codigoProduto = this.entrada.receberTexto(`Digite o código do produto: `)
        let nomeProduto = this.entrada.receberTexto(`Digite o nome do produto: `)
        let descricaoProduto = this.entrada.receberTexto(`Digite a descrição do produto: `);
        let precoProduto = this.entrada.receberNumero(`Digite o preço do produto: `);

        let produto = new Produto(codigoProduto, nomeProduto, descricaoProduto, precoProduto);
        this.produtos.push(produto)

        console.log(`\nCadastro concluído!\n`);
    }
}