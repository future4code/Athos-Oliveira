import { singup } from "../model/singup";
import { BaseDatabase } from "./BaseDatabase";

export class SignupDatabase extends BaseDatabase {
   
   public insertSignup = async(
      singup: singup
   ) => {
      try {
         await SignupDatabase.connection.insert({
            id: singup.id,
            name: singup.name,
            email: singup.email,
            password: singup.password
         }).into('cookenu_User')
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }

   public getAllUser = async(
      signup: singup
   ) => {
      try {

         const result = await SignupDatabase.connection()
             .select("*").from('cookenu_User');

         return result;

     } catch (error:any) {
         throw new Error(error.sqlMessage || error.message);
     }
 }
 public getOneUser = async(
   signup: singup
) => {
   try {

      const result = await SignupDatabase.connection()
          .select("*").where({ id: signup.id }).from('cookenu_User');

      return result;

  } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
public removeUser = async(
   input:singup
) => {
   try {
      
      const result = await SignupDatabase.connection()
          .delete().where({ id: input.id}).andWhere ({ id: input.id}).from('cookenu_User');

      return result;

  } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
}

