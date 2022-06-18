import app from "./controller/app"
import { userRouter } from "./controller/userRouter"

//asd
app.use('/user/', userRouter)
