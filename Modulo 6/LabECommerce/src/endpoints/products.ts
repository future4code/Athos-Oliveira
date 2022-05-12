import { Request, Response } from "express";
import  connection  from "../connection";
import { v4 as generateId } from 'uuid';


export async function postProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let {name, price ,image_url} = req.body
  
 
    const result  =	await connection("labecommerce_products").insert({
             id: generateId(),
             name:name,
             price:price,
             image_url:image_url
       });  
 

    res.status(201).send("Produto Cadastrado");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}



export async function getProducts(
  req: Request,
  res: Response
): Promise<void> {
	try {
		const result = await connection("labecommerce_products").select() 
		res.status(200)
		res.send({Products  :result})
	  } catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	  }
	}