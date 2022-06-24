import { Request, Response } from "express";
import { SignupBusiness } from "../business/singupBusiness";
import { singup } from "../model/singup";

export class SignupController {

  public createSignup = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { name,  email, password } = req.body
   
         const input = {
            name,
            email,
            password
         }
   
         const signupBusiness = new SignupBusiness
         signupBusiness.createSignup(input)
   
         res.status(201).send({ access_token: "token de acesso" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }
   public getAllUser = async (
      req: Request,
      res: Response,user:any
   ) => {
      try {

         const users = await new SignupBusiness().getUser(user);

         res.send(users).status(200);

     } catch (error:any) {
         res.send({ message: error.message }).status(error.status);
     }
 }
 public getOneUser = async (
   req: Request,
   res: Response,user:any
) => {
   try {
      const input = {
         id: req.params.id
     }
     user = input
  
      const users = await new SignupBusiness().getOneUser(user);

      res.send(users).status(200);

  } catch (error:any) {
      res.send({ message: error.message }).status(error.status);
  }
}
public removeUser = async (
   req: Request,
   res: Response
) => {
   try {

      const input:any= {
         id: req.params.id,
         // id:req.body.id
     }
          
   
   
      const singupBusiness = new SignupBusiness
      singupBusiness.removeUser(input)

      res.status(201).send({ message: "Conta Removida!" })

  } catch (error:any) {
      res.send({ message: error.message }).status(error.status);
  }
} 

}
