import express, { Request, Response } from 'express';
import cors from 'cors';
import { users } from './data';
import { listaTarefas } from './data2';
import { v4 as generateId } from 'uuid';
import { flattenDiagnosticMessageText, idText } from 'typescript';
// import { AddressInfo } from "net";


const app = express();

app.use(express.json());
app.use(cors())

// const server = app.listen(process.env.PORT || 3001, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });
//Execicio 1
app.get("/ping", (request:Request, response:Response) =>{
	response.status(200).send("pong")
})
app.get("/todo", (request:Request, response:Response) =>{
	
	let statusAll = listaTarefas
	response.status(200).send(statusAll)


})
//execicio 4
app.get("/Concluido", (request:Request, response:Response) =>{
	let statusOK = listaTarefas.filter((list) => list.completed == true)
	//let statusOK = listaTarefas.find((list) => list.completed == true)
	if(!statusOK){
		response.status(404).send("sem tarefas")
		return
	}

	response.status(201).send(statusOK)

});
//execicio 5
app.post("/afazer", (request:Request, response:Response)=>{

	const id = request.body.id
	const title = request.body.title
	const completed = request.body.completed

	const novaTarefa = {
		userId:generateId(),
		id:id,
		title:title,
		completed:completed
	}
	listaTarefas.push(novaTarefa);
	response.status(201).send(listaTarefas)
})
//execicio 6 
app.put("/afazer/:id", (request:Request, response:Response)=>{

let atualizaTarefa = listaTarefas.find((tarefa: any) =>{
return tarefa.id == request.params.id})

	if(!atualizaTarefa){
		response.status(404).send("")
		return
	}
	 atualizaTarefa.title = request.body.title
	 atualizaTarefa.completed = request.body.completed


	response.status(201).send(listaTarefas)
})
//execicio 7






//execicios anteiores
app.get('/', (request,  response) =>{
	response.status(200).send("get OK")
	console.log("ok")
	const id = request.params
	const senha = request.headers.autorization
	const nome = request.body
	console.log(id,senha,nome)
})

//Execicio 4
app.get('/apoios', (request,  response) =>{
	
	const listaApoios = users.map((a => a.mes))

	response.status(200).send(listaApoios)
	const id = request.params
	const senha = request.headers
	const nome = request.body
	console.log(id,senha,nome)
})
//execicio 5
app.get('/posts', (request,  response) =>{
	
	const id = request.params
	const userId = request.headers
	const title = request.body
	const body = request.body
})


app.listen(3000, ()=> {
	console.log("Server running OK 127.0.0.1:3000")
})
