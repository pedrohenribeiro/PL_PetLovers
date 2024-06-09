import React, { useState, useEffect } from 'react';
import CardProduto from "./CardPet";
import axios from "axios";
import SemDados from "../SemDados";
import CardPet from './CardPet';

function Pets(){

    const [itemPet, setItemPet] = useState([]);
    const [editando, setEditando] = useState("");

    const [idEditando, setIdEditando] = useState("");
    const [nomeEditando, setNomeEditando] = useState("");
    const [tipoEditando, setTipoEditando] = useState("");
    const [racaEditando, setRacaEditando] = useState("");
    const [generoEditando, setGeneroEditando] = useState("");
    const [donoEditando, setDonoEditando] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const responseServico = await axios.get("http://localhost:8080/pets");
            const dataServico = responseServico.data;

            const processedData = dataServico.map((itemPet) => ({
                ...itemPet
            }));
            setItemPet(processedData); // Armazena os dados no estado
            console.log(processedData);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }
    
    const DeletarPet = async (id) => {
        try {
            console.log(id)
            await axios.delete(`http://localhost:8080/pets/${id}`);
            console.log("Pet Deletado!")
            fetchData();
        } catch (error) {
          console.error("Erro ao apagar servico:", error);
        }
      };

    async function EditarPet(){
        try {
            console.log('Chamando função EditarPet');

            const newData = {
                id:idEditando,
                nome: nomeEditando,
                tipo: tipoEditando,
                raca: racaEditando,
                genero: generoEditando,
                dono: donoEditando,
            };

            await axios.put('http://localhost:8080/pets_editar', newData);
            console.log("Dados atualizados com sucesso!");
            fetchData()
            setEditando("")
        } catch (error) {
          console.error('Erro ao salvar os dados:', error);
        }
    };

    async function AbrirModal(numero,nome,tipo,raca,genero,dono){
        setIdEditando(numero)
        setNomeEditando(nome)
        setTipoEditando(tipo)
        setRacaEditando(raca)
        setGeneroEditando(genero)
        setDonoEditando(dono)
        setEditando("editando")
    }

    return(
        <div className="conjuntoCard">
            {editando === "editando" && (
                <div>
                    <form className="containerConteudo" onSubmit={(e) => { e.preventDefault(); EditarPet(); }}>
                        <h2 className="tituloCadastro">Dados do pet {idEditando}:</h2>
                        <div className="input-cadastros">
                            <label className="labelInput">Nome do pet:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome do pet" 
                                aria-label="Nome do pet" 
                                aria-describedby="basic-addon1" 
                                value={nomeEditando}
                                onChange={(e) => setNomeEditando(e.target.value)}
                            />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput">Tipo de pet:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Tipo de pet" 
                                aria-label="Tipo de pet" 
                                aria-describedby="basic-addon1" 
                                value={tipoEditando}
                                onChange={(e) => setTipoEditando(e.target.value)}
                            />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput">Tipo de pet:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Tipo de pet" 
                                aria-label="Tipo de pet" 
                                aria-describedby="basic-addon1" 
                                value={racaEditando}
                                onChange={(e) => setRacaEditando(e.target.value)}
                            />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput">Tipo de pet:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Tipo de pet" 
                                aria-label="Tipo de pet" 
                                aria-describedby="basic-addon1" 
                                value={generoEditando}
                                onChange={(e) => setGeneroEditando(e.target.value)}
                            />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput">Tipo de pet:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Tipo de pet" 
                                aria-label="Tipo de pet" 
                                aria-describedby="basic-addon1" 
                                value={donoEditando}
                                onChange={(e) => setDonoEditando(e.target.value)}
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
                itemPet.length > 0 ? (
                    itemPet.map((pet, index) => (
                        <CardPet 
                            key={index} 
                            numero={pet.id}
                            nome={pet.nome} 
                            tipo={pet.tipo}
                            raca={pet.raca}
                            genero={pet.genero}
                            dono={pet.dono}
                            DeletarPet={DeletarPet}
                            AbrirModal={AbrirModal}
                        />
                    ))
                ) : (
                    <SemDados titulo="Pet" />
                )
            )}
        </div>
    )
}

export default Pets