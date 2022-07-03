import express from "express"
import { LoginController } from "../loginController"

export const loginRouter = express.Router()
const loginController = new LoginController()

loginRouter.post('/login', loginController.createLogin)