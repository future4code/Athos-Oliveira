import express, { Request, Response } from 'express';
import cors from 'cors';
import { produtos } from './data';
import { v4 as generateId } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors())
const Erros:{[cave:string]:{status:number, message:string} }={
	DESCRICAO_NOT_FOUND:{status:401,message:"a Descrição deve conter somente letras"},
	PRECO_NOT_FOUND:{status:401,message:"O Preco deve conter somente numeros"},
	PRECO_IS_ZERO:{status:401,message:"O Preco nao pode ser zerado"},
	MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
	SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
}

// if(){
// 	resizeBy.statusCode = 400
// 	throw new erro("")
// }

app.get("/teste", (request:Request, response:Response) =>{
	response.status(200).send("Teste OK!")
})

app.post("/Produtos/Cadastrar", (request:Request, response:Response)=>{
const descricao = request.body.descricao
const preco = request.body.preco

	const novoProduto ={
		id:generateId(),
		descricao:descricao,
		preco:preco,
	}

	produtos.push(novoProduto);
	response.status(201).send(produtos)

})
app.get("/consulta", (request:Request, response:Response) =>{
	response.status(201).send(produtos)
})
app.put("/cadastro/:id", (request:Request, response:Response)=>{
let  atualizaPreco = produtos.find((preco:any) =>{
	return preco.id == request.params.id
})
	if (!atualizaPreco) {
		response.status(404).send("")
		return
	}
atualizaPreco.preco = request.body.preco
response.status(201).send(produtos)
})

app.delete("/cadastro/:id",(request:Request, response:Response)=>{
	// let  atualizaPreco = produtos.find((preco:any) =>{
	// 	return preco.id == request.params.id
	// })

	// if (!atualizaPreco) {
	// 		response.status(404).send("")
	// 		return
	// 	}
	//gabiarra
	//  atualizaPreco.id = request.body.id
	// atualizaPreco.descricao = request.body.descricao
	// atualizaPreco.preco = request.body.preco

	let	atualizaId = request.params.id
	let  atualizaPreco = produtos.findIndex((produto:any) =>{
		return produto.id == atualizaId
	})
	produtos.splice(atualizaPreco,1)
	response.status(201).send(produtos)
})

app.listen(3000, () => {
	console.log("Sistem Online... OK")
})
