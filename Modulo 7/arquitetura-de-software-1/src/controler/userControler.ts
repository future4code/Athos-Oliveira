import { Request, Response } from "express";
import { v4 as generateId  } from "uuid"
import { userBusiness } from "../business/userBusiness";

export class UserControler {
public createUser = async (req: Request,res: Response) => {
   try {
      const { name, nickname, email, password } = req.body
      const input ={
         name,
         nickname,
         email,
         password
      }
      const userBusiness1 = new userBusiness
      userBusiness1.createUser(input)

      res.status(201).send({ message: "Usuário criado!" })
   } catch (error:any) {
      res.status(400).send(error.message)
   }
}
}