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
public getAllPost = async (
      req: Request,
      res: Response,post:any
   ) => {
      try {

         const posts = await new PostBusiness().getPost(post);

         res.send(posts).status(200);

     } catch (error:any) {
         res.send({ message: error.message }).status(error.status);
     }
 }
 public getOnePost = async (
   req: Request,
   res: Response,post:any
) => {
   try {
      const input = {
         id: req.params.id
     }
     post = input
  
      const posts = await new PostBusiness().getOnePost(post);

      res.send(posts).status(200);

  } catch (error:any) {
      res.send({ message: error.message }).status(error.status);
  }
}
   }
   
   


