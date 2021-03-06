import express, { Request, Response } from 'express';
import cors from 'cors';
import { produtos } from './data';
import { v4 as generateId } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors())
const Erros: { [cave: string]: { status: number, message: string } } = {
	DESCRICAO_NOT_FOUND: { status: 401, message: "a Descrição deve conter somente letras" },
	PRECO_NOT_FOUND: { status: 401, message: "O Preco deve conter somente numeros" },
	PRECO_IS_ZERO: { status: 401, message: "O Preco nao pode ser zerado" },
	MISSING_PARAMETERS: { status: 422, message: "Alguma informação está faltando. Consulte a documentação." },
	SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" },
}

// if(){
// 	res.statusCode = 400
// 	throw new erro("")
// }

app.get("/teste", (request: Request, response: Response) => {
	response.status(200).send("Teste OK!")
})

app.post("/Produtos/Cadastrar", (request: Request, response: Response) => {
	try {
		// const descricao = request.body.descricao
		// const preco = request.body.preco
		const { preco, descricao } = request.body;

		if (!preco || !descricao) {
			throw new Error(Erros.MISSING_PARAMETERS.message)
		}
		if (typeof descricao !== 'string') {
			throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
		}
		if (typeof preco !== 'number') {
			throw new Error(Erros.PRECO_NOT_FOUND.message)
		}
		if (preco < 0) {
			throw new Error(Erros.PRECO_IS_ZERO.message)
		}


		const novoProduto = {
			id: generateId(),
			descricao: descricao,
			preco: preco,
		}

		produtos.push(novoProduto);

	} catch (error: any) {
		switch (error.message) {
			case Erros.MISSING_PARAMETERS.message:
				response.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message)
				break
			case Erros.DESCRICAO_NOT_FOUND.message:
				response.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message)
				break
			case Erros.PRECO_NOT_FOUND.message:
				response.status(Erros.PRECO_NOT_FOUND.status).send(Erros.PRECO_NOT_FOUND.message)
				break
			case Erros.PRECO_IS_ZERO.message:
				response.status(Erros.PRECO_IS_ZERO.status).send(Erros.PRECO_IS_ZERO.message)
				break
			default:
				response.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)

		}
	}
	response.status(201).send(produtos)
})
app.get("/consulta", (request: Request, response: Response) => {
	response.status(201).send(produtos)
})
app.put("/cadastro/:id", (request: Request, response: Response) => {
	try{
	// const preco = request.body.preco
	let atualizaPreco = produtos.find((preco: any) => {
		return preco.id == request.params.id
	})
	if (!atualizaPreco) {
		response.status(404).send("")
		return
	}

	if (!request.body.preco) {
		throw new Error(Erros.MISSING_PARAMETERS.message)
	}

	if (typeof request.body.preco !== 'number') {
		throw new Error(Erros.PRECO_NOT_FOUND.message)
	}
	if (request.body.preco < 0) {
		throw new Error(Erros.PRECO_IS_ZERO.message)
	}

	atualizaPreco.preco = request.body.preco
} catch (error: any) {
	switch (error.message) {
		case Erros.MISSING_PARAMETERS.message:
			response.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message)
			break
		case Erros.PRECO_NOT_FOUND.message:
			response.status(Erros.PRECO_NOT_FOUND.status).send(Erros.PRECO_NOT_FOUND.message)
			break
		case Erros.PRECO_IS_ZERO.message:
			response.status(Erros.PRECO_IS_ZERO.status).send(Erros.PRECO_IS_ZERO.message)
			break
		default:
			response.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)

	}}
	response.status(201).send(produtos)
})

app.delete("/cadastro/:id", (request: Request, response: Response) => {

	try{
	let atualizaId = request.params.id
	const produtoId = produtos.find(produto => produto.id === atualizaId);
	if(!produtoId) {
		throw new Error(Erros.MISSING_PARAMETERS.message) 
	}

	let atualizaPreco = produtos.findIndex((produto: any) => {
		return produto.id == atualizaId
	})
	produtos.splice(atualizaPreco, 1)
} catch (error: any) {
	switch (error.message) {
		case Erros.MISSING_PARAMETERS.message:
			response.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message)
			break
		default:
			response.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)

	}
}

	response.status(201).send(produtos)
})

app.listen(3000, () => {
	console.log("Sistem Online... OK")
})
