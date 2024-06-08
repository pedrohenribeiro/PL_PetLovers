/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container">
                <h1 className="pb-4">Listagem de Clientes</h1>
                <table className="table">
                    <thead className="table-dark">
                        <tr className="table">
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nome Social</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">CPF</th>
                            <th scope="col">RG</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bruna Souza</td>
                            <td>Bruninha</td>
                            <td>bruna032004@gmail.com</td>
                            <td>000.000.000-00</td>
                            <td>00.000.000-0</td>
                            <td>12 93422-4261</td>
                            <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                            <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Marcos Lima</td>
                            <td>Marquinhos</td>
                            <td>marcoslima@gmail.com</td>
                            <td>111.111.111-11</td>
                            <td>11.111.111-1</td>
                            <td>12 98135-8342</td>
                            <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                            <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Leticia Cardoso</td>
                            <td>Lele</td>
                            <td>lelecardoso@gmail.com</td>
                            <td>222.222.222-22</td>
                            <td>22.222.222-2</td>
                            <td>12 98174-1843</td>
                            <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                            <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}