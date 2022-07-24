
import { walking } from "../model/walking";
import { BaseDatabase } from "./BaseDatabase";

export class DogWalkingDatabase extends BaseDatabase {
    private static Dog_Walking = "Dog_Walking";
   public insertWalking = async(
    walking: walking
   ) => {
      try {
        await this.getConnection().insert({
            id: walking.id,
            status:walking.Status,
            data_agendamento :walking.data_agendamento,
            preco :walking.preco,
            duracao :walking.duracao,
            latitude :walking.latitude,
            longitude :walking.longitude,
            pets :walking.pets,
            hora_inicio :walking.hora_inicio,
            hora_termino :walking.hora_termino
       
         }).into(DogWalkingDatabase.Dog_Walking);
         
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }

   }
   public showWalking = async(
      walking: walking
  ) => {
     try {
  
        const result = await this.getConnection()
            .select("duracao").where({ id: walking.id }).from(DogWalkingDatabase.Dog_Walking);
  
        return result;
  
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
  }
}



