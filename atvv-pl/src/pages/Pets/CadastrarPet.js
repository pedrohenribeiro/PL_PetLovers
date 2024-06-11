import { useState, useEffect } from "react";
import axios from "axios";
import InputMask from 'react-input-mask';
import CampoObrigatorio from "../../components/layout/CampoObrigatorio";

function CadastrarPet({ setCadastrando }) {
    const [cpfCliente, setCpfCliente] = useState('');
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [raca, setRaca] = useState('');
    const [genero, setGenero] = useState('');

    const [chartClientes, setChartClientes] = useState([]);
    const [cliente, setCliente] = useState('');


    const [faltaNome, setFaltaNome] = useState(false);
    const [faltaTipo, setFaltaTipo] = useState(false);
    const [faltaRaca, setfaltaRaca] = useState(false);
    const [faltaGenero, setFaltaGenero] = useState(false);
    const [faltaCpfDono, setFaltaCpfDono] = useState(false);
    const [faltaNomeDono, setfaltaNomeDono] = useState(false);


    async function FetchClientes() {
        try {
            const response = await axios.get('http://localhost:8080/clientes');
            const clientes = response.data;

        const dadosClientes = clientes.map(item => ({
            value: item.nome,
            cpf: item.cpf,
            label: `${item.nome}`,
        }));

            setChartClientes(dadosClientes);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    useEffect(() => {
        FetchClientes();
    }, []);

    async function cadastrarPet() {
        console.log("Cadastrar Pet");
        try {
            const newData = {
                nome: nome,
                tipo: tipo,
                raca: raca,
                genero: genero,
                nomeDono: cliente,
                cpfDono: cpfCliente,
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
            <form className="containerConteudo" onSubmit={(e) => { 
                e.preventDefault(); 
                if(cliente && tipo && raca && genero && cliente && cpfCliente){
                    cadastrarPet();
                }  else {
                        if(!nome){
                            setFaltaNome(true)
                        } else {
                            setFaltaNome(false)
                        }
                        if(!tipo){
                            setFaltaTipo(true)
                        } else {
                            setFaltaTipo(false)
                        }
                        if(!raca){
                            setfaltaRaca(true)
                        } else {
                            setfaltaRaca(false)
                        }
                        if(!genero){
                            setFaltaGenero(true)
                        } else {
                            setFaltaGenero(false)
                        }
                        if(!cliente){
                            setfaltaNomeDono(true)
                        } else {
                            setfaltaNomeDono(false)
                        }
                        if(!cpfCliente){
                            setFaltaCpfDono(true)
                        } else {
                            setFaltaCpfDono(false)
                        }
                    }
                }}>
                <h2 className="tituloCadastro">Dados do Pet:</h2>
                <div className="input-cadastros">
                    {!faltaNome ?(
                        <label className="labelInput">Nome do pet:</label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Nome do pet: </label>
                    )}
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
                    {!faltaTipo ?(
                        <label className="labelInput">Tipo:</label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Tipo: </label>
                    )}
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
                     {!faltaRaca ?(
                        <label className="labelInput">Raça:</label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Raça: </label>
                    )}
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
                    {!faltaGenero ?(
                        <label className="labelInput">Gênero:</label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Gênero: </label>
                    )}
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
                    {!faltaCpfDono ?(
                        <label className="labelInput">Cliente:</label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Cliente: </label>
                    )}
                    
                      <select value={cliente} onChange={(event) => {
                        setCliente(event.target.value); 
                        setCpfCliente(event.target.selectedOptions[0].getAttribute("data-cpf"));
                      }}>
                        <option value="">Selecione um cliente</option>
                        {chartClientes.map((cliente) => (
                          <option key={cliente.value} value={cliente.value} data-cpf={cliente.cpf}>{cliente.label} - {cliente.cpf}</option>
                        ))}
                      </select>
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