export type walking = {
    id: string,
    status: string,
    data_agendamento: string,
    preco: number,
    duracao:string,
    latitude:string,
    longitude:string,
    pets:number,
    hora_inicio:string,
    hora_termino:string
  
 }

 
 
 export interface walkingInputDTO  {
  
    data_agendamento: string,
    duracao:string,
    latitude:string,
    longitude:string,
    pets:number,
    hora_inicio:string,
    hora_termino:string
 }
 
