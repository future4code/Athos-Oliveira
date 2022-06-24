import express from "express"
import { RecipeController } from "../recipeController"

export const recipeRouter = express.Router()
const recipeController = new RecipeController()

recipeRouter.post('/recipe', recipeController.createRecipe)
recipeRouter.get('/recipe', recipeController.getAllRecipe)
recipeRouter.get('/recipe/:id', recipeController.getOneRecipe)
recipeRouter.delete('/recipe/:id', recipeController.removeRecipe)