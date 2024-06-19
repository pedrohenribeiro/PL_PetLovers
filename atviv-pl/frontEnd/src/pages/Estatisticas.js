import { useState, useEffect } from "react";
import axios from "axios";

function Estatisticas(){

    const [chartDataTopConsumo, setChartDataTopConsumo] = useState([]);
    const [chartDataTopValor , setChartDataTopValor ] = useState([]);
    const [chartDataPsMaisConsumidos , setChartDataPsMaisConsumidos ] = useState([]);
    const [chartDataPsMaisConsumidosPet , setChartDataPsMaisConsumidosPet ] = useState([]);
    
    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        try {
            const responseTopConsumo = await axios.get("http://localhost:8080/listagem_top_10_quantidade");
            const dataTopConsumo = responseTopConsumo.data;

            const responseTopValor = await axios.get("http://localhost:8080/listagem_top_10_valor");
            const dataTopValor  = responseTopValor.data;

            const responsePsMaisConsumidos = await axios.get("http://localhost:8080/listagem_geral_produtosServicos_mais_consumidos");
            const dataPsMaisConsumidos  = responsePsMaisConsumidos.data;
            

            const responsePsMaisConsumidosPet = await axios.get("http://localhost:8080/listagem_produtosServicos_mais_consumidos_por_tipoPet");
            const dataPsMaisConsumidosPet  = responsePsMaisConsumidosPet.data;

/*             const processedData = dataTopConsumo.map((itemTopConsumo) => ({
                ...itemTopConsumo,
                totalQuantidade: typeof itemTopConsumo.totalQuantidade === 'number' ? itemTopConsumo.totalQuantidade : parseFloat(itemTopConsumo.totalQuantidade)
            })); */

            setChartDataTopConsumo(dataTopConsumo);
            setChartDataTopValor (dataTopValor );
            setChartDataPsMaisConsumidos(dataPsMaisConsumidos );
            setChartDataPsMaisConsumidosPet(dataPsMaisConsumidosPet);
            /* console.log(processedData); */
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      };

    return (
        <div className="containerLista">
            <h2 className="pb-4">Top 10 clientes que mais consumiram em quantidade</h2>
            <table className="table table-hover">
            <thead>
                <tr className="table">
                    <th scope="col">#</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                {console.log('chartConsumo',chartDataTopConsumo)}
                
                {chartDataTopConsumo.map((topConsumo, index) => (
                    <tr key={topConsumo.id}>
                        {console.log('chartConsumo',topConsumo.totalQuantidade)}
                        <td>{index + 1}</td>
                        <td>{topConsumo.nomeCliente}</td> {/* Renderizando CPF */}
                        <td>{topConsumo.produtoServico}</td> {/* Renderizando nome do cliente */}
                        <td>{topConsumo.totalQuantidade}</td> {/* Renderizando quantidade total */}
                    </tr>
                ))}
            </tbody>
            </table>
            <h2 className="pb-4">Top 10 clientes que mais consumiram em valor</h2>
            <table className="table table-hover">
                <thead>
                    <tr className="table">
                        <th scope="col">#</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {chartDataTopValor.map((topValor, index) => (
                        <tr key={topValor.id}>
                            {console.log('chartConsumo',topValor.totalValor)}
                            <td>{index + 1}</td>
                            <td>{topValor.nomeCliente}</td> {/* Renderizando CPF */}
                            <td>{topValor.totalValor}</td> {/* Renderizando nome do cliente */}
                            <td>{topValor.quantidade}</td> {/* Renderizando quantidade total */}
                        </tr>
                    ))}
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
                    {chartDataPsMaisConsumidos.map((psMaisConsumidos, index) => (
                        <tr key={psMaisConsumidos.id}>
                            {console.log('chartConsumo',psMaisConsumidos.totalValor)}
                            <td>{index + 1}</td>
                            <td>{psMaisConsumidos.produtoServico}</td>
                            <td>{psMaisConsumidos.totalConsumido}</td> 
                            
                        </tr>
                    ))}
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
                    {chartDataPsMaisConsumidosPet.map((psMaisConsumidosPet, index) => (
                        <tr key={psMaisConsumidosPet.id}>
                            {console.log('chartConsumo',psMaisConsumidosPet.totalValor)}
                            <td>{index + 1}</td>
                            <td>{psMaisConsumidosPet.tipoPet}</td>
                            <td>{psMaisConsumidosPet.racaPet}</td>
                            <td>{psMaisConsumidosPet.produtoServico}</td> 
                            <td>{psMaisConsumidosPet.totalConsumido}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Estatisticas