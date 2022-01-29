
import { Base } from "./base.model";

export class Produto extends Base {

    descricao: string;
    valorVenda: number;
    estoqueMinimo: number;
    quantidadeEstoque: number;
    ultimaAtualizacao: Date;
    categoriaId: string;




}
