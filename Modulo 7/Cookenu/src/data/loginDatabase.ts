import { login } from "../model/singup";
import { BaseDatabase } from "./BaseDatabase";

export class LoginDatabase extends BaseDatabase {
   
   public insertLogin = async(
      login: login
   ) => {
      try {
         await LoginDatabase.connection.insert({
            id: login.id,
            email: login.email,
            password: login.password
         }).into('cookenu_Login')
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }


}

