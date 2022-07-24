import { IdGenerator } from "../services/IdGenerator";
import { DogWalkingDatabase } from "../data/WalkingDatabase";
import { walking, walkingInputDTO } from "../model/walking";
import { CustomError } from "../error/customError";


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

      if (pets < 1) {
        throw new CustomError(400, "A quantidade deve ser maior que zero");
      }


      if (!data_agendamento || !duracao || !latitude || !longitude
        || !pets || !hora_inicio || !hora_termino) {
        throw new CustomError(400,
          'Preencha os campos "data do agendamento","tempo de de duração, inicio e fim" , "quantidade de pets", "latitude e longitude" ');
      }

      if (duracao != "00:30:00" && duracao != "01:00:00") {
        throw new CustomError(400,
          'Somente permidodo duraçoes de 30min e 60min ');
      }

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
      const Status: any = "Pendente"
       

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
      throw new Error(error.message);
    }
  }

}

