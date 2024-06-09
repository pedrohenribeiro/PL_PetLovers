import { useState, useEffect } from "react";
import axios from "axios";
import CampoObrigatorio from "../../components/layout/CampoObrigatorio";

function ComprarProduto({setComprando}){

    const [chartClientes, setChartClientes] = useState([]);
    const [chartProdutos, setChartProdutos] = useState([]);

    const [cliente, setCliente] = useState('');
    const [cpfCliente, setCpfCliente] = useState('');

    const [produto, setProduto] = useState('');
    const [idProduto, setIdProduto] = useState('');
    const [valorDoProduto, setValorDoProduto] = useState('');

    const [quantidade, setQuantidade] = useState('');
    const [outrovalor, setOutroValor] = useState(false);

    const [valorDaCompra, setValorDaCompra] = useState('');

    const [faltaCliente, setFaltaCliente] = useState(false);
    const [faltaProduto, setFaltaProduto] = useState(false);
    const [faltaQuantidade, setFaltaQuantidade] = useState(false);
    
    
    
    function EscolhaSelecionada(e){
      if (e.target.value === 'outra') {
        setOutroValor(true);
        setQuantidade('');
      } else {
        setOutroValor(false);
        setQuantidade(e.target.value);
      }
    };

    useEffect(() => {
        FetchProdutos();
        FetchClientes();
    }, []);

    useEffect(() => {
        setValorDaCompra(quantidade*valorDoProduto)
    }, [quantidade,valorDoProduto]);

    async function FetchProdutos() {
        try {
          const response = await axios.get('http://localhost:8080/produtos');
          const produtos = response.data;
      
          const processedProdutos = produtos.map(item => ({
            value: item.nome,
            valor: item.valor,
            idProduto: item.id,
            label: `${item.nome}`,
          }));
          setChartProdutos(processedProdutos);

        } catch (error) {
          console.error('Erro ao buscar Produtos:', error);
        }
    };
    
    async function FetchClientes() {
        try {
            const response = await axios.get('http://localhost:8080/clientes');
            const clientes = response.data;

        const dadosClientes = clientes.map(item => ({
            value: item.nome.split(' ').slice(0, 2).join(' '),
            cpf: item.cpf,
            label: `${item.nome.split(' ').slice(0, 2).join(' ')}`,
        }));

            setChartClientes(dadosClientes);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    async function cadastrarCompra() {
        console.log("Cadastrar Pet");
        try {
            const newData = {
                cpf:cliente,
                produtoServico: produto,
                quantidade:quantidade,
                valor: valorDaCompra,
                tipo: "Produto"
            };
            console.log("Adicionando Produto", newData);
            await axios.post('http://localhost:8080/comprar', newData);
            setComprando("");
        } catch (error) {
            console.error("Erro ao adicionar Produto:", error);
        }
    };

    return (
        <div className="container-fluid">
            <form className="containerConteudo" onSubmit={(e) => { 
                e.preventDefault(); 
                if(cliente && produto && quantidade){
                    cadastrarCompra();
                }  else {
                        if(!cliente){
                            setFaltaCliente(true)
                        } else {
                            setFaltaCliente(false)
                        }
                        if(!produto){
                            setFaltaProduto(true)
                        } else {
                            setFaltaProduto(false)
                        }
                        if(!quantidade){
                            setFaltaQuantidade(true)
                        } else {
                            setFaltaQuantidade(false)
                        }
                    }
                }}>

                <h2 className="tituloCadastro">Comprar Produto:</h2>
                <div className="input-cadastros">
                    {!faltaCliente ?(
                        <label className="labelInput">Cliente:</label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Cliente: </label>
                    )}
                    
                      <select value={cliente} onChange={(event) => {
                        setCliente(event.target.value); 
                        setCpfCliente(event.target.selectedOptions[0].getAttribute("data-cpf")); // Define o CPF do vendedor
                      }}>
                        <option value="">Selecione um cliente</option>
                        {chartClientes.map((cliente) => (
                          <option key={cliente.value} value={cliente.value} data-cpf={cliente.cpf}>{cliente.label} - {cliente.cpf}</option>
                        ))}
                      </select>
                </div>

                <div className="input-cadastros">
                    {!faltaProduto ?(
                        <label className="labelInput">Nome do Produto:</label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Nome do Produto: </label>
                    )}

                    <select value={produto} onChange={(event) => {
                            setProduto(event.target.value); 
                            const selectedOption = event.target.selectedOptions[0];
                            setValorDoProduto(selectedOption.getAttribute("data-valor")); 
                            setIdProduto(selectedOption.getAttribute("data-idProduto"));
                        }}>
                        <option value="">Selecione um produto</option>
                        {chartProdutos.map((produto) => (
                            <option key={produto.value} value={produto.value} data-valor={produto.valor} data-idProduto={produto.idProduto}>{produto.label} - R${produto.valor}</option>
                        ))}
                    </select>
                  
                </div>

                <div className="input-cadastros">
                    {!faltaQuantidade ?(
                        <label className="labelInput">Quantidade: </label>
                    ) : (
                        <label className="labelInput"><CampoObrigatorio/>Quantidade: </label>
                    )}
                    {!outrovalor ? (
                        <select
                        name="quantidade"
                        id="quantidade"
                        value={quantidade}
                        onChange={EscolhaSelecionada}
                        >
                        <option value="">- Selecione a quantia -</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="outra">Outra</option>
                        </select>
                    ) : (
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Quantidade"
                        aria-label="Quantidade"
                        aria-describedby="basic-addon1"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        />
                    )}
                </div>

                <div className="input-cadastros">
                    <label className="labelInput" id="valorDaCompra">Valor total: R${valorDaCompra},00</label>
                </div>
                <div className="form-botoes">
                    <button className="botaoCadastro" type="button" onClick={() => setComprando("")}>Voltar</button>
                    <button className="botaoCadastro" type="submit">Comprar</button>
                </div>
            </form>
        </div>
    )
}
export default ComprarProduto