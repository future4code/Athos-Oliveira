
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
  public startWalking = async(
   walking: walking
) => {
  try {

     const result = await this.getConnection()
         .select("hora_inicio").where({ id: walking.id }).from(DogWalkingDatabase.Dog_Walking);

     return result;

   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
 }
}
public finishWalking = async(
   walking: walking
) => {
  try {

     const result = await this.getConnection()
         .select("hora_termino").where({ id: walking.id }).from(DogWalkingDatabase.Dog_Walking);

     return result;

   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
 }
}
public allwalking = async(config:any,
   walking: walking
) => {
  try {
   const data = new Date();

   const dia = data.getDate()
   const mes = data.getMonth()
   const ano = data.getFullYear()


     const result = await this.getConnection()
     .select("*").where('data_agendamento', '>=',ano-mes-dia).orderBy(config.sort, config.order)
     .limit(config.size)
     .offset(config.offset).from(DogWalkingDatabase.Dog_Walking);
     return result;


// const dia = new Date();
// let anoAtual = dia.getFullYear()

// let anoNascimento = nascimento.split("/");
// let dataNascimento = anoNascimento[2]
// if (anoAtual - dataNascimento < 18) {
//    let idade = anoAtual - dataNascimento
//    console.log(idade)
//    response.status(404).send(`Sua idade é: ${idade}, Politicas impedem criação de contas para menores de 18 anos`)



  // const result = await connection("labecommerce_products").select() 

// const [result] = await connection("labecommerce_products")
//   .select().where("name", "like", `%${search}%`)




   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
 }
}
}



