export type produto = {
  id :string,
  nome :string,
  marca:string,
  preco_compra :number,
  icms :number,
  pis :number,
  cofins :number,
  lucro :number,
  cmv:number,
  preco_venda :number
 }
 export interface produtoInputDTO  {
  nome :string,
  marca:string,
  preco_compra :number,
  icms :number,
  pis :number,
  cofins :number,
  lucro :number,
  cmv:number,
  preco_venda :number
 }