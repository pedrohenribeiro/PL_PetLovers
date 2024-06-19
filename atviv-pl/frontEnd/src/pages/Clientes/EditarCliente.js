import { useState } from "react"
// Navigate serve para navegar entre paginas
import { useLocation, useNavigate } from "react-router-dom"
import InputMask from "react-input-mask";

function EditarCliente(){
    const location = useLocation()

    // Declarando a função navigate
    const navigate = useNavigate()
    
    const [cliente, setCliente] = useState(location.state)

    if(!location.state){
        // Usando para navegar para a pagina inicial
        navigate('/')
        return <></>
    } 
    
    function adicionarTelefone(){
        const telefones = [...cliente.telefones, { ddd: '', numero: ''} ]
        setCliente({...cliente, telefones})
    }

    function removerTelefone(index){
        const telefones = [...cliente.telefones]
        telefones.splice(index, 1)
        
        setCliente({...cliente, telefones})
    }
    
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
            if(t.ddd && t.ddd.trim().length === 0) return false;
            if(t.numero && t.numero.trim().length === 0) return false;
        })

        return true;
    }

    // Metodo salva faz a requisição para editar o cliente
    function salvar(){
        const isValid = validar()
        if(!isValid){
            alert('Preencha todos os campos obrigatórios!')
            return;
        }

        fetch('http://localhost:32831/cliente/atualizar', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        }).then(r=> {
            alert(r.status === 200 ? 'Cliente atualizado com sucesso!' : 'Erro ao atualizar cliente.')
            navigate('/')
        })
    }

return(
    <div>
        <form className="containerConteudo" onSubmit={(e) => { e.preventDefault(); EditarCliente(); }}>
            <h2 className="tituloCadastro">Dados do Cliente {cliente.nome}:</h2>
            <div className="input-cadastros">
                <label className="labelInput">Nome:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nome do Cliente" 
                    aria-label="Nome do Cliente" 
                    aria-describedby="basic-addon1" 
                    value={cliente.nome} 
                    onChange={(e)=> setCliente({...cliente, nome: e.target.value})} 
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
                    value={cliente.nomeSocial} 
                    onChange={(e)=> setCliente({...cliente, nomeSocial: e.target.value})} 
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
                    value={cliente.email} 
                    onChange={(e)=> setCliente({...cliente, email: e.target.value})} 
                />
            </div>
            <div className="input-cadastros">
                <label className="labelInput">Estado:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email do Cliente" 
                    aria-label="Email do Cliente" 
                    aria-describedby="basic-addon1" 
                    value={cliente.endereco.estado} 
                    onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, estado: e.target.value}})}
                />
            </div>
            <div className="input-cadastros">
                <label className="labelInput">Cidade:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email do Cliente" 
                    aria-label="Email do Cliente" 
                    aria-describedby="basic-addon1" 
                    value={cliente.endereco.cidade} 
                    onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, cidade: e.target.value}})} 
                />
            </div>
            <div className="input-cadastros">
                <label className="labelInput">Bairro:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email do Cliente" 
                    aria-label="Email do Cliente" 
                    aria-describedby="basic-addon1" 
                    value={cliente.endereco.bairro} 
                    onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, bairro: e.target.value}})} 
                />
            </div>
            <div className="input-cadastros">
                <label className="labelInput">Rua:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email do Cliente" 
                    aria-label="Email do Cliente" 
                    aria-describedby="basic-addon1" 
                    value={cliente.endereco.rua} 
                    onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, rua: e.target.value}})} 
                />
            </div>
            <div className="input-cadastros">
                <label className="labelInput">Numero:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email do Cliente" 
                    aria-label="Email do Cliente" 
                    aria-describedby="basic-addon1" 
                    value={cliente.endereco.numero} 
                    onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, numero: e.target.value + ''}})}
                />
            </div>
            <div className="input-cadastros">
                <label className="labelInput">CEP:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email do Cliente" 
                    aria-label="Email do Cliente" 
                    aria-describedby="basic-addon1" 
                    value={cliente.endereco.codigoPostal} 
                    onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, codigoPostal: e.target.value + ''}})}
                />
            </div>
            <div className="input-cadastros">
                <label className="labelInput">Complemento:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email do Cliente" 
                    aria-label="Email do Cliente" 
                    aria-describedby="basic-addon1" 
                    value={cliente.endereco.informacoesAdicionais} 
                    onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, informacoesAdicionais: e.target.value}})} 
                />
            </div>
            {cliente.telefones.map((t, index) => (
                <div className="input-cadastros" key={index}>
                        <label className="labelInput"><b>Telefone {index+1}:</b></label>
                        <InputMask 
                            type="text" 
                            className="form-control" 
                            placeholder="00"
                            aria-label="Nome do Cliente" 
                            mask="99"
                            aria-describedby="basic-addon1" 
                            name='telefone'
                            value={t.ddd} 
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
                            className="form-control" 
                            placeholder="00"
                            aria-label="Nome do Cliente" 
                            mask="999999999"
                            aria-describedby="basic-addon1" 
                            name='telefone'
                            value={t.numero} 
                            onChange={(e)=> {
                                const telefones = [...cliente.telefones]
                                const tel = telefones[index]
                                if(tel){
                                    telefones[index].numero = e.target.value + ''
                                }
                                setCliente({...cliente, telefones})
                            }}
                        />
                </div>
            ))}

            <div className="form-botoes">
                <button className="botaoCadastro" type="button">Voltar</button>
                <button className="botaoCadastro" type="button" onClick={salvar}>Editar</button>
            </div>
        </form>
    </div>
)
}

export default EditarCliente