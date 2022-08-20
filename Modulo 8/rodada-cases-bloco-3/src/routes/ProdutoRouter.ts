import express from "express";
import {ProdutosController } from "../controller/ProdutosController"

export const produtoRouter = express.Router();
const produtoController = new ProdutosController();

produtoRouter.post('/produto', produtoController.adicionarProduto)
produtoRouter.get('/produto/pesquisa',produtoController.PesquisaProtudos)
produtoRouter.get('/produto',produtoController.ListarTodosProtudos)
produtoRouter.put('/produto/:id',produtoController.atualizaProduto)
produtoRouter.delete('/produto/:id',produtoController.removeProduto)

