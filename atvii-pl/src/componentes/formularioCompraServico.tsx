import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroComprarServico extends Component<props> {

    render() {
        return (
            <div className="container-fluid">
                <form className="container">
                    <h4>Comprar Servico:</h4>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Nome do Servico" aria-label="Nome do Servico" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Valor total" aria-label="ValorTotal" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Data" aria-label="Data" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <button className="botaoCadastro" type="button">Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}