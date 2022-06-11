import { generateId } from "../services/generateID";
import { UserDatabase } from "../data/UserDatabase";


export class UserBusiness {
public createUser = async (input: any) => {
   try {
     const { name, nickname, email, password } = input;
 
     if (!name  || !email || !password) {
       throw new Error(
         'Preencha os campos "name","nickname", "email" e "password"'
       );
     }
 
     const id: string = generateId();
 
     const userDatabase = new UserDatabase();
     await userDatabase.insertUser({
       id,
       name,
       email,
       password,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

}

