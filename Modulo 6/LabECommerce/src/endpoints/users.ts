import { Request, Response } from "express";
import  connection  from "../connection";
 import { v4 as generateId } from 'uuid';


export async function postUsers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let {name, email ,password} = req.body
  	if (!name || !email  || !password ) {
      throw new Error("Alguma informação faltando")
    }
      if (typeof name !== 'string') {
          throw new Error("O nome do usuario deve conter ser texto")
      }
      if (typeof email !== 'string') {
        throw new Error("O email do usuario deve conter ser texto")
      }
      if (typeof password !== 'string') {
        throw new Error("O password do usuario deve conter aspas duplas")
      }

    const result  =	await connection("labecommerce_users").insert({
             id: generateId(),
             name:name,
             email:email,
             password:password
       });  
    res.status(201).send("Usuario Cadastrado");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}

export async function getUsers(
  req: Request,
  res: Response
): Promise<void> {
	try {
		//  const result = await connection("labecommerce_users").select() 

 const result = await connection("labecommerce_users").join('labecommerce_purchases', 'labecommerce_users.id', '=', 'labecommerce_purchases.user_id')

		res.status(200)
		res.send({Users:result})
	  } catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	  }
	}