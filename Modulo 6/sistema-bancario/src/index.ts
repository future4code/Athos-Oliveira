import express, { Request, Response } from 'express';
import cors from 'cors';
import { clientes } from './data';
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


//mostrar todas as contas
app.get("/contas", (request: Request, response: Response) => {
	let contas = clientes.map((client) => client)
	response.status(200).send(contas)

})
//adiciona nova conta somente maiores de 18, CPF distintos
app.post("/novo", (request: Request, response: Response) => {

	const cpfNovo = request.body.cpf
	const nascimento = request.body.nascimento
	const nome = request.body.nome

	const verificacpf = clientes.map((user) => user.cpf).flat(1);
	const cpfVerificado = verificacpf.filter((verifica: any) => verifica == request.body.cpf);

	if (!cpfVerificado) {
		response.status(404).send("CPF Invalido!");
		return
	}

	if (cpfVerificado[0] === cpfNovo) {
		response.status(404).send("CPF ja cadastrado para outro usuario")
		return
	}


	const dia = new Date();
	let anoAtual = dia.getFullYear()

	let anoNascimento = nascimento.split("/");
	let dataNascimento = anoNascimento[2]
	if (anoAtual - dataNascimento < 18) {
		let idade = anoAtual - dataNascimento
		console.log(idade)
		response.status(404).send(`Sua idade é: ${idade}, Politicas impedem criação de contas para menores de 18 anos`)
		return
	}

	const novaConta = {
		clienteId: generateId(),
		cpf: cpfNovo,
		nome: nome,
		nascimento: nascimento,
		saldo: 0,
		extrato: []
	}
	clientes.push(novaConta);
	response.status(201).send(clientes)
})
//consulta saldo por cpf
app.get("/contas/:cpf", (request: Request, response: Response) => {

	const cpfNovo = request.params.cpf		
			const verificacpf = clientes.map((user) => user.cpf).flat(1);
			const cpfVerificado = verificacpf.filter((verifica: any) => verifica == request.params.cpf);
		
			if (cpfVerificado[0] !== cpfNovo) {
				response.status(404).send("CPF Invalido!")
				return
			}

	let contas = clientes.filter((cliente: any) => {
		return	 cliente.cpf == request.params.cpf
			}).map(a => a.saldo).toString()

	response.status(200).send(contas)
})

//atualiza saldo
app.put("/contas/:clienteId", (request: Request, response: Response) => {
	let atualizaSaldo = clientes.find((saldo: any) => {
		return saldo.clienteId == request.params.clienteId
	})
	if (!atualizaSaldo) {
		response.status(404).send("")
		return
	}
	atualizaSaldo.saldo = request.body.saldo
	response.status(201).send(clientes)
})
// //execicio 7

// app.delete("/afazer/:id", (request:Request, response:Response)=>{

// 	let atualizaTarefa = listaTarefas.find((tarefa: any) =>{
// 		return tarefa.id == request.params.id})

// 			if(!atualizaTarefa){
// 				response.status(404).send("")
// 				return
// 			}
// 			 atualizaTarefa.title = request.body.title
// 			 atualizaTarefa.id = request.body.id
// 			 atualizaTarefa.userId = request.body.userId
// 			 atualizaTarefa.completed = request.body.completed


// 			response.status(201).send(listaTarefas)
// })



app.listen(3000, () => {
	console.log("Sistem Online... OK")
})
