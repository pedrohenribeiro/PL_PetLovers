import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form className="container">
                    <h3>Dados do Cliente:</h3>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Data de emissão do RG" aria-label="COF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="COF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Data de emissão do CPF" aria-label="COF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <button className="botaoCadastro" type="button">Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}