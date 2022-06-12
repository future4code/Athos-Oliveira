
import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
   
   public insertPost = async(
      post: post
   ) => {
      try {
         await PostDatabase.connection.insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            createdAt: post.createdAt,
            authorId:post.authorId
         }).into('Labook_Post')
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }
   public getAllPost = async(
      post: post
   ) => {
      try {

         const result = await PostDatabase.connection()
             .select("*").from('Labook_Post');

         return result;

     } catch (error:any) {
         throw new Error(error.sqlMessage || error.message);
     }
 }
 public getOnePost = async(
   post: post
) => {
   try {

      const result = await PostDatabase.connection()
          .select("*").where({ id: post.id }).from('Labook_Post');

      return result;

  } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
   
}



