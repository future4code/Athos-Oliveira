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
exports.CompeticoesController = void 0;
const CompeticoesBusiness_1 = require("../business/CompeticoesBusiness");
const CompeticoesDatabase_1 = require("../data/CompeticoesDatabase");
const customError_1 = require("../error/customError");
class CompeticoesController {
    constructor() {
        this.criarCompeticao = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.competicao || !req.body.data_inicio || !req.body.hora_inicio || !req.body.hora_termino) {
                    throw new customError_1.InvalidDados();
                }
                if (typeof req.body.competicao !== 'string') {
                    throw new customError_1.InvalidDados();
                }
                if (typeof req.body.data_inicio !== 'string') {
                    throw new customError_1.InvalidDados();
                }
                if (typeof req.body.hora_inicio !== 'string') {
                    throw new customError_1.InvalidDados();
                }
                if (typeof req.body.hora_termino !== 'string') {
                    throw new customError_1.InvalidDados();
                }
                const { competicao, data_inicio, hora_inicio, hora_termino } = req.body;
                const input = {
                    competicao,
                    data_inicio,
                    hora_inicio,
                    hora_termino
                };
                const competicaoBusines = new CompeticoesBusiness_1.CompeticoesBusiness;
                competicaoBusines.criarCompeticao(input);
                res.status(201).send({ message: "Competição Adicionada com Sucesso!" });
            }
            catch (error) {
                res.status(400).send(error.sqlMessage || error.message);
            }
        });
        this.consultarResultadoCompeticao = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id,
                    search: req.query.search,
                    sort: req.query.sort,
                    order: req.query.order,
                    page: Number(req.query.page),
                    size: Number(req.query.size),
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
                const duracao = yield new CompeticoesDatabase_1.CompeticoesDatabase().consultarResultadoCompeticao(input, input);
                res.send(duracao).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
        this.competicaoEmAndamento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const andamento = {
                    id: req.params.id,
                };
                const inicio = yield new CompeticoesDatabase_1.CompeticoesDatabase().competicaoEmAndamento(andamento);
                res.send(inicio).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
        this.competicaoEncerrada = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const encerrado = {
                    id: req.params.id,
                };
                const termino = yield new CompeticoesDatabase_1.CompeticoesDatabase().competicaoEncerrada(encerrado);
                res.send(termino).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
        this.todasCompeticoes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id,
                    search: req.query.search,
                    sort: req.query.sort,
                    order: req.query.order,
                    page: Number(req.query.page),
                    size: Number(req.query.size),
                };
                let offset = input.size * (input.page - 1);
                input.offset = offset;
                if (!input.hora_termino) {
                    input.hora_termino = "%";
                }
                if (input.sort !== "hora_termino") {
                    input.sort = "hora_termino";
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
                const result = yield new CompeticoesDatabase_1.CompeticoesDatabase().todasCompeticoes(input, input);
                res.send(result).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
        this.atualizaProgresso = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.progresso || !req.body.hora_termino) {
                    throw new customError_1.InvalidTexto();
                }
                if (typeof req.body.progresso !== 'string') {
                    throw new customError_1.InvalidTexto();
                }
                if (typeof req.body.hora_termino !== 'string') {
                    throw new customError_1.InvalidTexto();
                }
                if (req.body.progresso == 'Em Andamento' && req.body.progresso == 'Concluido') {
                    throw new customError_1.Invalidprogresso();
                }
                const update = {
                    id: req.params.id,
                    progresso: req.body.progresso,
                    hora_termino: req.body.hora_termino
                };
                const progressoUpdate = yield new CompeticoesDatabase_1.CompeticoesDatabase().atualizaProgresso(update);
                res.send({ message: "Competição Encerrada" }).status(201);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CompeticoesController = CompeticoesController;
//# sourceMappingURL=CompeticoesController.js.map