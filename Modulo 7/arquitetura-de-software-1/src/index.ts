import { app } from "./controler/app"
import { UserControler } from './controler/userControler'
import { createTask } from './endpoints/createTask'

const userControler = new UserControler()

app.post('/user', userControler.createUser)

app.post('/task', createTask)


