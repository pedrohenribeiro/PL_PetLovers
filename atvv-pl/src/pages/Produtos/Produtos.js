import React, { useState, useEffect } from 'react';
import CardProduto from "./CardProduto";
import axios from "axios";
import SemDados from "../SemDados";
function Produtos(){
    const [itemProduto, setItemProduto] = useState([]);
    const [editando, setEditando] = useState("");

    const [idEditando, setIdEditando] = useState("");
    const [nomeEditando, setNomeEditando] = useState("");
    const [valorEditando, setValorEditando] = useState("");

    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const responseProduto = await axios.get("http://localhost:8080/produtos");
            const dataProduto = responseProduto.data;

            const processedData = dataProduto.map((itemProduto) => ({
                ...itemProduto
            }));
            setItemProduto(processedData);
            console.log(processedData);

            setCarregando(false);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }
    
    const deletarProduto = async (id) => {
        try {
            console.log(id)
            await axios.delete(`http://localhost:8080/produtos/${id}`);
            console.log("Produto Deletado!")
            fetchData();
        } catch (error) {
          console.error("Erro ao apagar produto:", error);
        }
      };

      async function EditarProduto(){
        try {
            console.log('Chamando função EditarProduto');

            const newData = {
                id:idEditando,
                nome: nomeEditando,
                valor: valorEditando,
            };

            await axios.put('http://localhost:8080/produtos_editar', newData);
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
        <div className='conteudoPagina'>
            <h1 className='tituloConteudoPagina'>Dados de Produtos</h1>
            <div className="conjuntoCard">
                {editando === "editando" && (
                    <div>
                        <form className="containerConteudo" onSubmit={(e) => { e.preventDefault(); EditarProduto(); }}>
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
                        </form>
                    </div>
                )}
                {editando !== "editando" && (
                    carregando ? (
                        <div></div>
                    ) : (
                        itemProduto.length > 0 ? (
                            itemProduto.map((produto, index) => (
                                <CardProduto 
                                    key={index} 
                                    numero={produto.id}
                                    nome={produto.nome} 
                                    valor={produto.valor}
                                    deletarProduto={deletarProduto}
                                    abrirModal={abrirModal}
                                />
                            ))
                        ) : (
                            <SemDados titulo="Produto" />
                        )
                    )
                )}
            </div>
        </div>
    )
}

export default Produtos