import { Request, Response } from "express";
import { off } from "process";
import  connection  from "../connection";
 import { v4 as generateId } from 'uuid';


export async function postUsers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let {name, email ,password} = req.body
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
		const result = await connection("labecommerce_users").select() 
		res.status(200)
		res.send({Users:result})
	  } catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	  }
	}