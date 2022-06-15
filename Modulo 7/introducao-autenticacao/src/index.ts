import { app } from "./controller/app"
import  {userRouter}from"./controller/routes/userRouter"
import  {postRouter}from"./controller/routes/postRouter"
import  {friendRouter}from"./controller/routes/friendRouter"


app.post('/user', userRouter)
app.post('/post', postRouter)
app.get('/all', postRouter)
app.get('/post/:id', postRouter)
app.post('/friend', friendRouter)
app.delete('/friend/:id', friendRouter)



