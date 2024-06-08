import CadastrarCliente from "./Clientes/CadastrarCliente"
import CadastrarProduto from "./Produtos/CadastrarProduto"
import CadastrarPet from "./Pets/CadastrarPet"
import CadastrarServico from "./Servicos/CadastrarServico"
import { useState } from "react"

function Cadastros(){

    const [cadastrando, setCadastrando] = useState("")
    return(
        <> 
            {cadastrando=="" &&    

                <div className="cards">
                    <div className="cardEscolhas">
                        <h2 className="tituloCardCadastro">Produto</h2>
                        <button onClick={(e) => setCadastrando("produto")} className="botaoCadastro">Cadastrar</button>
                    </div>
                
                    <div className="cardEscolhas">
                        <h2 className="tituloCardCadastro">Serviço</h2>
                        <button onClick={(e) => setCadastrando("servico")} className="botaoCadastro">Cadastrar</button>
                    </div>
                
                    <div className="cardEscolhas">
                        <h2 className="tituloCardCadastro">Cliente</h2>
                        <button onClick={(e) => setCadastrando("cliente")} className="botaoCadastro">Cadastrar</button>
                    </div>
                
                    <div className="cardEscolhas">
                        <h2 className="tituloCardCadastro">Pet</h2>
                        <button onClick={(e) => setCadastrando("pet")} className="botaoCadastro">Cadastrar</button>
                    </div>
                </div>
            }

            {cadastrando=="produto" &&(
                <div>
                    <CadastrarProduto setCadastrando={setCadastrando}/>
                </div>
            )}
            {cadastrando=="servico" &&(
                <div>
                    <CadastrarServico setCadastrando={setCadastrando}/>
                </div>
            )}
            {cadastrando=="cliente" &&(
                <div>
                    <CadastrarCliente setCadastrando={setCadastrando}/>
                </div>
            )}
            {cadastrando=="pet" &&(
                <div>
                    <CadastrarPet setCadastrando={setCadastrando}/>
                </div>
            )}
{/*             <CadastrarCliente/>
            <CadastrarCliente/>
            <CadastrarCliente/>
            <CadastrarCliente/> */}
        </>
    )
}

export default Cadastros