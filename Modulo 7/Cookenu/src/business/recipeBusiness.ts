import { generateId } from "../services/generateId";
import { RecipeDatabase } from "../data/recipeDatabase";
import {recipe, recipeInputDTO} from "../model/recipe"
import {  CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../data/error/custonError";

const idGenerator = new generateId()

export class RecipeBusiness {
public createRecipe = async (input: recipeInputDTO) => {
   try {
     const { title, description, data ,authorId} = input;
     

     if (!title || !description  || !data||!authorId) {
       throw new CustomError(400,
         'Preencha os campos "title","description" , "Data" e "id"');
     }
     const id: string = idGenerator.generateId()
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

