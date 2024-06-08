import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroServico extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form className="container">
                    <h3 className="titulo">Dados do serviço:</h3>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Código do serviço" aria-label="Código do serviço" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <button className="botaoCadastro" type="button" >Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}