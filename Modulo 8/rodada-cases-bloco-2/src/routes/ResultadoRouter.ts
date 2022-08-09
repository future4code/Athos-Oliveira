import express from "express";
import {ResultadoController } from "../controller/ResultadoController"

export const resultadoRouter = express.Router();
const resultadoController = new ResultadoController();

resultadoRouter.post('/resultado', resultadoController.criarResultado)
resultadoRouter.get('/resultado',resultadoController.consultarResultado)
resultadoRouter.get('/ranking',resultadoController.Ranking)






