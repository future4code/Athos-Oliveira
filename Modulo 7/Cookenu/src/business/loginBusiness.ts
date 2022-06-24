import { generateId } from "../services/generateID";
import { LoginDatabase } from "../data/loginDatabase";


export class LoginBusiness {
public createLogin = async (input: any) => {
   try {
     const { email, password } = input;
 
     if ( !email || !password) {
       throw new Error(
         'Preencha os campos "email" ou "password" validos'
       );
     }
     
 
     const id: string = generateId();
 
     const loginDatabase = new LoginDatabase();
     await loginDatabase.insertLogin({
       id,
       email,
       password,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

}

