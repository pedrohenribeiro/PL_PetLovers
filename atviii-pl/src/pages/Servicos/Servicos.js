import { FiEdit } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function Servicos(){
    return(
        <div className="containerLista">
            <h1 className="pb-4">Listagem de Serviços</h1>
            <table className="table table-hover">
                <thead>
                    <tr className="table">
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Período</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Banho</td>
                        <td>R$ 45,00</td>
                        <td>Manha/Tarde</td>
                        <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                        <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tosa</td>
                        <td>R$ 30,00</td>
                        <td>Manha/Tarde</td>
                        <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                        <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Corte de unhas</td>
                        <td>R$ 25,00</td>
                        <td>Tarde</td>
                        <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                        <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Servicos