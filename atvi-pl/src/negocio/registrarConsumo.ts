import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Pet from "../modelo/pet";

export default class RegistrarConsumo {
    private registro: Map<Cliente, Map<Produto | Servico, number>>;
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.registro = new Map();
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }
    
    public registrarConsumo(): void {
        let cpfCliente = this.entrada.receberTexto(`Informe o CPF do cliente: `);
        let codigoItem = this.entrada.receberTexto(`Informe o código do produto ou serviço: `);
        let quantidade = this.entrada.receberNumero(`Informe a quantidade: `);
    
        let cliente = this.buscarClientePorCPF(cpfCliente);
        if (!cliente) {
            console.log("\nCliente não encontrado.\n");
            return;
        }
    
        let item = this.buscarItemPorCodigo(codigoItem);
        if (!item) {
            console.log("\nProduto ou serviço não encontrado.\n");
            return;
        }
    
        // Verifica se o cliente já possui um registro de consumo
        let consumoCliente = this.registro.get(cliente);
        if (!consumoCliente) {
            consumoCliente = new Map();
            this.registro.set(cliente, consumoCliente);
        }
    
        // Atualiza ou adiciona o consumo para o item específico
        consumoCliente.set(item, (consumoCliente.get(item) ?? 0) + quantidade);
    
        let nomeItem = item instanceof Produto ? item.nomeProduto : item.nomeServico;
        console.log(`\nConsumo registrado para o cliente ${cliente.nome}: ${quantidade} unidade(s) de ${nomeItem}\n`);
    }

    private buscarClientePorCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }

    private buscarItemPorCodigo(codigo: string): Produto | Servico | undefined {
        let produtos: Produto[] = this.produtos;
        let servicos: Servico[] = this.servicos;
        let item: Produto | Servico | undefined;
        
        item = produtos.find(produto => produto.codigoProduto === codigo);
        if (item) return item;
        
        item = servicos.find(servico => servico.codigoServico === codigo);
        return item;
    } 

    public listarConsumoPorCliente(cliente: Cliente): Map<Produto | Servico, number> | undefined {
        return this.registro.get(cliente);
    }
    
    public listarTodosOsClientes(): Cliente[] {
        return this.clientes.filter(cliente => this.registro.has(cliente));
    }
}