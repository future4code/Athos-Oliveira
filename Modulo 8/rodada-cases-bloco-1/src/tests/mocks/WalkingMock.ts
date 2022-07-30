import { walking } from "../../model/walking";

export class WalkingMock {
  public async createUser(walking: walking): Promise<void> {}
}

export default new WalkingMock();

export const calculos = (duracao: any, pets: any) => {
  if (duracao === "00:30:00") {
    if (pets >= 2) {
      let quant = pets
      pets = pets * -15
      let preco: number = 25 * quant + pets
      return preco
    } else {
      let preco: number = 25 * pets
      return preco
    }
  } else if (duracao === "01:00:00") {
    if (pets >= 2) {
      let quant = pets
      pets = pets * -20
      let preco: number = 35 * quant + pets
      return preco
    } else {
      let preco: number = 35 * pets
      return preco
    }
  }
}