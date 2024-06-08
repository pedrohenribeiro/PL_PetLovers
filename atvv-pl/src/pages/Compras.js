import CadastrarCliente from "./Clientes/CadastrarCliente"
import CadastrarProduto from "./Produtos/CadastrarProduto"
import CadastrarPet from "./Pets/CadastrarPet"
import CadastrarServico from "./Servicos/CadastrarServico"
import { useState } from "react"
import ComprarProduto from "./Produtos/ComprarProduto"
import ComprarServico from "./Servicos/ComprarServico"

function Compras(){

    const [comprando, setComprando] = useState("")
    return(
        <> 
            {comprando=="" &&    

                <div className="cards">
                    <div className="cardEscolhas">
                        <h2 className="tituloCardCadastro">Produto</h2>
                        <button onClick={(e) => setComprando("produto")} className="botaoCadastro">Comprar</button>
                    </div>
                
                    <div className="cardEscolhas">
                        <h2 className="tituloCardCadastro">Serviço</h2>
                        <button onClick={(e) => setComprando("servico")} className="botaoCadastro">Comprar</button>
                    </div>
                
                </div>
            }

            {comprando=="produto" &&(
                <div>
                    <ComprarProduto setComprando={setComprando}/>
                </div>
            )}
            {comprando=="servico" &&(
                <div>
                    <ComprarServico setComprando={setComprando}/>
                </div>
            )}
{/*             <CadastrarCliente/>
            <CadastrarCliente/>
            <CadastrarCliente/>
            <CadastrarCliente/> */}
        </>
    )
}

export default Compras