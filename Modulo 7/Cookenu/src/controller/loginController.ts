import { Request, Response } from "express";
import { LoginBusiness } from "../business/loginBusiness";


export class LoginController {

  public createLogin = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { email, password } = req.body
   
         const input = {
            email,
            password
         }
   
         const loginBusiness = new LoginBusiness
         loginBusiness.createLogin(input)
   
         res.status(201).send({ access_token: "token de acesso" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

   
   

}
