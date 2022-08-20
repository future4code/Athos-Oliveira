import express from "express";
import {CategotiaController } from "../controller/CategoriasController"

export const categoriaRouter = express.Router();
const categoriaController = new CategotiaController();

categoriaRouter.post('/tag', categoriaController.adicionarCategoria)
categoriaRouter.get('/tag',categoriaController.TodasCategorias)
categoriaRouter.put('/tag/:id',categoriaController.atualizaCategoria)
categoriaRouter.delete('/tag/:id',categoriaController.removeCategoria)






