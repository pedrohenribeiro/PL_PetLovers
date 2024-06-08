import { useState } from "react";
import axios from "axios";

function CadastrarProduto({setCadastrando}){
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');

    async function cadastrarProduto() {
        console.log("Cadastrar Pet");
        try {
            const newData = {
                nome: nome,
                valor: valor,
            };
            console.log("Adicionando Produto", newData);
            await axios.post('http://localhost:8080/produtos_adicionar', newData);
            setCadastrando("");
        } catch (error) {
            console.error("Erro ao adicionar Produto:", error);
        }
    };
    
    return(
        <div>
            <form className="containerConteudo" onSubmit={(e) => { e.preventDefault(); cadastrarProduto(); }}>
                <h2 className="tituloCadastro">Dados do produto:</h2>

                <div className="input-cadastros">
                    <label className="labelInput">Nome do produto:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome do produto" 
                        aria-label="Nome" 
                        aria-describedby="basic-addon1" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="input-cadastros">
                    <label className="labelInput">Valor do produto:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Valor do produto" 
                        aria-label="Valor do produto" 
                        aria-describedby="basic-addon1" 
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                </div>
                <div className="form-botoes">
                    <button className="botaoCadastro" type="button" onClick={() => setCadastrando("")}>Voltar</button>
                    <button className="botaoCadastro" type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastrarProduto