export type walking = {
    id: string,
    Status:STATUS_TYPES.PENDENTE,
    data_agendamento: Date,
    preco: number,
    duracao:string,
    latitude:number,
    longitude:number,
    pets:number,
    hora_inicio:string,
    hora_termino:string
  
 }
 export interface walkingInputDTO  {
    data_agendamento: Date,
    duracao:string,
    latitude:number,
    longitude:number,
    pets:number,
    hora_inicio:string,
    hora_termino:string
 }
 export enum STATUS_TYPES {
   PENDENTE = "Pendente",
   PROGRESSO = "Em Andamento",
   DONE = "Concluido",
}