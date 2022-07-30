import { IdGenerator } from "../services/IdGenerator";
import { ResultadoDatabase } from "../data/ResultadoDatabase";
import { resultado,resultadoInputDTO } from "../model/resultados";


const idGenerator = new IdGenerator()

export class ResultadoBusiness {
  public criarResultado = async (input: resultadoInputDTO) => {
    try {

      const {
        
        competicao,
        atleta,
        resultado,
        unidade,
        competicao_id } = input;

      const id: string = idGenerator.generate()

      const resultadosDatabase = new ResultadoDatabase();
      const resultados: resultado = {
        id,
        competicao,
        atleta,
        resultado,
        unidade,
        competicao_id
      }
  
      await resultadosDatabase.adicionarResultado({
        id,
        competicao,
        atleta,
        resultado,
        unidade,
        competicao_id

      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public consultarResultado = async (resultado: resultado) => {
    try {

      return await new ResultadoDatabase().consultarResultado(resultado);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }


  public Ranking = async (resultado: resultado,config:any) => {
    try {
     
      return await new ResultadoDatabase().Ranking(resultado,config);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

