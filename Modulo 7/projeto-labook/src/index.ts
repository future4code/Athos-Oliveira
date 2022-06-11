import { app } from "./controller/app"
import  {userRouter}from"./controller/routes/userRouter"
import  {postRouter}from"./controller/routes/postRouter"
import  {friendRouter}from"./controller/routes/friendRouter"


app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/friend', friendRouter)



