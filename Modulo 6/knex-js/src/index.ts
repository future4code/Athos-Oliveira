import express, { Request, Response } from 'express';
import cors from "cors";
import { AddressInfo } from "net";

import connection from "./connection";
import { v4 as generateId } from 'uuid';
const app = express();

app.use(express.json());
app.use(cors());


// const getActorById = async (id: string): Promise<any> => {
// 	const result = await connection.raw(`
// 	  SELECT * FROM Actor WHERE id = '${id}'
// 	`)
  
// 	  return result[0][0]
//   }
//   const searchActor = async (name: string): Promise<any> => {
// 	const result = await connection.raw(`
// 	  SELECT * FROM Actor WHERE name = " ${name} "
// 	`)
// 	return result
//   }
//   const countActors = async (gender: string): Promise<any> => {
// 	const result = await connection.raw(`
// 	  SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
// 	`);
// 	const count = result[0][0].count;
// 	return count;
//   };
//EXECICIO 1 A
app.get("/users", async (req: Request, res: Response): Promise<void> => {
	try {

	  const result = await connection("Actor").select() 
  
	  res.status(200).send(result);
	} catch (error: any) {
	  res.status(500).send(error.sqlMessage || error.message);
	}
  });

app.get("/users/:id", async (req: Request, res: Response): Promise<void> => {
	try {
	const id = req.params.id
	const [result] = await connection("Actor").select().where({ id: req.params.id });

	  res.send(result)
	  res.end()

	} catch (error) {
		  console.log(error)
	  res.status(500).send("Unexpected error")
	}
  }) 
//EXECICIO 1 B
//   app.get("/Users", async (req: Request, res: Response): Promise<void> => {
// 	try {
// 	  const genders = req.query.gender
// 	  const result = await connection.raw(`
// 	  SELECT COUNT(*) as count FROM Actor WHERE gender = "${genders}"
// 	`);
// 	const count = result[0][0].count;
	
// 	let [ResultGet] = result
// 	  console.log(count)
// 	  res.send(ResultGet)
	  
// 	} catch (error) {
// 		  console.log(error)
// 	  res.status(500).send("Unexpected error")
// 	}
//   })
  ////EXECICIO 1 C
//   app.get("/Users/nomes", async (req: Request, res: Response): Promise<any> => {
// 	try {
// 	  const Xnome:any = req.query.name
// 	  console.log(Xnome)
// 	  const id = req.params.id
// 	 // const result = await connection("Actor").select().where('name', 'like', `%${Xnome}%`);
// 	  res.send(result)  
// 	} catch (error) {
// 		  console.log(error)
// 	  res.status(500).send("Unexpected error")
// 	}
//   })  
const nameActor=async(name:string):Promise<any>=>{

	const res=await connection("Actor").select().where('name', 'like', `%${name}%`)
	return res
  }
  app.get("/User",async(req:Request,res:Response)=>{
	try {
	  const name:any=req.query.name
	  const actor:any=await nameActor(name as string)
	  res.status(200).send({Users:actor})
	  } catch (err:any) {
		res.status(400).send({
		  message: err.message,
		});
	}
  })
//// EXECICIO 2

app.put("/Users/:id", async (req: Request, res: Response): Promise<void> => {
	try {
	 const result =  await connection("Actor")
		.update({
		  salary: req.body.salary,
		})
		.where({ id: req.params.id });
  

	  res.status(200).send({ message: `Novo salario ok` });
	} catch (error: any) {
	  res.status(500).send(error.sqlMessage || error.message);
	}
  });

  app.delete("/Users/:id", async (req: Request, res: Response): Promise<void> => {
	try {
	 const result =  await connection("Actor")
		.delete().where({ id: req.params.id });
  
	  res.status(200).send({ message: `Usuario Deletado ` });
	} catch (error: any) {
	  res.status(500).send(error.sqlMessage || error.message);
	}
  });
  
  app.get("/Users/search/gender", async (req: Request, res: Response): Promise<any> => {
	try {
		const genders = req.query.gender
	
    const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender : req.query.gender });
   let [ResultGet] = result
 res.send(ResultGet)

} catch (error) {
	  console.log(error)
  res.status(500).send("Unexpected error")
}
})  
app.post("/Users/add", async (req: Request, res: Response): Promise<void> => {
	try {
	  const id = Date.now().toString();
	  await connection("Actor").insert({
		id,
		name: req.body.name,
		salary: req.body.salary,
		birth_date: req.body.birthDate,
		gender: req.body.gender,
	  });
  
	  res.status(201).send({ message: "Ator criado" });
	} catch (error: any) {
	  res.status(500).send(error.sqlMessage || error.message);
	}
  });

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}...OK`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app