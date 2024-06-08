
function CadastrarCliente({setCadastrando}){
    return(
        <div>
            <form className="containerConteudo">
                <h2 className="tituloCadastro">Dados do Cliente:</h2>
                <div className="input-cadastros">
                    <label className="labelInput">Nome:</label>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Nome Social:</label>
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">RG:</label>
                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Data de emissão do RG:</label>
                    <input type="text" className="form-control" placeholder="Data de emissão do RG" aria-label="COF" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">CPF:</label>
                    <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Data de emissão do CPF:</label>
                    <input type="text" className="form-control" placeholder="Data de emissão do CPF" aria-label="COF" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">E-mail:</label>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="form-botoes">
                    <button className="botaoCadastro" type="button" onClick={() => setCadastrando("")}>Voltar</button>
                    <button className="botaoCadastro" type="button">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastrarCliente