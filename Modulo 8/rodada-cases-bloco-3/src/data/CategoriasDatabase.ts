
import { categotia } from "../model/categoria";
import { BaseDatabase } from "./BaseDatabase";


export class CategoriaDatabase extends BaseDatabase {
    private static CATEGORIAS = "CATEGORIAS";
   public adicionarCategoria = async(
      categotia: categotia
   ) => {
      try {
        await this.getConnection().insert({
            id:categotia.id,
            TAG: categotia.TAG,
            produto_id: categotia.produto_id
         }).into(CategoriaDatabase.CATEGORIAS);
         
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
  
public TodasCategorias = async(config:any,
   categotia: categotia
) => {
  try {
   
     const result = await this.getConnection()
     .select("TAG","produto_id").orderBy(config.sort, config.order)
     .limit(config.size)
     .offset(config.offset).from(CategoriaDatabase.CATEGORIAS);
     return {Categotias:result};
   } catch (error) {
     throw new Error(error.sqlMessage || error.message);
 }
}

}



