"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoController = void 0;
const ResultadoBusiness_1 = require("../business/ResultadoBusiness");
const ResultadoDatabase_1 = require("../data/ResultadoDatabase");
const customError_1 = require("../error/customError");
class ResultadoController {
    constructor() {
        this.criarResultado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.competicao || !req.body.atleta || !req.body.resultado || !req.body.unidade || !req.body.competicao_id) {
                    throw new customError_1.InvalidDados();
                }
                if (typeof req.body.competicao !== 'string') {
                    throw new customError_1.InvalidDados();
                }
                if (typeof req.body.atleta !== 'string') {
                    throw new customError_1.InvalidDados();
                }
                if (typeof req.body.resultado !== 'number') {
                    throw new customError_1.InvalidNumero();
                }
                if (typeof req.body.unidade !== 'string') {
                    throw new customError_1.InvalidDados();
                }
                if (typeof req.body.competicao_id !== 'string') {
                    throw new customError_1.InvalidDados();
                }
                if (req.body.unidade.length > 1) {
                    throw new customError_1.Invalidunidade();
                }
                const { competicao, atleta, unidade, resultado, competicao_id } = req.body;
                const input = {
                    competicao,
                    atleta,
                    unidade, resultado,
                    competicao_id
                };
                const resultadoBusines = new ResultadoBusiness_1.ResultadoBusiness;
                resultadoBusines.criarResultado(input);
                res.status(201).send({ message: "Resultado Adicionado com Sucesso!" });
            }
            catch (error) {
                res.status(400).send(error.sqlMessage || error.message);
            }
        });
        this.consultarResultado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = {
                    id: req.params.id,
                    atleta: req.query.atleta
                };
                const atleta = yield new ResultadoDatabase_1.ResultadoDatabase().consultarResultado(consulta);
                res.send(atleta).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
        this.Ranking = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id,
                    search: req.query.search,
                    sort: req.query.sort,
                    order: req.query.order,
                    page: Number(req.query.page),
                    size: Number(req.query.size)
                };
                let offset = input.size * (input.page - 1);
                input.offset = offset;
                if (!input.resultado) {
                    input.resultado = "%";
                }
                if (input.sort !== "resultado") {
                    input.sort = "resultado";
                }
                if (!input.order || input.order.toUpperCase() !== "ASC" && input.order.toUpperCase() !== "DESC") {
                    input.order = "ASC";
                }
                if (isNaN(input.page) || input.page < 1) {
                    input.page = 1;
                }
                if (isNaN(input.size) || input.size < 1) {
                    input.size = 10;
                }
                const result = yield new ResultadoDatabase_1.ResultadoDatabase().Ranking(input, input);
                res.send(result).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ResultadoController = ResultadoController;
//# sourceMappingURL=ResultadoController.js.map