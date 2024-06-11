import InputMask from "react-input-mask";
import axios from "axios";
import { useState } from 'react';
import { IoIosRemoveCircleOutline } from "react-icons/io";

function CadastrarCliente({setCadastrando}){
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [email, setEmail] = useState('');  
    const [telefones, setTelefones] = useState([]); 
    
    const [cpf, setCpf] = useState('');
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState('');
    const [dadosRG, setDadosRG] = useState([{ rgCliente: '', ufRgCliente: '', dataEmissaoRgCliente: '' }]);
    const [rg, setRg] = useState('');
    const [dataEmissaoRg, setDataEmissaoRg] = useState('');
    const [UfRg, setUfRg] = useState('');
    
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');  
    const [bairro, setBairro] = useState('');  
    const [rua, setRua] = useState('');  
    const [numero, setNumero] = useState('');  
    const [codigoPostal, setCodigoPostal] = useState('');  
    const [complemento, setComplemento] = useState(''); 
    
    async function cadastrarCliente() {
        console.log("Cadastrar Cliente");
        try {
            const newData = {
                nome: nomeCompleto,
                nomeSocial: nomeSocial,
                email: email,
                cpf: cpf,
                dataEmissaoCpf: dataEmissaoCpf,
                estado: estado,
                cidade: cidade,
                bairro: bairro,
                rua: rua,
                numero: numero,
                cep: codigoPostal,
                complemento: complemento,
            };
            console.log("Adicionando Cliente", newData);
            await axios.post('http://localhost:8080/clientes_adicionar', newData);

            //modificar
            const responseCliente = await axios.get("http://localhost:8080/clientes");
            const dataCliente = responseCliente.data;

            let idCliente = dataCliente.length;
            console.log(dataCliente.length)

            for (let telefone of telefones){
                const newDataTelefone = {
                    idCliente: idCliente,
                    telefone: telefone,
                }
                await axios.post('http://localhost:8080/telefone_adicionar', newDataTelefone);
            }

            for (let dado of dadosRG) {
                const newDataDadosRG = {
                    idCliente: idCliente,
                    rgCliente: dado.rgCliente,
                    ufRgCliente: dado.ufRgCliente,
                    dataEmissaoRgCliente: dado.dataEmissaoRgCliente,
                };
                try {
                    await axios.post('http://localhost:8080/rg_adicionar', newDataDadosRG);
                } catch (error) {
                    console.error('Erro ao cadastrar RG:', error);
                }
            }

            setCadastrando("");
        } catch (error) {
            console.error("Erro ao adicionar pet:", error);
        }
    };
    const adicionarTelefone = (e) => {
        e.preventDefault();
        setTelefones([...telefones, ""]);
    };

     const handleChangeTelefone = (e, index) => {
        telefones[index] = e.target.value;
        setTelefones([...telefones]);
    };
    
    const removerTelefone = (position) => {
        setTelefones([...telefones.filter((_, index)=> index !== position)]);
    }; 

    const adicionarDadosRgs = (e) => {
        e.preventDefault();
        setDadosRG([...dadosRG, { rgCliente: '', ufRgCliente: '', dataEmissaoRgCliente: '' }]);
    };    

    const atualizarDadosRgs = (e, index) => {
        const { name, value } = e.target;
        const updatedDadosRG = [...dadosRG];
        updatedDadosRG[index][name] = value;
        setDadosRG(updatedDadosRG);
    };    
    
    const removerDadosRgs = (index) => {
        index = 1;
        const updatedDadosRG = dadosRG.filter((_, i) => i !== index);
        setDadosRG(updatedDadosRG);
    }; 

    
    return(
        <div>
            <form className="containerConteudoClientes" onSubmit={(e) => { e.preventDefault(); cadastrarCliente(); }}>

                <div className="topoClientes">
                    <div className="dadosCliente">
                        <h2 className="tituloCadastro">Dados do Cliente:</h2>
                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="Nome">Nome Completo:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite seu nome completo" 
                                aria-label="Nome" 
                                aria-describedby="basic-addon1" 
                                value={nomeCompleto}
                                onChange={(e) => setNomeCompleto(e.target.value)}
                            />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="Nome Social">Nome Social:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite seu nome social" 
                                aria-label="Nome social" 
                                aria-describedby="basic-addon1" 
                                value={nomeSocial}
                                onChange={(e) => setNomeSocial(e.target.value)}
                            />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="E-mail">E-mail:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="E-mail" 
                                aria-label="E-mail" 
                                aria-describedby="basic-addon1" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="Telefone">Telefone:</label>

{/*                             <InputMask
                                type="text"
                                className="form-control"
                                placeholder="(00) 00000-0000"
                                aria-describedby="basic-addon1" 
                                mask="(99) 99999-9999"  
                                value={telefone}
                                onChange={event => setTelefone(event.target.value)}
                            /> */}
                            <div className="field">
                                <button type="button" onClick={adicionarTelefone}>
                                    Adicionar Telefone
                                </button> 
                            </div>
                            {
                            telefones.map((telefone, index) => (
                                <div className="field" key={index}>
                                    <label for={`telefone-${index+1}`}>{`Telefone ${index+1}:`}</label>
                                    <div className="telefone">
                                        <InputMask
                                            type="text"
                                            mask="(99) 99999-9999"
                                            id={`telefone-${index+1}`}
                                            placeholder="(00) 00000-0000"
                                            value={telefone}
                                            onChange={(e) => handleChangeTelefone(e, index)}
                                        />
                                        <button type="button" class="botao-deletar" onClick={() => {removerTelefone(index)}}>
                                            <IoIosRemoveCircleOutline 
                                                size={30} 
                                                title="Apagar"
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))
                        } 
                        </div>
                    </div>

                    <div className="dadosPessoais">
                        <h2 className="tituloCadastro">Dados Pessoais:</h2>
                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="CPF">CPF:</label>
                            <InputMask
                                type="text"
                                className="form-control"
                                placeholder="000.000.000-00"
                                aria-describedby="basic-addon1"
                                mask="999.999.999-99"
                                value={cpf}
                                onChange={event => setCpf(event.target.value)}
                            />
                        </div>
                        <div className="input-cadastros" htmlFor="DataEmissaoCpf">
                            <label className="labelInput">Data de emissão do CPF:</label>
                            <InputMask
                                type="text"
                                className="form-control"
                                placeholder="__/__/____"
                                aria-describedby="basic-addon1"
                                mask="99/99/9999"
                                value={dataEmissaoCpf}
                                onChange={event => setDataEmissaoCpf(event.target.value)}
                            />
                        </div>
                        <div className="field">
                                <button type="button" class="btn btn-light" onClick={adicionarDadosRgs}> Adicionar Dados do(s) RG(s)</button>           
                        </div>
                        
                        {dadosRG.map((item, index) => (
                            <div className="input-cadastros" key={index}>
                                <div className="rg">
                                    <div className="camposRG">
                                        <label className="labelInput" htmlFor="RG">RG:</label>
                                        <InputMask
                                        id="RG"
                                        mask="99.999.999-9"
                                        placeholder="00.000.000-0"
                                        name="rgCliente"
                                        value={item.rgCliente}
                                        onChange={(e) => atualizarDadosRgs(e, index)}
                                        type="text"
                                        />
                                    </div>
                                    <div className="camposRG">
                                        <label className="labelInput" htmlFor="RG">UF do RG:</label>
                                        <input
                                        id="ufRG"
                                        type="text"
                                        className="form-control"
                                        placeholder="UF do RG"
                                        aria-label="E-mail"
                                        aria-describedby="basic-addon1"
                                        name="ufRgCliente"
                                        value={item.ufRgCliente}
                                        onChange={(e) => atualizarDadosRgs(e, index)}
                                        />
                                    </div>
                                </div>
                                <div className="input-cadastros">
                                    <label className="labelInput" htmlFor="Data de emissão do RG">Data de Emissao do RG:</label>
                                    <InputMask
                                        id="dataEmissaoRG"
                                        type="text"
                                        className="form-control"
                                        placeholder="__/__/____"
                                        mask="99/99/9999"
                                        name="dataEmissaoRgCliente"
                                        value={item.dataEmissaoRgCliente}
                                        onChange={(e) => atualizarDadosRgs(e, index)}
                                    />
                                </div>
                            </div>
                            ))}


                    </div>
                </div>


                <div className="dadosEndereco">

                    <h2 className="tituloCadastro">Dados do Endereço:</h2>
                    <div className="primeiro">

                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="estado">Estado:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Estado" 
                                aria-label="NoEstadome" 
                                aria-describedby="basic-addon1" 
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                            />
                        </div>

                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="cidade">Cidade:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Cidade" 
                                aria-label="Cidade" 
                                aria-describedby="basic-addon1" 
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className="segundo">   
                        <div className="input-cadastros">
                                <label className="labelInput" htmlFor="bairro">Bairro:</label>
                                <input 
                                    id="bairro" 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Bairro" 
                                    aria-label="Bairro" 
                                    aria-describedby="basic-addon1" 
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="rua">Rua:</label>
                            <input 
                                type="text"
                                className="form-control" 
                                placeholder="Rua" 
                                aria-label="Rua" 
                                aria-describedby="basic-addon1"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="Numero">Número:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Número" 
                                aria-label="Número" 
                                aria-describedby="basic-addon1" 
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                            />
                        </div>
                    </div>  
                    <div className="terceiro">
                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="codigoPostal">Código Postal:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="CEP" 
                                aria-label="CEP" 
                                aria-describedby="basic-addon1" 
                                value={codigoPostal}
                                onChange={(e) => setCodigoPostal(e.target.value)}
                            />
                        </div>
                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="complemento">Complemento:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Complemento" 
                                aria-label="Complemento" 
                                aria-describedby="basic-addon1" 
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}
                            />
                        </div>

                    </div>         
                    <div className="form-botoes">
                        <button className="botaoCadastro" type="button" onClick={() => setCadastrando("")}>Voltar</button>
                        <button className="botaoCadastro" type="submit">Cadastrar</button>
                    </div>
                    
                </div>


            </form>
            
        </div>
    )
}

export default CadastrarCliente