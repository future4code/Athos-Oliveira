import { IdGenerator } from "../services/IdGenerator";
import { CategoriaDatabase } from "../data/CategoriasDatabase";
import { categotia,categotiaInputDTO } from "../model/categoria";


const idGenerator = new IdGenerator()

export class CategoriaBusiness {
  public adicionarCategoria = async (input: categotiaInputDTO) => {
    try {

      const {
        TAG,
        produto_id
        } = input;

      const id: string = idGenerator.generate()

      const categoriaDatabase = new CategoriaDatabase();
      const categotia: categotia = {
        id,
        TAG,
        produto_id
      }
  
      await categoriaDatabase.adicionarCategoria({
        id,
        TAG,
        produto_id

      });
     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }




  public TodasCategorias = async (categotia: categotia,config:any) => {
    try {
     
      return await new CategoriaDatabase().TodasCategorias(categotia,config);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public atualizaCategoria = async (categotia: categotia) => {
    
    try {
      return await new CategoriaDatabase().atualizaCategoria(categotia);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public removeCategoria = async (categotia:categotia) => {
    try {
        
        return await new CategoriaDatabase().removeCategoria(categotia);
    
     
      } catch (error) {
      throw new Error(error.message);
    }
  }
}

