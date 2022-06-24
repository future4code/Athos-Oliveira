import { generateId } from "../services/generateID";
import { SignupDatabase } from "../data/singupDatabase";
import { singup } from "../model/singup";

export class SignupBusiness {
public createSignup = async (input: any) => {
   try {
     const { name, email, password } = input;
 
     if (!name  || !email || !password) {
       throw new Error(
         'Preencha os campos "name", "email" e "password"'
       );
     }

 
     const id: string = generateId();
 
     const signupDatabase = new SignupDatabase();
     await signupDatabase.insertSignup({
       id,
       name,
       email,
       password,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };
 public getUser = async (user:singup) => {
  try {

      return await new SignupDatabase().getAllUser(user);
  
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}
public getOneUser = async (user:singup) => {
  try {

      return await new SignupDatabase().getOneUser(user);
  
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}
public removeUser = async (user:singup) => {
  try {
      
      return await new SignupDatabase().removeUser(user);
  
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}
}

