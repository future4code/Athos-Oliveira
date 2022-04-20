import express, { Request, Response } from 'express';
import cors from "cors";
import { AddressInfo } from "net";

import connection from "./connection";
import { v4 as generateId } from 'uuid';
const app = express();

app.use(express.json());
app.use(cors());


const getActorById = async (id: string): Promise<any> => {
	const result = await connection.raw(`
	  SELECT * FROM Actor WHERE id = '${id}'
	`)
  
	  return result[0][0]
  }
  const searchActor = async (name: string): Promise<any> => {
	const result = await connection.raw(`
	  SELECT * FROM Actor WHERE name = " ${name} "
	`)
	return result
  }
  const countActors = async (gender: string): Promise<any> => {
	const result = await connection.raw(`
	  SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
	`);
	const count = result[0][0].count;
	return count;
  };
//EXECICIO 1 A
app.get("/users/:id", async (req: Request, res: Response): Promise<void> => {
	try {
	  const id = req.params.id
	  let [ResultGet] = await getActorById(id)
	  res.send(ResultGet)
	  res.end()

	} catch (error) {
		  console.log(error)
	  res.status(500).send("Unexpected error")
	}
  }) 
//EXECICIO 1 B
  app.get("/Users", async (req: Request, res: Response): Promise<void> => {
	try {
	  const genders = req.query.gender
	  const result = await connection.raw(`
	  SELECT COUNT(*) as count FROM Actor WHERE gender = "${genders}"
	`);
	const count = result[0][0].count;
	
	let [ResultGet] = result
	  console.log(count)
	  res.send(ResultGet)
	  
	} catch (error) {
		  console.log(error)
	  res.status(500).send("Unexpected error")
	}
  })
  //EXECICIO 1 C
  app.get("/Users", async (req: Request, res: Response): Promise<void> => {
	try {
	  const nome = req.query.name
		const result = await connection.raw(`
		SELECT * FROM Actor where  name LIKE '%${nome}%';
	  `)
	let [ResultGet] = result
	  console.log(ResultGet)
	  res.send(ResultGet)
	  
	} catch (error) {
		  console.log(error)
	  res.status(500).send("Unexpected error")
	}
  })  
// EXECICIO 2



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}...OK`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app