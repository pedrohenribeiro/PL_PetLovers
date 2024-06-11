import React, { useState, useEffect } from 'react';
import InputMask from "react-input-mask";
import CardCliente from "./CardCliente";
import axios from "axios";
import SemDados from "../SemDados";

function Clientes(){
    const [chartClientes, setChartClientes] = useState([]);

    const [editando, setEditando] = useState("");
    const [idEditando, setIdEditando] = useState("");
    const [nomeEditando, setNomeEditando] = useState("");
    const [nomeSocialEditando, setNomeSocialEditando] = useState("");
    const [cpfEditando, setCpfEditando] = useState("");
    const [emailEditando, setEmailEditando] = useState("");
    const [telefoneEditando, setTelefoneEditando] = useState([]);
    const [dataEmissaoCpfEditando, setDataEmissaoCpfEditando] = useState("");
    const [RgsEditando, setRgsEditando] = useState(""); 

    const [estadoEditando, setEstadoEditando] = useState("");
    const [cidadeEditando, setCidadeEditando] = useState("");
    const [bairroEditando, setBairroEditando] = useState("");
    const [ruaEditando, setRuaEditando] = useState("");
    const [numeroEditando, setNumeroEditando] = useState("");
    const [cepEditando, setCepEditando] = useState("");
    const [complementoEditando, setComplementoEditando] = useState("");
    
    const [chartDataTelefone, setChartDataTelefone] = useState([]);
    const [chartDataRg, setChartDataRg] = useState([]);

    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const responseClientes = await axios.get("http://localhost:8080/clientes");
            const dataClientes = responseClientes.data;



            const responseTelefone = await axios.get("http://localhost:8080/telefones");
            const dataTelefone = responseTelefone.data;
            console.log(dataTelefone);

            setChartDataTelefone(dataTelefone);

            const responseRg = await axios.get("http://localhost:8080/rgs");
            const dataRg = responseRg.data;
            console.log(dataTelefone);

            setChartDataRg(dataRg);



            const processedData = dataClientes.map((itemCliente) => ({
                ...itemCliente
            }));
            setChartClientes(processedData);
            setCarregando(false);
            console.log(processedData);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    const DeletarCliente = async (id) => {
        try {
            console.log(id)
            await axios.delete(`http://localhost:8080/clientes/${id}`);
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
                nome:nomeEditando,
                email:emailEditando,
                cpf: cpfEditando,
                dataEmissaoCpf:dataEmissaoCpfEditando,
                estado: estadoEditando,
                cidade:cidadeEditando,
                bairro:bairroEditando,
                rua:ruaEditando,
                numero:numeroEditando,
                cep:cepEditando,
                complemento:complementoEditando,
            };
            console.log('Teste Editar Cliente:',newData)
            await axios.put('http://localhost:8080/cliente_editar', newData);
            for (let telefone of telefoneEditando){
                const newDataTelefone = {
                    id: telefone.id,
                    telefone: telefone.telefone,
                }
                console.log("todos os telefones:", newDataTelefone);
                await axios.put('http://localhost:8080/telefone_editar', newDataTelefone);
            }

            for (let dado of RgsEditando) {
                const newDataDadosRG = {
                    id: dado.id,
                    rgCliente: dado.rgCliente,
                    ufRgCliente: dado.ufRgCliente,
                    dataEmissaoRgCliente: dado.dataEmissaoRgCliente,
                };
                try {
                    console.log("todos os Rgs:", newDataDadosRG);
                    await axios.put('http://localhost:8080/rg_editar', newDataDadosRG);
                } catch (error) {
                    console.error('Erro ao cadastrar RG:', error);
                }
            }

            //await axios.put('http://localhost:8080/produtos_editar', newData);
            console.log("Dados atualizados com sucesso!");
            fetchData()
            setEditando("")
        } catch (error) {
          console.error('Erro ao salvar os dados:', error);
        }
      };

    async function AbrirModal(id,nome,nomeSocial,email,dadosTelefones,cpf,dataEmissaoCpf,dadosRgs,
        estado,cidade,bairro,rua,numero,cep,complemento){
        setIdEditando(id)
        setNomeEditando(nome)
        setNomeSocialEditando(nomeSocial)
        setEmailEditando(email)
        setTelefoneEditando(dadosTelefones)
        setCpfEditando(cpf)
        setDataEmissaoCpfEditando(dataEmissaoCpf)
        setRgsEditando(dadosRgs)
        setEstadoEditando(estado)
        setCidadeEditando(cidade)
        setBairroEditando(bairro)
        setRuaEditando(rua)
        setNumeroEditando(numero)
        setCepEditando(cep)
        setComplementoEditando(complemento)
        console.log('dadosTelefones',telefoneEditando)
        setEditando("editando")
    }

    const handleChangeTelefone = (e, index) => {
        const { name, value } = e.target;
        const updatedDadosTelefone = [...telefoneEditando];
        updatedDadosTelefone[index][name] = value;
        setTelefoneEditando([updatedDadosTelefone]);
        console.log("alterando dados Telefone", updatedDadosTelefone)
    };

    
    const atualizarDadosRgs = (e, index) => {
        const { name, value } = e.target;
        const updatedDadosRG = [...RgsEditando];
        updatedDadosRG[index][name] = value;
        setRgsEditando(updatedDadosRG);
        console.log("alterando dados RG", updatedDadosRG)
    }; 

    return(
        <div className='conteudoPagina'>
            {editando !== "editando" && (
                <h1 className='tituloConteudoPagina'>Dados de Clientes</h1>
            )}
            
                <div className="conjuntoCard">
                    {editando === "editando" && (
                        <div>
                            <form className="containerConteudo" onSubmit={(e) => { e.preventDefault(); EditarCliente(); }}>
                                <h2 className="tituloCadastro">Dados do Cliente {idEditando}:</h2>
                                <div className="input-cadastros">
                                    <label className="labelInput">Nome:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nome do Cliente" 
                                        aria-label="Nome do Cliente" 
                                        aria-describedby="basic-addon1" 
                                        value={nomeEditando}
                                        onChange={(e) => setNomeEditando(e.target.value)}
                                    />
                                </div>
                                <div className="input-cadastros">
                                    <label className="labelInput">Nome Social:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nome Social do Cliente:" 
                                        aria-label="Nome Social do Cliente:" 
                                        aria-describedby="basic-addon1" 
                                        value={nomeSocialEditando}
                                        onChange={(e) => setNomeSocialEditando(e.target.value)}
                                    />
                                </div>
                                <div className="input-cadastros">
                                    <label className="labelInput">Email:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Email do Cliente" 
                                        aria-label="Email do Cliente" 
                                        aria-describedby="basic-addon1" 
                                        value={emailEditando}
                                        onChange={(e) => setEmailEditando(e.target.value)}
                                    />
                                </div>
                                {telefoneEditando.map((t, index) => (//criar um componente para subistituir essa função
                                    <div  >
                                        <div className="input-cadastros">
                                            <label className="labelInput"><b>Telefone {index+1}:</b></label>
                                            <InputMask 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="(00) 00000-0000"
                                                aria-label="Nome do Cliente" 
                                                mask="(99) 99999-9999"
                                                aria-describedby="basic-addon1" 
                                                name='telefone'
                                                value={t.telefone}
                                                onChange={(e) => handleChangeTelefone(e, index)}
                                            />
                                        </div>
                                    </div>
                                    
                                ))}
                                <div className="input-cadastros">
                                    <label className="labelInput">CPF:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="CPF do Cliente" 
                                        aria-label="CPF do Cliente" 
                                        aria-describedby="basic-addon1" 
                                        value={cpfEditando}
                                        readOnly
                                    />
                                </div>
                                <div className="input-cadastros">
                                    <label className="labelInput">Data de Emissão do CPF:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="CPF do Cliente" 
                                        aria-label="CPF do Cliente" 
                                        aria-describedby="basic-addon1" 
                                        value={dataEmissaoCpfEditando}
                                        readOnly
                                    />
                                </div>
                                {RgsEditando.map((item, index) => (
                                    <div>
                                        <div className="input-cadastros" key={index}>
                                            <b>Dados do Rg {index+1}:</b>
                                        </div>
                                        <div className="input-cadastros" key={index}>
                                            <div className="rg">
                                                <div className="camposRG">
                                                    <label className="labelInput" htmlFor="RG"><b>RG:</b></label>
                                                    <InputMask
                                                        id="RG"
                                                        mask="99.999.999-9"
                                                        className="form-control"
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
                                            </div>
                                            <div className="input-cadastros" key={index}>
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
                                    </div>
                                ))}



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
                                chartClientes.length > 0 ? (
                                    chartClientes.map((cliente, index) => {
                                    const dadosTelefones = chartDataTelefone
                                        .filter(t => t.idCliente === cliente.id)
                                        .map(t => ({
                                            id:t.id,
                                            telefone:t.telefone
                                        }));

                                    const dadosRgs = chartDataRg
                                        .filter(r => r.idCliente === cliente.id)
                                        .map(r => ({
                                        id: r.id,
                                        rgCliente: r.rgCliente,
                                        ufRgCliente: r.ufRgCliente,
                                        dataEmissaoRgCliente: r.dataEmissaoRgCliente
                                        }));

                                    return (
                                        <CardCliente 
                                        key={index} 
                                        id={cliente.id}
                                        nome={cliente.nome}
                                        dadosTelefones={dadosTelefones}
                                        nomeSocial={cliente.nomeSocial}
                                        email={cliente.email}
                                        cpf={cliente.cpf}
                                        dataEmissaoCpf={cliente.dataEmissaoCpf}
                                        estado={cliente.estado}
                                        dadosRgs={dadosRgs}
                                        cidade={cliente.cidade}
                                        bairro={cliente.bairro}
                                        rua={cliente.rua}
                                        numero={cliente.numero}
                                        cep={cliente.cep}
                                        complemento={cliente.complemento}
                                        DeletarCliente={DeletarCliente}
                                        AbrirModal={AbrirModal}
                                        />
                                    );
                                    })
                                ) : (
                                    <SemDados titulo="Cliente" /> 
                                )
                            )
                    )}
            </div>
        </div>
    )
}

export default Clientes