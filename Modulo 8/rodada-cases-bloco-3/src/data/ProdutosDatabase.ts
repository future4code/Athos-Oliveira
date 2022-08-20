
import { NOMEM } from "dns";
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

         const [result] = await this.getConnection().raw(` select
      p.NOME as Nome,
      GROUP_CONCAT(DISTINCT c.TAG) as Tag
    from PRODUTOS p 
    LEFT JOIN CATEGORIAS c 
      ON p.id = c.produto_id 
    group by p.NOME`)



         return { Produtos: result }

      } catch (error) {
         throw new Error(error.sqlMessage || error.message);
      }
   }

   public PesquisaProtudos = async (
      config: any, produto: produto
   ) => {
      try {

         const result = await this.getConnection()
            .select('Nome').as('PRODUTO').distinct({ Tag: 'Tag' }).as('CATEGORIAS').innerJoin('CATEGORIAS', 'PRODUTOS.id', '=', 'CATEGORIAS.produto_id')
            .groupBy('Nome', 'Tag')
            .orderBy(config.sort, config.order)
            .limit(config.size)
            .offset(config.offset)
            .from(ProdutosDatabase.PRODUTOS);


         return { Produtos: result }

      } catch (error) {
         throw new Error(error.sqlMessage || error.message);
      }
   }



   public atualizaProduto = async (
      produto: produto
   ) => {
      try {
      
         const name:any = produto.nome
   
         const result:any = await this.getConnection()
            .update({
               marca: produto.marca,nome: name.nome, preco_compra: produto.preco_compra, cmv: produto.cmv,
               preco_venda: produto.preco_venda
            }).where({ id: produto.id }).from(ProdutosDatabase.PRODUTOS);

         return result;
      } catch (error) {
         throw new Error(error.sqlMessage || error.message);
      }
   }
   public removeProduto = async(
      input:produto
   ) => {
      try {
         
         const result = await this.getConnection()
             .delete().where({ id: input.id}).andWhere ({ id: input.id}).from(ProdutosDatabase.PRODUTOS);
         return result;
   
       } catch (error) {
         throw new Error(error.sqlMessage || error.message);
     }
   }
}



