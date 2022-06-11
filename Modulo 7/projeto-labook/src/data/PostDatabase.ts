
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


}

