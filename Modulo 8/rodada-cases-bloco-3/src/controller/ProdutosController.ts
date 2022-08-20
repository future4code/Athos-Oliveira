import { Request, Response } from "express";
import { ProdutosBusiness } from "../business/ProdutosBusiness";
import { ProdutosDatabase } from "../data/ProdutosDatabase";
import { produto, produtoInputDTO } from "../model/produto";
import { InvalidDados, Invalidnumber, InvalidTexto } from "../error/customError";

export class ProdutosController {

  public adicionarProduto = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {

      if (!req.body.nome || !req.body.marca || !req.body.preco_compra || !req.body.icms
        || !req.body.pis || !req.body.cofins || !req.body.lucro) {
        throw new InvalidDados();
      }

      if (typeof req.body.nome !== 'string') {
        throw new InvalidTexto();
      }
      if (typeof req.body.marca !== 'string') {
        throw new InvalidTexto();
      }
      if (typeof req.body.preco_compra !== 'number') {
        throw new Invalidnumber();
      }
      if (typeof req.body.icms !== 'number') {
        throw new Invalidnumber();
      }
      if (typeof req.body.pis !== 'number') {
        throw new Invalidnumber();
      }
      if (typeof req.body.cofins !== 'number') {
        throw new Invalidnumber();
      }
      if (typeof req.body.lucro !== 'number') {
        throw new Invalidnumber();
      }

      const { nome,
        marca,
        preco_compra,
        icms,
        pis,
        cofins,
        lucro,
        cmv,
        preco_venda
      } = req.body

      const input: produtoInputDTO = {
        nome,
        marca,
        preco_compra,
        icms,
        pis,
        cofins,
        lucro,
        cmv,
        preco_venda
      }

      const produtoBusiness = new ProdutosBusiness
      produtoBusiness.adicionarProduto(input)

      res.status(201).send({ message: "Produto Adicionada com Sucesso! O preço de venda sera calculado automaticamente" })
    } catch (error) {
      res.status(400).send(error.sqlMessage || error.message)
    }
  }
  public ListarTodosProtudos = async (
    req: Request,
    res: Response
  ) => {
    try {
      const input: any = {
        id: req.params.id,

      }


      const produtos = await new ProdutosDatabase().ListarTodosProtudos(input, input);

      res.json(produtos).status(200);
    } catch (error) {
      res.send({ message: error.message }).status(error.sqlMessage || error.message);
    }
  }

  public PesquisaProtudos = async (
    req: Request,
    res: Response
  ) => {
    try {
      const input: any = {
        id: req.params.id,
        search: req.query.search,
        g: req.query.g,
        sort: req.query.sort as string,
        order: req.query.order as string,
        page: Number(req.query.page),
        size: Number(req.query.size),

      }

      let offset = input.size * (input.page - 1)
      input.offset = offset

      if (!input.resultado) {
        input.resultado = "%"
      }

      if (input.sort !== "nome") {
        input.sort = "nome"
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


      const produtos = await new ProdutosDatabase().PesquisaProtudos(input, input);

      res.send(produtos).status(200);
    } catch (error) {
      res.send({ message: error.message }).status(error.sqlMessage || error.message);
    }
  }


  public atualizaProduto = async (
    req: Request,
    res: Response
  ) => {
    try {

      if (!req.body.nome || !req.body.marca || !req.body.preco_compra
        || !req.body.preco_venda || !req.body.cmv) {
        throw new InvalidDados();
      }

      if (typeof req.body.nome !== 'string') {
        throw new InvalidTexto();
      }
      if (typeof req.body.marca !== 'string') {
        throw new InvalidTexto();
      }
      if (typeof req.body.preco_compra !== 'number') {
        throw new Invalidnumber();
      }

      if (typeof req.body.preco_venda !== 'number') {
        throw new Invalidnumber();
      }
      if (typeof req.body.cmv !== 'number') {
        throw new Invalidnumber();
      }


      const update: any = {
        id: req.params.id,
        nome: req.body,
        marca: req.body,
        preco_compra: req.body,
        cmv: req.body,
        preco_venda: req.body

      }

      const produtoUpdate = await new ProdutosDatabase().atualizaProduto(update);

      res.send({ message: "Produto atualizado" }).status(201);
    } catch (error) {
      res.send({ message: error.message }).status(error.sqlMessage || error.message);
    }
  }
  public removeProduto = async (
    req: Request,
    res: Response
 ) => {
    try {
 
       const input:any = {
          id: req.params.id,
      }
           
       const produtoBusiness = new ProdutosDatabase
       produtoBusiness.removeProduto(input)
 
       res.status(201).send({ message: "Produto Excluido!" })
 
    } catch (error) {
       res.send({ message: error.message }).status(error.status);
   }
 }
}




