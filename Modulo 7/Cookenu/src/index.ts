import { app } from "./controller/app"
import  {signupRouter}from"./controller/routes/singupRouter"
import  {loginRouter}from"./controller/routes/loginRouter"
import  {recipeRouter}from"./controller/routes/recipeRouter"
import  {friendRouter}from"./controller/routes/friendRouter"


app.post('/signup', signupRouter)
app.post('/login', loginRouter)
app.get('/user/profile', signupRouter)
app.get('/user/:id', signupRouter)
app.delete('/user/:id', signupRouter)
app.post('/recipe', recipeRouter)
app.get('/recipe', recipeRouter)
app.get('/recipe/:id', recipeRouter)
app.delete('/recipe/:id', recipeRouter)
app.post('/user/follow', friendRouter)
app.delete('/user/unfollow/:id', friendRouter)

