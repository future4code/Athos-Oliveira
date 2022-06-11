import express from "express"
import { TaskControler } from "../postControler"

export const taskRouter = express.Router()
const taskControler = new TaskControler()

taskRouter.post('/create', taskControler.createTask)