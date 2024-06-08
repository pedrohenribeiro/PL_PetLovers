/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";
type props = {
    tema: string
}

export default class ListaProduto extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container">
                <h1 className="pb-4">Listagem de Produtos</h1>
                <table className="table table-hover">
                    <thead>
                        <tr className="table">
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Shampoo</td>
                            <td>R$ 15,00</td>
                            <td>26</td>
                            <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                            <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ração pequena</td>
                            <td>R$ 16,00</td>
                            <td>32</td>
                            <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                            <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Petisco</td>
                            <td>R$ 24,00</td>
                            <td>19</td>
                            <td><button className='botao-editar'><FiEdit size={28}/></button></td>
                            <td><button className='botao-deletar'><IoIosRemoveCircleOutline size={30}/></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}