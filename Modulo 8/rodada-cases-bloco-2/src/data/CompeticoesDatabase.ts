
import { competicao,progresso_TYPES } from "../model/competicoes";
import { BaseDatabase } from "./BaseDatabase";


export class CompeticoesDatabase extends BaseDatabase {
    private static Competicoes = "COMPETICOES";
   public adicionarCompeticao = async(
      competicao: competicao
   ) => {
      try {
        await this.getConnection().insert({
            id: competicao.id,
            progresso:competicao.progresso,
            competicao:competicao.competicao,
            data_inicio :competicao.data_inicio,
            hora_inicio :competicao.hora_inicio,
            hora_termino :competicao.hora_termino
       
         }).into(CompeticoesDatabase.Competicoes);
         
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   public consultarResultadoCompeticao = async(
      config:any,competicao: competicao
  ) => {
     try  {
         const progresso = "Concluido"
          const result = await this.getConnection().select("atleta", "resultado", "unidade").join('RESULTADOS', 'COMPETICOES.id', '=', 'RESULTADOS.competicao_id').where('COMPETICOES.id', '=', config.id).andWhere({progresso: progresso})
      .orderBy(config.sort, config.order)
     .limit(config.size)
     .offset(config.offset)
     .from(CompeticoesDatabase.Competicoes);

          return {Resultados:result};
        } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
  }

  public competicaoEmAndamento = async(
   competicao: competicao
) => {
  try {
      const progresso = 'Em Andamento'
     const result = await this.getConnection()
         .select("*").where({progresso: progresso}).from(CompeticoesDatabase.Competicoes);
         return {EmAndamento:result};
   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
 }
}
public competicaoEncerrada = async(
   competicao: competicao
) => {
  try {
   const progresso = 'Concluido'
   const result = await this.getConnection()
       .select("*").where({progresso: progresso}).from(CompeticoesDatabase.Competicoes);
       return {Encerradas:result};

   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
 }
}
public todasCompeticoes = async(config:any,
   competicao: competicao
) => {
  try {
     const result = await this.getConnection()
     .select("*").orderBy(config.sort, config.order)
     .limit(config.size)
     .offset(config.offset).from(CompeticoesDatabase.Competicoes);
     return {ListaCompetiçoes:result};
   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
 }
}

public atualizaProgresso = async(
   competicao: competicao
) => {
   try {
      const hora_termino = competicao.hora_termino
   const progresso = competicao.progresso
const id = competicao.id
      const result = await this.getConnection()
      .update({progresso: competicao.progresso , hora_termino: competicao.hora_termino}).where( {id: competicao.id}).from(CompeticoesDatabase.Competicoes);
   
      return result;
   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
 }
}

}



