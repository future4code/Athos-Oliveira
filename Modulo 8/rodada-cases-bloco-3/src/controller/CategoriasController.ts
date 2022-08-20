import { Request, Response } from "express";
import { CategoriaBusiness } from "../business/CategoriasBusiness";
import { CategoriaDatabase } from "../data/CategoriasDatabase";
import { categotia, categotiaInputDTO } from "../model/categoria"
import { InvalidDados, InvalidTAG, InvalidID } from "../error/customError";

export class CategotiaController {

  public adicionarCategoria = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {

      if (!req.body.TAG || !req.body.produto_id) {
        throw new InvalidDados();
      }

      if (typeof req.body.TAG !== 'string') {
        throw new InvalidTAG();
      }
      if (typeof req.body.produto_id !== 'string') {
        throw new InvalidID();
      }

      const {TAG,produto_id } = req.body

      const input: categotiaInputDTO = {TAG,produto_id}

      const categoriaBusiness = new CategoriaBusiness
      categoriaBusiness.adicionarCategoria(input)

      res.status(201).send({ message: "Categoria Adicionado com Sucesso!" })
    } catch (error) {
      res.status(400).send(error.sqlMessage || error.message)
    }
  }

  public TodasCategorias = async (
    req: Request,
    res: Response
  ) => {
    try {
      const input: any = {
        id: req.params.id,
        search: req.query.search,
        sort: req.query.sort as string,
        order: req.query.order as string,
        page: Number(req.query.page),
        size: Number(req.query.size)
      }

      let offset = input.size * (input.page - 1)
      input.offset = offset

      if (!input.resultado) {
        input.resultado = "%"
      }

      if (input.sort !== "tag") {
        input.sort = "tag"
      }

      if (!input.order || input.order.toUpperCase() !== "ASC" && input.order.toUpperCase() !== "DESC") {
        input.order = "ASC"
      }

      if (isNaN(input.page) || input.page < 1) {
        input.page = 1
      }

      if (isNaN(input.size) || input.size < 1) {
        input.size = 10
      }

      const result = await new CategoriaDatabase().TodasCategorias(input, input);

      res.send(result).status(200);
    } catch (error) {
      res.send({ message: error.message }).status(error.sqlMessage || error.message);
    }
  }
  public atualizaCategoria = async (
    req: Request,
    res: Response
  ) => {
    try {

      if (!req.body.TAG || !req.body.produto_id ) {
        throw new InvalidDados();
      }

      if (typeof req.body.TAG !== 'string') {
        throw new InvalidTAG();
      }
      if (typeof req.body.produto_id !== 'string') {
        throw new InvalidID();
      }
  
      const update: any = {
        id: req.params.id,
        produto_id: req.body,
        TAG: req.body,
      }

      const categoriaUpdate = await new CategoriaDatabase().atualizaCategoria(update);

      res.send({ message: "Categoria atualizada" }).status(201);
    } catch (error) {
      res.send({ message: error.message }).status(error.sqlMessage || error.message);
    }
  }
  public removeCategoria = async (
    req: Request,
    res: Response
 ) => {
    try {
 
       const input:any = {
          id: req.params.id,
      }
           
       const categoriaBusiness = new CategoriaDatabase
       categoriaBusiness.removeCategoria(input)
 
       res.status(201).send({ message: "Tag Exclida!" })
 
    } catch (error) {
       res.send({ message: error.message }).status(error.status);
   }
 }
}




