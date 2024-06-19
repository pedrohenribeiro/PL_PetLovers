import CadastrarCliente from "./Clientes/CadastrarCliente"
import { useState } from "react"

function Cadastros(){

    const [cadastrando, setCadastrando] = useState("")
    return(
        <> 
            {cadastrando=="" &&    

                <div className="cards">
                    <div className="cardEscolhas">
                        <h2 className="tituloCardCadastro">Cliente</h2>
                        <button onClick={(e) => setCadastrando("cliente")} className="botaoCadastro">Cadastrar</button>
                    </div>
                </div>
            } 
            {cadastrando=="cliente" &&(
                <div>
                    <CadastrarCliente setCadastrando={setCadastrando}/>
                </div>
            )}
        </>
    )
}

export default Cadastros