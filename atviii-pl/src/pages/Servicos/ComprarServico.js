function ComprarServico({setComprando}){
    return (
        <div className="container-fluid">
            <form className="containerConteudo">
                <h2 className="tituloCadastro">Comprar Servico:</h2>
                <div className="input-cadastros">
                    <label className="labelInput">CPF do cliente:</label>
                    <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                <label className="labelInput">Nome do Servico:</label>
                    <input type="text" className="form-control" placeholder="Nome do Servico" aria-label="Nome do Servico" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Quantidade:</label>
                    <input type="text" className="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Valor total:</label>
                    <input type="text" className="form-control" placeholder="Valor total" aria-label="ValorTotal" aria-describedby="basic-addon1" />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Data:</label>
                    <input type="text" className="form-control" placeholder="Data" aria-label="Data" aria-describedby="basic-addon1" />
                </div>
                <div className="form-botoes">
                    <button className="botaoCadastro" type="button" onClick={() => setComprando("")}>Voltar</button>
                    <button className="botaoCadastro" type="button">Comprar</button>
                </div>
            </form>
        </div>
    )
}
export default ComprarServico