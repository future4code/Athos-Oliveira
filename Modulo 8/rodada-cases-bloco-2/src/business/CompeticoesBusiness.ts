import { IdGenerator } from "../services/IdGenerator";
import { CompeticoesDatabase } from "../data/CompeticoesDatabase";
import { progresso_TYPES,competicao,competicaoInputDTO } from "../model/competicoes";


const idGenerator = new IdGenerator()

export class CompeticoesBusiness {
  public criarCompeticao = async (input: competicaoInputDTO) => {
    try {

      const {
        competicao,
        data_inicio,
        hora_inicio,
        hora_termino } = input;

      const id: string = idGenerator.generate()
      const progresso:progresso_TYPES = progresso_TYPES.PENDENTE
       
      const competicoesDatabase = new CompeticoesDatabase();
      const competicoes: competicao = {
        id,
        progresso,
        competicao,
        data_inicio,
        hora_inicio,
        hora_termino
      }
    
      await competicoesDatabase.adicionarCompeticao({
        id,
        progresso,
        competicao,
        data_inicio,
        hora_inicio,
        hora_termino

      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public consultarResultadoCompeticao = async (competicao: competicao) => {
    try {

      return await new CompeticoesDatabase().consultarResultadoCompeticao(competicao,competicao);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public competicaoEmAndamento = async (competicao: competicao) => {
    try {

      return await new CompeticoesDatabase().competicaoEmAndamento(competicao);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public competicaoEncerrada = async (competicao: competicao) => {
    try {

      return await new CompeticoesDatabase().competicaoEncerrada(competicao);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public todasCompeticoes = async (competicao: competicao) => {
    try {

      return await new CompeticoesDatabase().todasCompeticoes(competicao,competicao);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public atualizaProgresso = async (competicao: competicao) => {
    
    try {
 
      return await new CompeticoesDatabase().atualizaProgresso(competicao);

     } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

