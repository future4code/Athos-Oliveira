import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import {post, postInputDTO} from "../model/post"

export class PostController {

  public createPost = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { photo, description, type, createdAt ,authorId}= req.body
   
         const input: postInputDTO = {
            photo,
            description,
            type,
            createdAt,
            authorId
         }
   
         const postBusiness = new PostBusiness
         postBusiness.createPost(input)
   
         res.status(201).send({ message: "Post criado!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

   
   

}
