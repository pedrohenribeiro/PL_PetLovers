import CardServico from "./CardServico";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import SemDados from "../SemDados";

function Servicos(){
    const [itemServico, setItemServico] = useState([]);
    const [editando, setEditando] = useState("");

    const [idEditando, setIdEditando] = useState("");
    const [nomeEditando, setNomeEditando] = useState("");
    const [valorEditando, setValorEditando] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const responseServico = await axios.get("http://localhost:8080/servicos");
            const dataServico = responseServico.data;

            const processedData = dataServico.map((itemServico) => ({
                ...itemServico
            }));
            setItemServico(processedData); // Armazena os dados no estado
            console.log(processedData);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    async function deletarServico(id){
        try {
            console.log(id)
            await axios.delete(`http://localhost:8080/servicos/${id}`);
            console.log("Servico Deletado!")
            fetchData();
        } catch (error) {
          console.error("Erro ao apagar servico:", error);
        }
    };

    async function EditarServico(){
        try {
            console.log('Chamando função EditarServico');

            const newData = {
                id:idEditando,
                nome: nomeEditando,
                valor: valorEditando,
            };

            await axios.put('http://localhost:8080/servicos_editar', newData);
            console.log("Dados atualizados com sucesso!");
            fetchData()
            setEditando("")
        } catch (error) {
          console.error('Erro ao salvar os dados:', error);
        }
      };

    async function abrirModal(id,nome,valor){
        setIdEditando(id)
        setNomeEditando(nome)
        setValorEditando(valor)
        setEditando("editando")
    }

    return(
        <div className="conjuntoCard">
            {editando === "editando" && (
                <div>
                    <form className="containerConteudo" onSubmit={(e) => { e.preventDefault(); EditarServico(); }}>
                        <h2 className="tituloCadastro">Dados do serviço {idEditando}:</h2>
                        <div className="input-cadastros">
                            <label className="labelInput">Nome do serviço:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome do serviço" 
                                aria-label="Nome do serviço" 
                                aria-describedby="basic-addon1" 
                                value={nomeEditando}
                                onChange={(e) => setNomeEditando(e.target.value)}
                            />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput">Valor do serviço:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Valor do serviço" 
                                aria-label="Valor do serviço" 
                                aria-describedby="basic-addon1" 
                                value={valorEditando}
                                onChange={(e) => setValorEditando(e.target.value)}
                            />
                        </div>
                        <div className="form-botoes">
                            <button className="botaoCadastro" type="button" onClick={() => setEditando("")}>Voltar</button>
                            <button className="botaoCadastro" type="submit">Editar</button>
                        </div>
                    </form>
                </div>
            )}
            
            {editando !== "editando" && (
                itemServico.length > 0 ? (
                    itemServico.map((servico, index) => (
                        <CardServico 
                            key={index} 
                            numero={servico.id}
                            nome={servico.nome} 
                            valor={servico.valor}
                            deletarServico={deletarServico}
                            abrirModal={abrirModal}
                        />
                    ))
                ) : (
                    <SemDados titulo="Serviço" />
                )
            )}
        </div>
    )
}
export default Servicos