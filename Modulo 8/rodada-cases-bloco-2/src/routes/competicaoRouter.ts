import express from "express";
import {CompeticoesController } from "../controller/CompeticoesController"

export const competicaoRouter = express.Router();
const competicaoController = new CompeticoesController();

competicaoRouter.post('/competicao', competicaoController.criarCompeticao)
competicaoRouter.get('/competicao',competicaoController.todasCompeticoes)
competicaoRouter.get('/competicao/:id',competicaoController.consultarResultadoCompeticao)
competicaoRouter.put('/competicao/:id',competicaoController.atualizaProgresso)
competicaoRouter.get('/encerradas',competicaoController.competicaoEncerrada)
competicaoRouter.get('/andamento',competicaoController.competicaoEmAndamento)


