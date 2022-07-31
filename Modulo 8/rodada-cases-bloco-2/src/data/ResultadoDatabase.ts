
import { resultado } from "../model/resultados";
import { BaseDatabase } from "./BaseDatabase";


export class ResultadoDatabase extends BaseDatabase {
    private static Resultado = "RESULTADOS";
   public adicionarResultado = async(
      resultado: resultado
   ) => {
      try {
        await this.getConnection().insert({
            id:resultado.id,
            competicao:resultado.competicao,
            atleta:resultado.atleta,
            resultado:resultado.resultado,
            unidade:resultado.unidade,
            competicao_id:resultado.competicao_id
         }).into(ResultadoDatabase.Resultado);
         
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   public consultarResultado = async(
      resultado:resultado
  ) => {
     try  {

          const result = await this.getConnection().select("*").where({atleta: resultado.atleta}).from(ResultadoDatabase.Resultado);

          return {Atleta_Resultado:result};
        } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
  }

public Ranking = async(config:any,
   resultado: resultado
) => {
  try {
   
     const result = await this.getConnection()
     .select("*").orderBy(config.sort, config.order)
     .limit(config.size)
     .offset(config.offset).from(ResultadoDatabase.Resultado);
     return {Ranking:result};
   } catch (error) {
     throw new Error(error.sqlMessage || error.message);
 }
}

}



