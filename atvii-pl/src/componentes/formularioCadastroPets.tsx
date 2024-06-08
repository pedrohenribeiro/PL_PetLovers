import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroPets extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form className="container">
                    <h3>Dados do Pet:</h3>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <input type="text" className="form-control" placeholder="CPF do Dono" aria-label="CPF do Dono" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-cadastros">
                        <button className="botaoCadastro" type="button">Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}