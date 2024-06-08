
function CadastrarPet({setCadastrando}){
    return(
        <div>
            <form className="containerConteudo">
                <h2 className="tituloCadastro">Dados do Pet:</h2>
                <div className="input-cadastros">
                    <label className="labelInput">Nome do pet:</label>
                    <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Tipo:</label>
                    <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Raça:</label>
                    <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Gênero:</label>
                    <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">CPF do Dono:</label>
                    <input type="text" className="form-control" placeholder="CPF do Dono" aria-label="CPF do Dono" aria-describedby="basic-addon1" />
                </div>
                <div className="form-botoes">
                    <button className="botaoCadastro" type="button" onClick={() => setCadastrando("")}>Voltar</button>
                    <button className="botaoCadastro" type="button">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastrarPet