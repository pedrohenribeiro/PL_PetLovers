import { useState } from "react";
import axios from "axios";
import InputMask from 'react-input-mask';

function CadastrarPet({ setCadastrando }) {
    const [cpfDono, setCpfDono] = useState('');
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [raca, setRaca] = useState('');
    const [genero, setGenero] = useState('');


    async function cadastrarPet() {
        console.log("Cadastrar Pet");
        try {
            const newData = {
                nome: nome,
                tipo: tipo,
                raca: raca,
                genero: genero,
                dono: cpfDono,
            };
            console.log("Adicionando Pet", newData);
            await axios.post('http://localhost:8080/pets_adicionar', newData);
            setCadastrando("");
        } catch (error) {
            console.error("Erro ao adicionar pet:", error);
        }
    };

    return (
        <div>
            <form className="containerConteudo" onSubmit={(e) => { e.preventDefault(); cadastrarPet(); }}>
                <h2 className="tituloCadastro">Dados do Pet:</h2>
                <div className="input-cadastros">
                    <label className="labelInput">Nome do pet:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome do pet"
                        aria-label="Nome do pet"
                        aria-describedby="basic-addon1"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Tipo:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tipo"
                        aria-label="Tipo"
                        aria-describedby="basic-addon1"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Raça:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Raça" 
                        aria-label="Raça" 
                        aria-describedby="basic-addon1" 
                        value={raca}
                        onChange={(e) => setRaca(e.target.value)}
                    />
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">Gênero:</label>
                    <select 
                        name="genero" 
                        id="genero" 
                        value={genero} 
                        onChange={event => 
                        setGenero(event.target.value)}
                    >
                        <option value="">Selecione o gênero</option>
                        <option value="Macho">Macho</option>
                        <option value="Fêmea">Fêmea</option>
                    </select>
                </div>
                <div className="input-cadastros">
                    <label className="labelInput">CPF do Dono:</label>
                    <InputMask
                        className="form-control"
                        placeholder="CPF do Dono" 
                        aria-label="CPF do Dono" 
                        aria-describedby="basic-addon1" 
                        mask="999.999.999-99"
                        value={cpfDono}
                        onChange={event => setCpfDono(event.target.value)}
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

export default CadastrarPet