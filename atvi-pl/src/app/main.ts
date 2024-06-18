import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastrarCliente from "../negocio/cadastros/cadastrarCliente";
import CadastrarPet from "../negocio/cadastros/cadastrarPet";
import CadastrarProduto from "../negocio/cadastros/cadastrarProduto";
import CadastrarServico from "../negocio/cadastros/cadastrarServico";
import BuscarCliente from "../negocio/listagens/buscarCliente";
import BuscarPet from "../negocio/listagens/buscarPet";
import BuscarProduto from "../negocio/listagens/buscarProduto";
import BuscarServico from "../negocio/listagens/buscarServico";
import AtualizarCliente from "../negocio/edicoes/atualizarCliente";
import AtualizarPet from "../negocio/edicoes/atualizarPet";
import AtualizarProduto from "../negocio/edicoes/atualizarProduto";
import AtualizarServico from "../negocio/edicoes/atualizarServico";
import DeletarCliente from "../negocio/deletes/deletarCliente";
import DeletarPet from "../negocio/deletes/deletarPet";
import DeletarProduto from "../negocio/deletes/deletarProduto";
import DeletarServico from "../negocio/deletes/deletarServico";
import RegistrarConsumo from "../negocio/registrarConsumo";
import ListarClientes from "../negocio/listagens/listarClientes";
import ListarProdutos from "../negocio/listagens/listarProdutos";
import ListarServicos from "../negocio/listagens/listarServicos";
import TopDezClientes from "../negocio/listagem/topDezClientes";
import TopProdutosServicos from "../negocio/listagem/TopProdutosServicos";
import TopProdutosServicosPorTipoRaca from "../negocio/listagem/produtosServicosPorTipo";
import TopClientesPorValor from "../negocio/listagem/topClientesPorValor";
console.log(`---------`)
console.log(`PetLovers`)
console.log(`---------`)
let empresa = new Empresa()
let execucao = true

let registrarConsumo: RegistrarConsumo | undefined;


while (execucao) {
    console.log(`Escolha uma opção:`);
    console.log(`- - - - - - - - - - - -`);
    console.log(`Cadastros`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar pet`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Cadastrar serviço`);
    console.log(`- - - - - - - - - - - -`);
    console.log(`Buscas`);
    console.log(`5 - Buscar cliente`);
    console.log(`6 - Buscar pet`);
    console.log(`7 - Buscar produto`);
    console.log(`8 - Buscar serviço`);
    console.log(`- - - - - - - - - - - -`);
    console.log(`Atualizações`);
    console.log(`9 - Atualizar cliente`);
    console.log(`10 - Atualizar pet`);
    console.log(`11 - Atualizar produto`);
    console.log(`12 - Atualizar serviço`);
    console.log(`- - - - - - - - - - - -`);
    console.log(`Deletar`);
    console.log(`13 - Deletar cliente`);
    console.log(`14 - Deletar pet`);
    console.log(`15 - Deletar produto`);
    console.log(`16 - Deletar serviço`);
    console.log(`- - - - - - - - - - - -`);
    console.log(`Registro e Listas`);
    console.log(`17 - Registrar consumo`);
    console.log(`18 - Listar todos os clientes`);
    console.log(`19 - Listar todos os produtos `)
    console.log(`20 - Listar todos os servicos `)
    console.log(`- - - - - - - - - - - -`);
    console.log(`Listagens`);
    console.log(`21 - Listar top 10 clientes em quantidade de consumo`);
    console.log(`22 - Produtos e serviços mais consumidos `)
    console.log(`23 - Listar produtos e serviços por tipo e raça `)
    console.log(`24 - Listar top 5 clientes em valor`)
    console.log(`0 - Sair`);  
    console.log(`- - - - - - - - - - - -`);
    let entrada = new Entrada()
    
    let opcao = entrada.receberNumero(`Escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastrar = new CadastrarCliente(empresa.getClientes)
            cadastrar.cadastrar()
            break;
        case 2:
            let cadastrarPet = new CadastrarPet(empresa.getClientes)
            cadastrarPet.cadastrar()
            break; 
        case 3:
            let cadastrarProduto = new CadastrarProduto(empresa.getProdutos)
            cadastrarProduto.cadastrar()
            break;
        case 4:
            let cadastrarServico = new CadastrarServico(empresa.getServicos)
            cadastrarServico.cadastrar()
            break;
        case 5:
            let buscar = new BuscarCliente(empresa.getClientes)
            buscar.buscar()
            break;
        case 6:
            let buscarPet = new BuscarPet(empresa.getClientes)
            buscarPet.buscar()
            break;
        case 7:
            let buscarProduto = new BuscarProduto(empresa.getProdutos)
            buscarProduto.buscar()
            break;
        case 8:
            let buscarServico = new BuscarServico(empresa.getServicos)
            buscarServico.buscar()
            break;
        case 9:
            let atualizarCliente = new AtualizarCliente(empresa.getClientes)
            atualizarCliente.atualizar()
            break;
        case 10:
            let atualizarPet = new AtualizarPet(empresa.getClientes)
            atualizarPet.atualizar()
            break;
        case 11:
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
            atualizarProduto.atualizar()
            break;
        case 12:
            let atualizarServico = new AtualizarServico(empresa.getServicos)
            atualizarServico.atualizar()
            break;
        case 13:
            let deletarCliente = new DeletarCliente(empresa.getClientes)
            deletarCliente.deletar()
            break;
        case 14:
            let deletarPet = new DeletarPet(empresa.getClientes)
            deletarPet.deletar()
            break;
        case 15:
            let deletarProduto = new DeletarProduto(empresa.getProdutos)
            deletarProduto.deletar()
            break;
        case 16:
            let deletarServico = new DeletarServico(empresa.getServicos)
            deletarServico.deletar()
            break;
        case 17:
            if (!registrarConsumo) {
                registrarConsumo = new RegistrarConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            }
            registrarConsumo.registrarConsumo();
            break;
        case 18:
            let listar = new ListarClientes(empresa.getClientes)
            listar.listar()
            break;
        case 19:
            let listarProdutos = new ListarProdutos(empresa.getProdutos)
            listarProdutos.listar()
            break; 
        case 20:
            let listarServicos = new ListarServicos(empresa.getServicos)
            listarServicos.listar()
            break; 
        case 21:
            if (registrarConsumo) {
                let topProdutosServicosPorTipo = new TopProdutosServicosPorTipoRaca(registrarConsumo)
                topProdutosServicosPorTipo.listarTopProdutosServicosPorTipoRaca()
            } else {
                console.log("Registro de consumo não foi inicializado.")
            }
            break;
        case 22:
            if (registrarConsumo) {
                const topProdutosServicos = new TopProdutosServicos(registrarConsumo);
                topProdutosServicos.exibirTopProdutosServicos();
            } else {
                console.log("Registro de consumo não foi inicializado.")
            }
            break;
        case 23:
            if (registrarConsumo) {
                let topDezClientes = new TopDezClientes(registrarConsumo)
                topDezClientes.exibirTopClientes()
            } else {
                console.log("Registro de consumo não foi inicializado.")
            }
            break;
        case 24:
            if (registrarConsumo) {
               let topClientesPorValor = new TopClientesPorValor(registrarConsumo)
               topClientesPorValor.exibirTopClientesPorValor()
          } else {
              console.log("Registro de consumo não foi inicializado.")
          }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}