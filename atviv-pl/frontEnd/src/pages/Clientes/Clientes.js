import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

function Clientes(){
    const [clientes, setClientes] = useState([])

    // Declarando a função navigate
    const navigate = useNavigate()

    // Código utiliza o hook useEffect em um componente React
    useEffect(()=> {
        if(clientes.length > 0) return;
        loadClientes()
    }, [])
    
    // Requisição para listar todos os clientes
    function loadClientes(){
        // Função fetch fazendo uma solicitação HTTP GET para a URL 
        fetch('http://localhost:32831/cliente/clientes', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(r=> r.json()).then(r=>{
            setClientes(r)
            console.log(r)
        })
    }

    
    function excluirCliente(id){
        // Função fetch para fazer uma solicitação HTTP DELETE
        fetch('http://localhost:32831/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        }).then(r=> {
            alert(r.status === 200 ? 'Cliente excluído com sucesso!' : 'Erro ao excluir cliente.')
            setClientes([])
            loadClientes()
        })
    }

    function editar(cliente){
        navigate('/Atualizar', {state: cliente})
    }

    function formatEndereco(endereco){
        return `${endereco.rua} - ${endereco.numero}, ${endereco.codigoPostal}, ${endereco.bairro}, ${endereco.cidade}, ${endereco.estado}`
    }

    function formatTelefone(telefone){
        return `(${telefone.ddd}) ${telefone.numero}`
    }

    return (
            <div className='tables'>
                <table className="table table-hover">
                    <thead className="table">
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>Sobrenome</td>
                            <td>Email</td>
                            <td>Estado</td>
                            <td>Cidade</td>
                            <td>Bairro</td>
                            <td>Rua</td>
                            <td>Número</td>
                            <td>Código Postal</td>
                            <td>Informações Adicionais</td>
                            <td style={{ width: 110 }}>Telefone</td>
                            <td>Editar</td>
                            <td>Excluir</td>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.nomeSocial}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.endereco.estado}</td>
                                <td>{cliente.endereco.cidade}</td>
                                <td>{cliente.endereco.bairro}</td>
                                <td>{cliente.endereco.rua}</td>
                                <td>{cliente.endereco.numero}</td>
                                <td>{cliente.endereco.codigoPostal}</td>
                                <td>{cliente.endereco.informacoesAdicionais}</td>
                                <td>
                                    {cliente.telefones.map((telefone, index) => (
                                        <p key={index}>{telefone.ddd} {telefone.numero}</p>
                                    ))}
                                </td>

                                <td>
                                    <button type='button' onClick={() => editar(cliente)}>Editar</button>
                                </td>
                                <td>
                                    <button type='button' onClick={() => excluirCliente(cliente.id)}>Apagar</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
     
 
    )
}

export default Clientes