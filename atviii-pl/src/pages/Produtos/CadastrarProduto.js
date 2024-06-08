
function CadastrarProduto({setCadastrando}){
    return(
        <div>
            <form className="containerConteudo">
                <h2 className="tituloCadastro">Dados do produto:</h2>

                <div className="input-cadastros">
                    <label className="labelInput">Nome:</label>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>

                <div className="input-cadastros">
                    <label className="labelInput">Valor:</label>
                    <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
                </div>
                <div className="form-botoes">
                    <button className="botaoCadastro" type="button" onClick={() => setCadastrando("")}>Voltar</button>
                    <button className="botaoCadastro" type="button">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastrarProduto