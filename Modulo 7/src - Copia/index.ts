import { app } from "./controller/app"
import { createTask } from './endpoints/createTask'
import  {userRouter}from"./controller/routes/userRouter"


app.use('/user', userRouter)

app.post('/task', createTask)


