import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import ListaProduto from './listaProdutos';
import ListaServico from './listaServicos';
import ListaEstatisticas from './listasEstatisticas';
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroComprarServico from "./formularioCompraServico";
import FormularioCadastroComprarProduto from "./formularioCompraProduto";
import FormularioCadastroPets from "./formularioCadastroPets";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Produtos', 'Serviços','Clientes', 'Estatisticas', 'Comprar Servico', 'Comprar Produto','Cadastrar Cliente','Cadastrar Pet', 'Cadastrar Produto', 'Cadastrar Serviço']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        }else if (this.state.tela === 'Estatisticas') {
            return (
                <>
                    {barraNavegacao}
                    <ListaEstatisticas tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }else if (this.state.tela === 'Cadastrar Pet') {
            return (
                <>  
                    {barraNavegacao}
                    <FormularioCadastroPets tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Comprar Servico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroComprarServico tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Comprar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroComprarProduto tema="#e3f2fd" />
                </>
            )
        }
        
        
    }
}