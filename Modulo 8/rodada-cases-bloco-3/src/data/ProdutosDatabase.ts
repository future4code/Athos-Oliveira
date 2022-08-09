
import { produto } from "../model/produto";
import { BaseDatabase } from "./BaseDatabase";


export class ProdutosDatabase extends BaseDatabase {
   private static PRODUTOS = "PRODUTOS";
   public adicionarProduto = async (
      produto: produto
   ) => {
      try {
         await this.getConnection().insert({
            id: produto.id,
            nome: produto.nome,
            marca: produto.marca,
            preco_compra: produto.preco_compra,
            cmv: produto.cmv,
            preco_venda: produto.preco_venda

         }).into(ProdutosDatabase.PRODUTOS);

      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   public ListarTodosProtudos = async (
      config: any, produto: produto
   ) => {
      try {

         const result = await this.getConnection().raw(` select
      p.NOME as PRODUTO,
      GROUP_CONCAT(DISTINCT c.TAG) as CATEGORIAS
    from PRODUTOS p 
    LEFT JOIN CATEGORIAS c 
      ON p.id = c.produto_id 
    group by p.NOME`)


         return { Produtos: result }

      } catch (error) {
         throw new Error(error.sqlMessage || error.message);
      }
   }
   // .select('NOME').as('PRODUTO').distinct({TAG:'TAG'}).as('CATEGORIAS').innerJoin('CATEGORIAS', 'PRODUTOS.id', '=', 'CATEGORIAS.produto_id')
   // .groupBy('NOME','TAG')
   // .orderBy(config.sort, config.order)
   // .limit(config.size)
   // .offset(config.offset)

   //   select
   //   p.NOME as PRODUTO,
   //   GROUP_CONCAT(DISTINCT c.TAG) as CATEGORIAS
   // from PRODUTOS p 
   // LEFT JOIN CATEGORIAS c 
   //   ON p.id = c.produto_id 
   // group by p.NOME
   public PesquisaProtudos = async (
      config: any, produto: produto
   ) => {
      try {

         const result = await this.getConnection()
            .select("PRODUTO.nome as Produto", "GROUP_CONCAT(`CATEGORIAS.TAG`, ',') as CATEGORIAS")
            .leftJoin("CATEGORIAS", "PRODUTO.id", "CATEGORIAS.produto_id")
               .groupBy("PRODUTO.nome")
               .from(ProdutosDatabase.PRODUTOS);
         const newResult = result.map((itens) => {
            console.log(itens.TAG)
         })
         //   return newResult
         return { Produtos: result }

      } catch (error) {
         throw new Error(error.sqlMessage || error.message);
      }
   }



   // public atualizaProduto = async(
   //    competicao: competicao
   // ) => {
   //    try {
   //       const hora_termino = competicao.hora_termino
   //    const progresso = competicao.progresso
   // const id = competicao.id
   //       const result = await this.getConnection()
   //       .update({progresso: competicao.progresso , hora_termino: competicao.hora_termino}).where( {id: competicao.id}).from(CompeticoesDatabase.Competicoes);

   //       return result;
   //    } catch (error) {
   //      throw new Error(error.sqlMessage || error.message);
   //  }
   // }

}



