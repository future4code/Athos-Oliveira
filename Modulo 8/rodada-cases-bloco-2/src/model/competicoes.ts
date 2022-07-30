export type competicao = {
    id: string,
    progresso:progresso_TYPES,
    competicao:string,
    data_inicio :Date,
    hora_inicio :string,
    hora_termino :string
 }
 export interface competicaoInputDTO  {
  competicao:string,
   data_inicio :Date,
   hora_inicio :string,
   hora_termino :string
 }
 export enum progresso_TYPES {
   PENDENTE = "Pendente",
   PROGRESSO = "Em Andamento",
   CONCLUIDO = "Concluido",
}