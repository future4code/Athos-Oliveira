import { Request, Response } from "express";
import { RecipeBusiness } from "../business/recipeBusiness";
import {recipe, recipeInputDTO} from "../model/recipe"


export class RecipeController {

  public createRecipe = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { title, description, data ,authorId}= req.body
   
         const input: recipeInputDTO = {
            title,
            description,
            data,
            authorId
         }
   
         const recipeBusiness = new RecipeBusiness
         recipeBusiness.createRecipe(input)
   
         res.status(201).send({ message: "Receita criado!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }
public getAllRecipe = async (
      req: Request,
      res: Response,recipe:any
   ) => {
      try {

         const recipes = await new RecipeBusiness().getRecipe(recipe);

         res.send(recipes).status(200);

     } catch (error:any) {
         res.send({ message: error.message }).status(error.status);
     }
 }
 public getOneRecipe = async (
   req: Request,
   res: Response,recipe:any
) => {
   try {
      const input = {
         id: req.params.id
     }
     recipe = input
  
      const recipes = await new RecipeBusiness().getOneRecipe(recipe);

      res.send(recipes).status(200);

  } catch (error:any) {
      res.send({ message: error.message }).status(error.status);
  }
}
public removeRecipe = async (
   req: Request,
   res: Response
) => {
   try {

      const input:any = {
         id: req.params.id,
         // friendId:req.body.friendId
     }
          
   
   
      const recipeBusiness = new RecipeBusiness
      recipeBusiness.removeRecipes(input)

      res.status(201).send({ message: "Receita Removida!" })

  } catch (error:any) {
      res.send({ message: error.message }).status(error.status);
  }
}
   }
   
   


