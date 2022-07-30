export type resultado = {
    id: string,
    competicao:string,
    atleta :string,
    resultado :number,
    unidade :string,
    competicao_id:string
 }

 export interface resultadoInputDTO  {
  competicao:string,
  atleta :string,
  resultado :number,
  unidade :string,
  competicao_id:string
 }