import { IdGenerator } from "../services/IdGenerator";
import { ProdutosDatabase } from "../data/ProdutosDatabase";
import { produto,produtoInputDTO } from "../model/produto";


const idGenerator = new IdGenerator()

export class ProdutosBusiness {
  public adicionarProduto = async (input: produtoInputDTO) => {
    try {

      const {
        nome ,
        marca,
        preco_compra,
        icms,
        pis,
        cofins,
        lucro 

         
      } = input;

      const calculoPrecoCustoEVenda = (preco_compra: any, icms: any,pis: any, cofins: any, lucro: any) => {
            let preco_custo: number  = (((icms/100)*preco_compra)+((pis/100)*preco_compra)+((cofins/100)*preco_compra))+preco_compra

         
        let precoVenda:number = ((lucro/100)*preco_custo)+preco_custo
   
            return precoVenda
  
          }

    
      const preco_venda: number = calculoPrecoCustoEVenda(input.preco_compra, input.icms,input.pis, input.cofins,input.lucro)
      const cmv:number = preco_venda - ((input.lucro/100)*preco_venda)
    
      const id: string = idGenerator.generate()
          
      const produtosDatabase = new ProdutosDatabase();
      const produto: produto = {
        id,
        nome,
        marca,
        preco_compra,
        icms,
        pis,
        cofins,
        cmv,
        lucro,
        preco_venda 
      }
    
      await produtosDatabase.adicionarProduto({
        id,
        nome,
        marca,
        preco_compra ,
        icms,
        pis,
        cofins,
        cmv,
        lucro,
        preco_venda 
      
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

 

  public ListarTodosProtudos = async (produto: produto) => {
    try {

      return await new ProdutosDatabase().ListarTodosProtudos(produto,produto);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public PesquisaProtudos = async (produto: produto) => {
    try {

      return await new ProdutosDatabase().PesquisaProtudos(produto,produto);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public atualizaProduto = async (produto: produto) => {
    
    try {
      return await new ProdutosDatabase().atualizaProduto(produto);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public removeProduto = async (produto:produto) => {
    try {
        
        return await new ProdutosDatabase().removeProduto(produto);
    
     
      } catch (error) {
      throw new Error(error.message);
    }
  }
}
