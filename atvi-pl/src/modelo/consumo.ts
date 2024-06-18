import Produto from "./produto";
import Servico from "./servico";

export default abstract class Consumo {

    public cpfCliente: string;
    public codigoItem: string;
    public quantidade: number;

    constructor(cpfCliente: string, codigoItem: string, quantidade: number) {
        this.cpfCliente = cpfCliente;
        this.codigoItem = codigoItem;
        this.quantidade = quantidade
    }
}