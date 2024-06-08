"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const produto_1 = __importDefault(require("../../modelo/produto"));
const cadastro_1 = __importDefault(require("../cadastro"));
class CadastroProduto extends cadastro_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log('\nInicio do Cadastro de um novo produto');
        let codigoProduto = this.entrada.receberTexto(`Por favor informe o código do produto: `);
        let nomeProduto = this.entrada.receberTexto('Digite o nome do nobo produto: ');
        let produto = new produto_1.default();
        produto.nome = nomeProduto;
        this.produtos.push(produto);
    }
}
exports.default = CadastroProduto;
