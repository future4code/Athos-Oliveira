import { generateId } from "../services/generateId";
import { LoginDatabase } from "../data/loginDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../data/error/custonError";
import { Authenticator } from "../services/Authenticator";



export class LoginBusiness {
public createLogin = async (input: any) => {
   try {
     const { email, password } = input;
 
     if ( !email || !password) {
      throw new CustomError(
        400,
         'Preencha os campos "email" ou "password" validos'
       );
     }


     if (!email.includes("@")) {
      throw new InvalidEmail();
    }

  
 
    const loginDatabase = new LoginDatabase();
    await loginDatabase.insertLogin({
      email,
      password,
    });

    const userDatabase = new LoginDatabase();
    const user = await userDatabase.findUserByEmail(email);

    if( password !== user.password){
      throw new InvalidPassword()
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({id: user.id})

    return token;

 

   } catch (error: any) {
     throw new Error(error.message);
   }
 };

}

