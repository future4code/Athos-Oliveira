//import { Request, Response } from "express";
import { UserDatabase } from "../data/userDatabase";
import { v4 as generateId  } from "uuid"

export class userBusiness{
public  createUser = async (input:any) => {
   try {
      const { name, nickname, email, password } = input

      if (
         !name ||
         !nickname ||
         !email ||
         !password
      ) {
         throw new Error('Preencha os campos "name","nickname", "email" e "password"')
      }

      const id: string = generateId()

      const userDatabase = new UserDatabase()

      await userDatabase.insertUser({
         id,
         name,
         nickname,
         email,
         password
      })

      // res.status(201).send({ message: "Usuário criado!" })
   } catch (error:any) {
      throw new Error(error.message)
      // res.status(400).send(error.message)
   }
}
}