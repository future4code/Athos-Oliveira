import express, { Request, Response } from 'express';
import cors from 'cors';
import { users } from './data';
import { v4 as generateId } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors())
const Erros: { [cave: string]: { status: number, message: string } } = {
	DESCRICAO_NOT_FOUND: { status: 401, message: "a Descrição deve conter somente letras" },
	AGE_NOT_FOUND: { status: 401, message: "O Preco deve conter somente numeros" },
	AGE_IS_ZERO: { status: 401, message: "O Preco nao pode ser zerado" },
	MISSING_PARAMETERS: { status: 422, message: "Alguma informação está faltando. Consulte a documentação." },
	SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" },
}



app.get("/teste", (request: Request, response: Response) => {
	response.status(200).send("Teste OK!")
})

app.get("/allusers", (request: Request, response: Response) => {
	response.status(200).send(users)
})



 app.get("/user/:name", (request: Request, response: Response) => {

 try{
	let nameUser = request.params.name
 	let result  = users.find(user => user.name === nameUser);

		if (!request.params.name) {
		throw new Error(Erros.MISSING_PARAMETERS.message)
	}
	
	response.status(201).send(result)
} catch (error: any) {
	switch (error.message) {
		case Erros.MISSING_PARAMETERS.message:
			response.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message)
			break
		default:
			response.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)
	}
}

 	
 })

app.post("/cadastro", (request: Request, response: Response) => {
	try {

		const { id, name, email, age, type } = request.body;

		if ( !name || !email || !age ||!type ) {
			throw new Error(Erros.MISSING_PARAMETERS.message)
		}
		if (typeof name !== 'string') {
			throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
		}
		if (typeof age !== 'number') {
			throw new Error(Erros.AGE_NOT_FOUND.message)
		}
		if (typeof email !== 'string') {
			throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
		}
		const novoUsuario = {
			id: id,
            name: name,
            email: email,
            type: type,
            age: age
		}

users.push(novoUsuario);
console.log(novoUsuario)
console.log(users)

	} catch (error: any) {
		switch (error.message) {
			case Erros.MISSING_PARAMETERS.message:
				response.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message)
				break
			case Erros.DESCRICAO_NOT_FOUND.message:
				response.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message)
				break
			case Erros.AGE_NOT_FOUND.message:
				response.status(Erros.AGE_NOT_FOUND.status).send(Erros.AGE_NOT_FOUND.message)
				break
			default:
				response.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)

		}
	}
	response.status(201).send(users)
})
app.listen(3000, () => {
	console.log("Sistem Online... OK")
})
