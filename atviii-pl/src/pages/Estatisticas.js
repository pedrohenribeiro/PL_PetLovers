function Estatisticas(){
    return (
        <div className="containerLista">
            <h2 className="pb-4">Top 10 clientes que mais consumiram em quantidade</h2>
            <table className="table table-hover">
                <thead>
                    <tr className="table">
                        <th scope="col">#</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Marcos Lima</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bruna Souza</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Leticia Cardoso</td>
                        <td>15</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="pb-4">Top 10 clientes que mais consumiram em valor</h2>
            <table className="table table-hover">
                <thead>
                    <tr className="table">
                        <th scope="col">#</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Marcos Lima</td>
                        <td>R$ 140,00</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bruna Souza</td>
                        <td>R$ 120,00</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Leticia Cardoso</td>
                        <td>R$ 80,00</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="pb-4">Listagem geral dos produtos e serviços mais consumidos</h2>
            <table className="table table-hover">
                <thead>
                    <tr className="table">
                        <th scope="col">#</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Shampoo</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Banho</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tosa</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Petisco</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="pb-4">Listagem dos serviços e produtos mais consumidos por tipo e raça de pet</h2>
            <table className="table table-hover">
                <thead>
                    <tr className="table">
                        <th scope="col">#</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Raça</th>
                        <th scope="col">Produto/Servico</th>
                        <th scope="col">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cão</td>
                        <td>Husky Siberiano</td>
                        <td>Banho</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Cão</td>
                        <td>Pastor Alemão</td>
                        <td>Petisco</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Gato</td>
                        <td>Siamês</td>
                        <td>Banho</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Estatisticas