import InputMask from "react-input-mask";
import axios from "axios";
import { useState } from 'react';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom"


const clienteObj = {
    nome: '',
    nomeSocial: '', 
    email: '', 
    endereco: { 
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        codigoPostal: '',
        informacoesAdicionais: '',
    },
    telefones: []
}
function CadastrarCliente({setCadastrando}){

    const [cliente, setCliente] = useState(clienteObj)

    const navigate = useNavigate()


    
    function validar(){
        if(cliente.nome.trim().length === 0) return false
        if(cliente.nomeSocial.trim().length === 0) return false
        if(cliente.email.trim().length === 0) return false
        if(cliente.endereco.codigoPostal.trim().length === 0) return false
        if(cliente.endereco.bairro.trim().length === 0) return false
        if(cliente.endereco.cidade.trim().length === 0) return false
        if(cliente.endereco.estado.trim().length === 0) return false
        if(cliente.endereco.numero.trim().length === 0) return false
        if(cliente.endereco.rua.trim().length === 0) return false
        if(cliente.telefones.length === 0) return false

        cliente.telefones.forEach(t=> {
            if(t.ddd.trim().length === 0) return false;
            if(t.numero.trim().length === 0) return false;
        })

        return true;
    }

    function salvar(){
        const isValid = validar()
        if(!isValid){
            alert('Preencha todos os campos obrigatórios!')
            return;
        }

        fetch('http://localhost:32831/cliente/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        }).then(r=> {
            alert(r.status === 200 ? 'Cliente criado com sucesso!' : 'Erro ao criar cliente.')
            navigate('/')
        })
    }

    
    function adicionarTelefone(){
        const telefones = [...cliente.telefones, { ddd: '', numero: ''} ]
        setCliente({...cliente, telefones})
    }

    return(
        <div>
            <form className="containerConteudoClientes">

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
                                value={cliente.nome} 
                                onChange={(e)=> setCliente({...cliente, nome: e.target.value})} 
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
                                value={cliente.nomeSocial} 
                                onChange={(e)=> setCliente({...cliente, nomeSocial: e.target.value})} 
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
                                value={cliente.email} 
                                onChange={(e)=> setCliente({...cliente, email: e.target.value})} 
                            />
                        </div>

                        <div className="input-cadastros">
                            <label className="labelInput" htmlFor="Telefone">Telefone:</label>
                            <div className="field">
                                <button type="button" onClick={adicionarTelefone}>
                                    Adicionar Telefone
                                </button> 
                            </div>
                            {cliente.telefones.map((telefone, index) => (
                                <div className="field" key={index}>
                                    <label for={`telefone-${index+1}`}>{`Telefone ${index+1}:`}</label>
                                    <div className="telefone">
                                        <InputMask
                                            type="text"
                                            mask="99"
                                            id={`telefone-${index+1}`}
                                            placeholder="00"
                                            value={telefone.ddd} 
                                            onChange={(e)=> {
                                                const telefones = [...cliente.telefones]
                                                const tel = telefones[index]
                                                if(tel){
                                                    telefones[index].ddd = e.target.value + ''
                                                }
                                                setCliente({...cliente, telefones})
                                            }}
                                        />
                                        <InputMask
                                            type="text"
                                            mask="99999999"
                                            id={`telefone-${index+1}`}
                                            placeholder="00000000"
                                            value={telefone.numero} 
                                            onChange={(e)=> {
                                                const telefones = [...cliente.telefones]
                                                const tel = telefones[index]
                                                if(tel){
                                                    telefones[index].numero = e.target.value + ''
                                                }
                                                setCliente({...cliente, telefones})
                                            }}
                                        />
{/*                                         <button type="button" class="botao-deletar" onClick={() => {removerTelefone(index)}}>
                                            <IoIosRemoveCircleOutline 
                                                size={30} 
                                                title="Apagar"
                                            />
                                        </button> */}
                                    </div>
                                </div>
                            ))} 
                        </div>
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
                                value={cliente.endereco.estado} 
                                onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, estado: e.target.value}})} 
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
                                value={cliente.endereco.cidade} 
                                onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, cidade: e.target.value}})} 
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
                                    value={cliente.endereco.bairro} 
                                    onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, bairro: e.target.value}})} 
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
                                value={cliente.endereco.rua} 
                                onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, rua: e.target.value}})} 
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
                                value={cliente.endereco.numero} 
                                onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, numero: e.target.value + ''}})} 
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
                                value={cliente.endereco.codigoPostal} 
                                onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, codigoPostal: e.target.value + ''}})} 
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
                                value={cliente.endereco.informacoesAdicionais} 
                                onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, informacoesAdicionais: e.target.value}})} 
                            />
                        </div>

                    </div>         
                    <div className="form-botoes">
                        <button className="botaoCadastro" type="button" onClick={() => setCadastrando("")}>Voltar</button>
                        <button className="botaoCadastro"  type="button" onClick={salvar}>Cadastrar</button>
                    </div>
                    
                </div>


            </form>
            
        </div>
    )
}

export default CadastrarCliente