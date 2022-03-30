import express, { Request, Response } from 'express';
import cors from 'cors';
import { users } from './data';
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

app.listen(3000, ()=> {
	console.log("Server running OK 127.0.0.1:3000")
})

app.get('/', (request,  response) =>{
	response.status(200).send("get OK")
	console.log("ok")
	const id = request.params
	const senha = request.headers
	const nome = request.body
	console.log(id,senha,nome)
})

//Execicio 4
app.get('/apoios', (request,  response) =>{
	
	const listaApoios = users.map((a => a.nome))

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


