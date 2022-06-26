import { login } from "../model/singup";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError,UserNotFoud, InvalidEmail, InvalidName, InvalidPassword } from "../data/error/custonError";
import {  UserInputDTO,  user,  EditUserInputDTO,  EditUserInput,  LoginInputDTO,} from "../model/singup";




export class LoginDatabase extends BaseDatabase {
   
   public insertLogin = async(
      login: login
   ) => {
      try {
         await LoginDatabase.connection.insert({
            email: login.email,
            password: login.password
         }).into('cookenu_Login')
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }
   public findUserByEmail = async (email: string):Promise<user> => {
      try {
        const result = await LoginDatabase.connection("cookenu_Login").where({email})
        
        if(!result.length) {
          throw new UserNotFoud()
        }
  
       return result[0]
      } catch (error: any) {
        throw new CustomError(400, error.message);
      }
    };

}

