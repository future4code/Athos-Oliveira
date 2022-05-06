import { Request, Response } from "express";
import  connection  from "../connection";
import { v4 as generateId } from 'uuid';


export async function postPurchases(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let product_id  = req.body.product_id 
    let user_id = req.body.user_id
    let quantity:number = req.body.quantity

  	if (!product_id || !user_id  || !quantity ) {
      throw new Error("Alguma informação faltando")
    }
      if (typeof product_id !== 'string') {
          throw new Error("O id do produto  deve conter aspas duplas")
      }
      if (typeof user_id !== 'string') {
        throw new Error("O id do usuario  deve conter aspas duplas")
    }
    if (typeof quantity !== 'number') {
      throw new Error("A quantidade deve ser valor Numerico")
  }
  const [product] = await connection("labecommerce_products").select().where( {id: req.body.product_id });
  let total = product.price*req.body.quantity

  const result  =	await connection("labecommerce_purchases").insert({
             id: generateId(),
             user_id:user_id,
             product_id :product_id ,
             quantity:quantity,
             total_price:total
       });  
 

    res.status(201).send("Compra Executada")
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}



export async function getPurchases(
  req: Request,
  res: Response
): Promise<void> {
	try {
		const result = await connection("labecommerce_purchases").select() 
		res.status(200)
		res.send({Purchases:result})
	  } catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	  }
	}