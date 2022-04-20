import express, { Request, Response } from 'express';
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { baseDeDados } from './data';
import { v4 as generateId } from 'uuid';
const app = express();

app.use(express.json());
app.use(cors());

const Erros: { [cave: string]: { status: number, message: string } } = {
	DESCRICAO_NOT_FOUND: { status: 401, message: "a Descrição deve conter somente letras" },
	ID_NOT_FOUND: { status: 401, message: "Usuario nao encontrado" },
    TASK_NOT_FOUND: { status: 401, message: "Tarefa nao encontrado" },
    MISSING_PARAMETERS: { status: 422, message: "Alguma informação está faltando. Consulte a documentação." },
	SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" },
}
app.get("/user/all", (req: Request, res: Response) => {
	const contasDeUsuario = baseDeDados.map((user) => user)
	res.status(200).send(contasDeUsuario)

})

app.post("/user",(req:Request, res:Response)=>{
    try{
    const {nome, apelido ,email} = req.body

	if (!nome || !apelido || !email ) {
		throw new Error(Erros.MISSING_PARAMETERS.message)
	}
    if (typeof nome !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
    if (typeof apelido !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
    if (typeof email !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }

    const novoUsuario ={
        id: generateId(),
        nome:nome,
        apelido:apelido,
        email:email
    }
    baseDeDados.push(novoUsuario)
res.status(201).send(baseDeDados)

    } catch(error:any){
		switch (error.message) {
			case Erros.MISSING_PARAMETERS.message:
				res.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message)
				break
			case Erros.DESCRICAO_NOT_FOUND.message:
				res.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)

		}
	}
	res.status(201).send(baseDeDados)
})

app.get("/user/:id", (req: Request, res: Response) => {
    try{
    const idConsultado = req.params.id
    const verificaIdExistente = baseDeDados.map((user) => user.id)
    const idVerificado = verificaIdExistente.filter((verifica:any)=>verifica == req.params.id)

    if(idVerificado[0] !== idConsultado ){
        throw new Error(Erros.ID_NOT_FOUND.message)
    }
  
	let usuario = baseDeDados.filter((user: any) => {
		return	 user.id == req.params.id && user.nome
			})
//    const track = playlist.tracks.find(track => {
//     return track.name === name && track.artist === artist
//   });
   res.status(201).send(usuario)

 } catch(error:any){
		switch (error.message) {
			case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)

		}
	}
	res.status(201).send(baseDeDados)
})

app.put("/user/edit/:id", (req: Request, res: Response) => {
try{
    const {nome, apelido} = req.body   

	const atualizabaseDeDados = baseDeDados.find((user: any) => {
		return user.id == req.params.id
	})
	if (!atualizabaseDeDados) {
		throw new Error(Erros.ID_NOT_FOUND.message)
	}
    if (!nome || !apelido ) {
		throw new Error(Erros.MISSING_PARAMETERS.message)
	}
    if (typeof nome !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
    if (typeof apelido !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
  
	atualizabaseDeDados.nome = req.body.nome
    atualizabaseDeDados.apelido = req.body.apelido
	res.status(201).send(baseDeDados)

} catch(error:any){
    switch (error.message) {
        case Erros.MISSING_PARAMETERS.message:
            res.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message)
            break
        case Erros.DESCRICAO_NOT_FOUND.message:
            res.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message)
            break
            case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message)
				break
        default:
            res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)

    }
}
res.status(201).send(baseDeDados)
})


app.delete("/user/:id", (req: Request, res: Response) => {

	try{
	let idConsultado = req.params.id
	const idSelecionado = baseDeDados.find(user => user.id === idConsultado);
	if(!idSelecionado) {
		throw new Error(Erros.ID_NOT_FOUND.message) 
	}

	let novaListaDebaseDeDados = baseDeDados.findIndex((user: any) => {
		return user.id == idConsultado
	})
	baseDeDados.splice(novaListaDebaseDeDados, 1)
} catch (error: any) {
	switch (error.message) {
	
            case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message)
				break
		default:
			res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)

	}
}

	res.status(201).send(baseDeDados)
})




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}...OK`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app