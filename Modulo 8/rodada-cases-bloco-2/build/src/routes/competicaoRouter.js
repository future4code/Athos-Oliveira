"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.competicaoRouter = void 0;
const express_1 = __importDefault(require("express"));
const CompeticoesController_1 = require("../controller/CompeticoesController");
exports.competicaoRouter = express_1.default.Router();
const competicaoController = new CompeticoesController_1.CompeticoesController();
exports.competicaoRouter.post('/competicao', competicaoController.criarCompeticao);
exports.competicaoRouter.get('/competicao', competicaoController.todasCompeticoes);
exports.competicaoRouter.get('/competicao/:id', competicaoController.consultarResultadoCompeticao);
exports.competicaoRouter.put('/competicao/:id', competicaoController.atualizaProgresso);
exports.competicaoRouter.get('/encerradas', competicaoController.competicaoEncerrada);
exports.competicaoRouter.get('/andamento', competicaoController.competicaoEmAndamento);
exports.competicaoRouter.get('/', competicaoController.todasCompeticoes);
//# sourceMappingURL=competicaoRouter.js.map