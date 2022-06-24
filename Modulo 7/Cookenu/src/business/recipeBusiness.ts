import { generateId } from "../services/generateID";
import { RecipeDatabase } from "../data/recipeDatabase";
import {recipe, recipeInputDTO} from "../model/recipe"
import { CustonError } from "../data/error/custonError";
import * as postDatabase from '../data/recipeDatabase'


export class RecipeBusiness {
public createRecipe = async (input: recipeInputDTO) => {
   try {
     const { title, description, data ,authorId} = input;
     

     if (!title || !description  || !data||!authorId) {
       throw new CustonError(400,
         'Preencha os campos "title","description" , "Data" e "id"');
     }
     const id: string = generateId();
     const recipeDatabase = new RecipeDatabase();
    const recipe:recipe = {
      id,
      title,
      description,
      data,
      authorId
    }

     await recipeDatabase.insertRecipe({
       id,
       title,
       description,
       data,
       authorId,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };
 public getRecipe = async (recipe:recipe) => {
  try {

      return await new RecipeDatabase().getAllRecipe(recipe);
  
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}
public getOneRecipe = async (recipe:recipe) => {
  try {

      return await new RecipeDatabase().getOneRecipe(recipe);
  
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}
public removeRecipes = async (recipe:recipe) => {
  try {
      
      return await new RecipeDatabase().removeRecipe(recipe);
  
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}
}

