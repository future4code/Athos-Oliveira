import { Request, Response } from "express";
import  connection  from "../connection";
import { v4 as generateId } from 'uuid';


export async function postProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let {name, price ,image_url} = req.body


  	if (!name || !price || !image_url ) {
      throw new Error("Alguma informação faltando")
    }
      if (typeof name !== 'string') {
          throw new Error("O Nome deve possuir letras")
      }
      if (typeof price !== 'number') {
        throw new Error("O preço nao deve conter Letras")
    }
    if (typeof image_url !== 'string') {
      throw new Error("A URL deve possuir letras e numeros")
  }
 
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
    let search = req.query.search
    let sort = req.query.sort as string
    let order = req.query.order as string
    let page = Number(req.query.page)
    let size = Number(req.query.size)
    let offset = size*(page-1)

		// const result = await connection("labecommerce_products").select() 

    const [result] = await connection("labecommerce_products")
      .select().where("name", "like", `%${search}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

 

		res.status(200)
		res.send({Products  :result})
	  } catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	  }
	}