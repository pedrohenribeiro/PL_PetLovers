import { useState } from 'react'
function Form(){

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log('Cadastrou o usuario')
        console.log(`Usuario: ${name} Foi cadastrado com a senha: ${password}`)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu Nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        placeholder="Digite o sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>

            </form>
        </div>
    )
}

export default Form