import { FiEdit } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function Pets(){
    return(
        <div className="containerLista">
            <h1 className="pb-4">Listagem de Pets</h1>
            <table className="table table-hover">
                <thead>
                    <tr className="table">
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF do Dono</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Raça</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>1</td>
                        <td>Spyke</td>
                        <td>111.111.111-11</td>
                        <td>Cão</td>
                        <td>Husky Siberiano</td>
                        <td>Macho</td>
                        <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                        <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Thor</td>
                        <td>222.222.222-22</td>
                        <td>Gato</td>
                        <td>Siamês</td>
                        <td>Macho</td>
                        <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                        <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Princesa</td>
                        <td>333.333.333-333</td>
                        <td>Cão</td>
                        <td>Pastor Alemão</td>
                        <td>Fêmea</td>
                        <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                        <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Pets