import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";


export class TaskControler {

  public createTask = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { title, description, deadline, authorId } = req.body
   
         const input = {
            title,
            description,
            deadline,
            authorId
         }
   
         const taskBusiness = new TaskBusiness
         taskBusiness.createTask(input)
   
         res.status(201).send({ message: "Usuário criado!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

   
   

}
