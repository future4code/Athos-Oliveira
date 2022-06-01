import { generateId } from "../services/generateID";
import { TaskDatabase } from "../data/TaskDatabase";
import {task, taskInputDTO} from "../model/task"
import { CustonError, InvalidEmail, InvalidName } from "../error/custonError";


export class TaskBusiness {
public createTask = async (input: taskInputDTO) => {
   try {
     const { title, description, deadline, authorId } = input;
     

     if (!title || !description || !deadline || !authorId) {
       throw new CustonError(400,
         'Preencha os campos "title","description", "deadline" e "authorId"'
       );
     }
     if(title.length <3){
       throw new InvalidName()
     }
     if(!deadline.includes("@")){
      throw new InvalidEmail()
    }
 
     const id: string = generateId();
 
     const taskDatabase = new TaskDatabase();
    const task:task = {
      id,
      title,
      description,
      deadline,
      authorId
    }

     await taskDatabase.insertTask({
       id,
       title,
       description,
       deadline,
       authorId,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

}

