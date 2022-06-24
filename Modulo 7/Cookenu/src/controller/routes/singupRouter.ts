import express from "express"
import { SignupController } from "../singupController"

export const signupRouter = express.Router()
const signupController = new SignupController()

signupRouter.post('/signup', signupController.createSignup)
signupRouter.get('/user/profile', signupController.getAllUser)
signupRouter.get('/user/:id', signupController.getOneUser)
signupRouter.delete('/user/:id', signupController.removeUser)