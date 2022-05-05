import express, { Request, Response } from 'express';
import cors from "cors";
import { AddressInfo } from "net";
import { baseDeDados } from './data';
import { v4 as generateId } from 'uuid';
import connection from "./connection";
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

//Pegar todos os usuários
app.get("/users/all", async (req: Request, res: Response) => {
	try {
		const result = await connection("Users").select() 
		res.status(200)
		res.send({Users:result})
	  } catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	  }
	});
	app.get("/tasks/all", async (req: Request, res: Response) => {
		try {
			const result = await connection("Tasks").select() 
			res.status(200)
			res.send({Users:result})
		  } catch (error: any) {
			res.status(500).send(error.sqlMessage || error.message);
		  }
		});


//Criar usuário 
app.post("/users/add", async(req:Request, res:Response)=>{
    try{
    const {name, nickname ,email} = req.body


	if (!name || !nickname || !email ) {
		throw new Error(Erros.MISSING_PARAMETERS.message)
	}
    if (typeof name !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
    if (typeof nickname !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
    if (typeof email !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
	await connection("Users").insert({
        id: generateId(),
        name:name,
        nickname:nickname,
        email:email
});

	res.status(201).send({ message: "Usuario Adicionado" });

    } catch(error:any){
		switch (error.message) {
			case Erros.MISSING_PARAMETERS.message:
				res.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message||error.sqlMessage)
				break
			case Erros.DESCRICAO_NOT_FOUND.message:
				res.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}

})
//Pegar usuário pelo id
app.get("/users/:id", async(req: Request, res: Response) => {
    try{
  
	const [result] = await connection("Users").select().where({ id: req.params.id });
	res.status(200)
	  res.send({Users:result})


 } catch(error:any){
		switch (error.message) {
			case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}

})
//Pesquisar usuário
app.get("/users", async(req: Request, res: Response) => {
    try{
	
	const [result] = await connection("Users").select().where({ id: req.query.id });

	  res.send({Users:result})


 } catch(error:any){
		switch (error.message) {
			case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}

})
//Editar usuário
app.put("/users/edit/:id",async (req: Request, res: Response) => {
try{
    const {name, nickname} = req.body   
    if (!name || !nickname ) {
		throw new Error(Erros.MISSING_PARAMETERS.message)
	}
    if (typeof name !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
    if (typeof nickname !== 'string') {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
	const result =  await connection("Users")
	.update({
	  name: req.body.name,
	  nickname: req.body.nickname
	}).where({ id: req.params.id });

  res.status(201).send({ message: `Usuario Atualizado` });

} catch(error:any){
    switch (error.message) {
        case Erros.MISSING_PARAMETERS.message:
            res.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message||error.sqlMessage)
            break
        case Erros.DESCRICAO_NOT_FOUND.message:
            res.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message||error.sqlMessage)
            break
            case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
        default:
            res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

    }
}

})

//Deletar usuário
app.delete("/users/:id",async (req: Request, res: Response) => {

	try{
	const result =  await connection("Users")
	.delete().where({ id: req.params.id });

  res.status(201).send({ message: `Usuario Deletado ` });

} catch (error: any) {
	switch (error.message) {
	
            case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
		default:
			res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

	}
}


})
const transformaData =(data:any)=>{
	const dataArray = data.split('/')
	const defaultDataTransform = `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`
	return defaultDataTransform
	}
	

//Criar tarefa
app.post("/task/add", async(req:Request, res:Response):Promise<void>=>{
    try{
     const {title, description ,limitDate,creatorUserId,creatorUserNickname,status} = req.body
	 const dataConvert = transformaData(limitDate)
	if (!title || !description ||!creatorUserId ) {
		throw new Error(Erros.MISSING_PARAMETERS.message)
	}
    if ( title == null) {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }
	if ( description == null) {
        throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
    }

	await connection("Tasks").insert({
        taskId: generateId(),
        title:title,
        description:description,
        limitDate:dataConvert,
		status:status,
		creatorUserId:creatorUserId,
		creatorUserNickname:creatorUserNickname,
});

	res.status(201).send({ message: "Tarefa Adicionado" });

    } catch(error:any){
		switch (error.message) {
			case Erros.MISSING_PARAMETERS.message:
				res.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message||error.sqlMessage)
				break
			case Erros.DESCRICAO_NOT_FOUND.message:
				res.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}

})
//Deletar tarefa
app.delete("/task/:id",async (req: Request, res: Response) => {

	try{
	const result =  await connection("Tasks")
	.delete().where({ TaskId: req.params.id });

  res.status(201).send({ message: `Tarefa Deletada ` });

} catch (error: any) {
	switch (error.message) {
	
            case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
		default:
			res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

	}
}
})
//Pegar tarefa pelo id
app.get("/task/:id", async(req: Request, res: Response) => {
    try{
  
	const [result] = await connection("Tasks").select().where({ taskId: req.params.id });
	res.status(200)
	res.send(result)
 } catch(error:any){
		switch (error.message) {
			case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}
})
//Pegar tarefa pelo id
app.get("/tasks/:id", async(req: Request, res: Response) => {
    try{
  
	const [result] = await connection("Tasks").select().where({ taskId: req.params.id });
	const [ResponsibleUsers] = await connection("ResponsibleUsers").select().where({ idTaskId: req.params.id });

	res.status(200)
	res.send({tasks:result,responsible:ResponsibleUsers})
 } catch(error:any){
		switch (error.message) {
			case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}
})

//Pegar tarefas criadas por um usuário
app.get("/task", async(req: Request, res: Response) => {
    try{
	
	const [result] = await connection("Tasks").select().where({ creatorUserId: req.query.creatorUserId});
	res.status(200)
	res.send({Tasks:result})
 } catch(error:any){
		switch (error.message) {
			case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}
})

	// Atribuir um usuário responsável a uma tarefa
	app.post("/task/responsible", async(req:Request, res:Response)=>{
		try{
		const {userId, idTaskId } = req.body
		
		await connection("ResponsibleUsers").insert({
			idTaskId:idTaskId ,
			userId:userId
	});
	
		res.status(201).send({ message: "atribuicao ok" });
	
		} catch(error:any){
			switch (error.message) {
				case Erros.MISSING_PARAMETERS.message:
					res.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message||error.sqlMessage)
					break
				case Erros.DESCRICAO_NOT_FOUND.message:
					res.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message||error.sqlMessage)
					break
				default:
					res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)
	
			}
		}
	
	})
//Pegar usuários responsáveis por uma tarefa
	app.get("/task/:id/responsible", async(req: Request, res: Response) => {
		try{
	  
		const [result] = await connection("Tasks").select().where({ taskId: req.params.id });
		res.status(200)
		res.send({users:result})
	 } catch(error:any){
			switch (error.message) {
				case Erros.ID_NOT_FOUND.message:
					res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
					break
				default:
					res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)
	
			}
		}
	})

//Atualizar o status da tarefa pelo id	
app.put("/task/status/:id",async (req: Request, res: Response) => {
	try{
		const {status} = req.body   
		if (!status) {
			throw new Error(Erros.MISSING_PARAMETERS.message)
		}
	
		const result =  await connection("Tasks").update({status: req.body.status}).where({ taskId:req.params.id });

	  res.status(201).send({ message: `status atualizado` });
	
	} catch(error:any){
		switch (error.message) {
			case Erros.MISSING_PARAMETERS.message:
				res.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message||error.sqlMessage)
				break
			case Erros.DESCRICAO_NOT_FOUND.message:
				res.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message||error.sqlMessage)
				break
				case Erros.ID_NOT_FOUND.message:
					res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
					break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)
	
		}
	}
	
	})
//Pegar todas as tarefas por status 
app.get("/tasks", async(req: Request, res: Response) => {
    try{

	const [result] = await connection("Tasks").select().where({ status: req.query.status});
	res.status(200)
	res.send({Tasks:result})

 } catch(error:any){
		switch (error.message) {
			case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}
})
//Pegar todas as tarefas atrasadas

app.get("/task/delayed", async(req: Request, res: Response):Promise<any> => {
	try{
	const res1=await connection("Tasks").select().where('limitDate', '<=', `current_date()`)
	res.status(202)
	 res.send({Tasks:res1})
 } catch(error:any){
		switch (error.message) {
			case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}
})
//Retirar um usuário responsável de uma tarefa
app.delete("/task/:taskId/responsible/:responsibleUserId",async (req: Request, res: Response) => {

	try{

	const result =  await connection("Tasks").update({creatorUserId:null,creatorUserNickname:null})
	.where({ taskId: req.params.taskId });

	const result2 =  await connection("ResponsibleUsers").delete()
	.where({ idTaskId: req.params.responsibleUserId });

  res.status(201).send({ message: `Usuario removido ` });

} catch (error: any) {
	switch (error.message) {
	
            case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
		default:
			res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

	}
}
})

app.post("/task/responsibles", async(req:Request, res:Response)=>{
	try{
	const userId = req.body.userId
	const idTaskId = req.body.idTaskId

	
	await connection("ResponsibleUsers").insert({
		idTaskId:idTaskId ,
		userId:userId
});

	res.status(201).send({ message: "atribuicao ok" });

	} catch(error:any){
		switch (error.message) {
			case Erros.MISSING_PARAMETERS.message:
				res.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message||error.sqlMessage)
				break
			case Erros.DESCRICAO_NOT_FOUND.message:
				res.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}

})
app.get("/tasks/search", async(req: Request, res: Response) => {
    try{

	const [result] = await connection("Tasks").select().where({ status: req.query.status});
	res.status(200)
	res.send({Tasks:result})

 } catch(error:any){
		switch (error.message) {
			case Erros.ID_NOT_FOUND.message:
				res.status(Erros.ID_NOT_FOUND.status).send(Erros.ID_NOT_FOUND.message||error.sqlMessage)
				break
			default:
				res.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message||error.sqlMessage)

		}
	}
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