import { generateId } from "../services/generateId";
import { SignupDatabase } from "../data/singupDatabase";
import { singup } from "../model/singup";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

const idGenerator = new generateId()
const tokenGenerator = new Authenticator()
const userDatabase = new SignupDatabase();
const hashManager = new HashManager()

export class SignupBusiness {
public createSignup = async (input: any) => {
   try {
     const { name, email, password } = input;
 
     if (!name  || !email || !password) {
       throw new Error(
         'Preencha os campos "name", "email" e "password"'
       );
     }
     if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!password || password.length < 6) {
      throw new Error("Invalid password");
    }
 
    const id: string = idGenerator.generateId()
    const hashPassword = await hashManager.generateHash(password)
 
     const signupDatabase = new SignupDatabase();
     await signupDatabase.insertSignup({
       id,
       name,
       email,
       password:hashPassword,
     });

     const authenticator = new Authenticator();
     const token = authenticator.generateToken({ id });
     return token;

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

