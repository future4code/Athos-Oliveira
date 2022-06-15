import express from "express"
import { PostController } from "../postController"

export const postRouter = express.Router()
const postController = new PostController()

postRouter.post('/post', postController.createPost)
postRouter.get('/all', postController.getAllPost)
postRouter.get('/post/:id', postController.getOnePost)