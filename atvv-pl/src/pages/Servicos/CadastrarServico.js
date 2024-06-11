import { useState } from "react";
import axios from "axios";
import CampoObrigatorio from "../../components/layout/CampoObrigatorio";

function CadastrarServico({setCadastrando}){
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');

    const [faltaValor, setFaltaValor] = useState('');
    const [faltaNome, setFaltaNome] = useState('');

    async function CadastrarServico() {
        console.log("Cadastrar Pet");
        try {
            const newData = {
                nome: nome,
                valor: valor,
            };
            console.log("Adicionando Servico", newData);
            await axios.post('http://localhost:8080/servicos_adicionar', newData);
            setCadastrando("");
        } catch (error) {
            console.error("Erro ao adicionar Servico:", error);
        }
    };

    return(
        <div>
            <form className="containerConteudo" onSubmit={(e) => { 
                e.preventDefault(); 
                if(nome && valor){
                    CadastrarServico(); 
                }  else {
                        if(!nome){
                            setFaltaNome(true)
                        } else {
                            setFaltaNome(false)
                        }
                        if(!valor){
                            setFaltaValor(true)
                        } else {
                            setFaltaValor(false)
                        }
                        
                    }
                }}>
                <h2 className="tituloCadastro">Dados do serviço:</h2>
                <div className="input-cadastros">
                    {!faltaNome ?(
                        <label className="labelInput">Nome do serviço:</label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Nome do serviço: </label>
                    )}
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome do serviço" 
                        aria-label="Nome do serviço" 
                        aria-describedby="basic-addon1" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="input-cadastros">
                    {!faltaValor ?(
                        <label className="labelInput">Valor do serviço:</label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Valor do serviço: </label>
                    )}
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Valor do serviço" 
                        aria-label="Valor do serviço" 
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

export default CadastrarServico