import { IdGenerator } from "../services/IdGenerator";
import { DogWalkingDatabase } from "../data/WalkingDatabase";
import { STATUS_TYPES, walking, walkingInputDTO } from "../model/walking";


const idGenerator = new IdGenerator()

export class DogWalkingBusiness {
  public createWalking = async (input: walkingInputDTO) => {
    try {

      const {
        data_agendamento,
        duracao,
        latitude,
        longitude,
        pets,
        hora_inicio,
        hora_termino } = input;


     const calculos = (duracao: any, pets: any) => {
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
      const preco: any = calculos(input.duracao, input.pets)
      const id: string = idGenerator.generate()
      const Status = STATUS_TYPES.PENDENTE
   
       

      const dogWalkingDatabase = new DogWalkingDatabase();
      const walking: walking = {
        id,
        Status,
        data_agendamento,
        preco,
        duracao,
        latitude,
        longitude,
        pets,
        hora_inicio,
        hora_termino
      }

      await dogWalkingDatabase.insertWalking({
        id,
        Status,
        data_agendamento,
        preco,
        duracao,
        latitude,
        longitude,
        pets,
        hora_inicio,
        hora_termino

      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public showWalking = async (walking: walking) => {
    try {

      return await new DogWalkingDatabase().showWalking(walking);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public startWalking = async (walking: walking) => {
    try {

      return await new DogWalkingDatabase().startWalking(walking);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public finishWalking = async (walking: walking) => {
    try {

      return await new DogWalkingDatabase().finishWalking(walking);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public allwalking = async (walking: walking) => {
    try {

      return await new DogWalkingDatabase().allwalking(walking);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

