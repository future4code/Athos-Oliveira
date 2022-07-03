
import { recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
   
   public insertRecipe = async(
      recipe: recipe
   ) => {
      try {
         await RecipeDatabase.connection.insert({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            data: recipe.data,
            authorId:recipe.authorId
         }).into('cookenu_Recipes')
         
      } catch (error:any) {
         throw new Error(error.message)
      }

   }
   public getAllRecipe = async(
      recipe: recipe
   ) => {
      try {

         const result = await RecipeDatabase.connection()
             .select("*").from('cookenu_Recipes');

         return result;

     } catch (error:any) {
         throw new Error(error.sqlMessage || error.message);
     }
 }
 public getOneRecipe = async(
   recipe: recipe
) => {
   try {

      const result = await RecipeDatabase.connection()
          .select("*").where({ id: recipe.id }).from('cookenu_Recipes');

      return result;

  } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
public removeRecipe = async(
   input:recipe
) => {
   try {
      
      const result = await RecipeDatabase.connection()
          .delete().where({ id: input.id}).andWhere ({ id: input.id}).from('cookenu_Recipes');

      return result;

  } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
}



