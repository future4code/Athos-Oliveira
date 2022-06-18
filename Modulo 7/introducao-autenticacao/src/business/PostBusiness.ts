import { generateId } from "../services/generateID";
import { PostDatabase } from "../data/PostDatabase";
import {post, postInputDTO} from "../model/post"
import { CustonError } from "../error/custonError";
import * as postDatabase from '../data/PostDatabase'


export class PostBusiness {
public createPost = async (input: postInputDTO) => {
   try {
     const { photo, description, type, createdAt ,authorId} = input;
     

     if (!photo || !description || !type || !createdAt||!authorId) {
       throw new CustonError(400,
         'Preencha os campos "photo","description", "type" , "createdAt"e authorId' 
       );
     }
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

     await postDatabase.insertPost({
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
 public getPost = async (post:post) => {
  try {

      return await new PostDatabase().getAllPost(post);
  
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}
public getOnePost = async (post:post) => {
  try {

      return await new PostDatabase().getOnePost(post);
  
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}

}

