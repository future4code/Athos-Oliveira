import express from "express"
import { TaskControler } from "../taskControler"

export const taskRouter = express.Router()
const taskControler = new TaskControler()

taskRouter.post('/create', taskControler.createTask)