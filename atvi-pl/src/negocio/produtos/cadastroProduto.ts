import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "../cadastro"

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>){
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log('\nInicio do Cadastro de um novo produto');

        let codigoProduto = this.entrada.receberTexto(`Por favor informe o código do produto: `)
        let nomeProduto = this.entrada.receberTexto('Digite o nome do nobo produto: ');
        let produto = new Produto();
        produto.nome = nomeProduto;
        this.produtos.push(produto);
    }
}