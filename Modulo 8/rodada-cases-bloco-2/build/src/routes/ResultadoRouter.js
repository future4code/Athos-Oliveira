"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultadoRouter = void 0;
const express_1 = __importDefault(require("express"));
const ResultadoController_1 = require("../controller/ResultadoController");
exports.resultadoRouter = express_1.default.Router();
const resultadoController = new ResultadoController_1.ResultadoController();
exports.resultadoRouter.post('/resultado', resultadoController.criarResultado);
exports.resultadoRouter.get('/resultado', resultadoController.consultarResultado);
exports.resultadoRouter.get('/ranking', resultadoController.Ranking);
//# sourceMappingURL=ResultadoRouter.js.map