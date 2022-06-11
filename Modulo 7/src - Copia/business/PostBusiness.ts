import { generateId } from "../services/generateID";
import { PostDatabase } from "../data/PostDatabase";
import {post, postInputDTO} from "../model/post"
import { CustonError, InvalidEmail, InvalidName } from "../error/custonError";


export class PostBusiness {
public createPost = async (input: postInputDTO) => {
   try {
     const { photo, description, type, createdAt ,authorId} = input;
     

     if (!photo || !description || !type || !createdAt||!authorId) {
       throw new CustonError(400,
         'Preencha os campos "photo","description", "type" , "createdAt"e authorId' 
       );
     }
    //  if(title.length <3){
    //    throw new InvalidName()
    //  }
    //  if(!deadline.includes("@")){
    //   throw new InvalidEmail()
    // }
 
     const id: string = generateId();
 
     const postDatabase = new PostDatabase();
    const post:post = {
      id,
      photo,
      description,
      type,
      createdAt,
      authorId
    }

     await PostDatabase.insertPost({
       id,
       photo,
       description,
       type,
       createdAt,
       authorId,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

}

