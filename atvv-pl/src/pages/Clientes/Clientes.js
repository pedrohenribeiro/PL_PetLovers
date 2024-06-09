import React, { useState, useEffect } from 'react';
import CardCliente from "./CardCliente";
import axios from "axios";
import SemDados from "../SemDados";

function Clientes(){
    const [chartClientes, setChartClientes] = useState([]);
    const [editando, setEditando] = useState("");
    const [idEditando, setIdEditando] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const responseClientes = await axios.get("http://localhost:8080/clientes");
            const dataClientes = responseClientes.data;

            const processedData = dataClientes.map((itemCliente) => ({
                ...itemCliente
            }));
            setChartClientes(processedData); // Armazena os dados no estado
            console.log(processedData);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    const DeletarCliente = async (id) => {
        try {
            console.log(id)
            await axios.delete(`http://localhost:8080/produtos/${id}`);
            console.log("Produto Deletado!")
            fetchData();
        } catch (error) {
          console.error("Erro ao apagar produto:", error);
        }
      };

      async function EditarCliente(){
        try {
            console.log('Chamando função EditarCliente');

            const newData = {
                id:idEditando,

            };

            await axios.put('http://localhost:8080/produtos_editar', newData);
            console.log("Dados atualizados com sucesso!");
            fetchData()
            setEditando("")
        } catch (error) {
          console.error('Erro ao salvar os dados:', error);
        }
      };

    async function abrirModal(id){
        setIdEditando(id)
        setEditando("editando")
    }

    return(
<div className="conjuntoCard">
            {editando === "editando" && (
                <div>
{/*                     <form className="containerConteudo" onSubmit={(e) => { e.preventDefault(); EditarCliente(); }}>
                        <h2 className="tituloCadastro">Dados do produto {idEditando}:</h2>
                        <div className="input-cadastros">
                            <label className="labelInput">Nome do produto:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome do produto" 
                                aria-label="Nome do produto" 
                                aria-describedby="basic-addon1" 
                                value={nomeEditando}
                                onChange={(e) => setNomeEditando(e.target.value)}
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
                                value={valorEditando}
                                onChange={(e) => setValorEditando(e.target.value)}
                            />
                        </div>
                        <div className="form-botoes">
                            <button className="botaoCadastro" type="button" onClick={() => setEditando("")}>Voltar</button>
                            <button className="botaoCadastro" type="submit">Editar</button>
                        </div>
                    </form> */}
                </div>
            )}
            {editando !== "editando" && (
                chartClientes.length > 0 ? (
                    chartClientes.map((cliente, index) => (
                        <CardCliente 
                            key={index} 
                            id={cliente.id}
                            nome={cliente.nome}
                            nomeSocial={cliente.nomeSocial}
                            email={cliente.email}
                            cpf={cliente.cpf}
                            dataEmissaoCpf={cliente.dataEmissaoCpf}
                            estado={cliente.estado}
                            DeletarCliente={DeletarCliente}
                            abrirModal={abrirModal}
                        />
                    ))
                ) : (
                    <SemDados titulo="Produto" />
                )
            )}
        </div>
    )
}

export default Clientes