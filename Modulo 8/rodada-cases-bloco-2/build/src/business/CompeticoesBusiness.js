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
exports.CompeticoesBusiness = void 0;
const IdGenerator_1 = require("../services/IdGenerator");
const CompeticoesDatabase_1 = require("../data/CompeticoesDatabase");
const competicoes_1 = require("../model/competicoes");
const idGenerator = new IdGenerator_1.IdGenerator();
class CompeticoesBusiness {
    constructor() {
        this.criarCompeticao = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { competicao, data_inicio, hora_inicio, hora_termino } = input;
                const id = idGenerator.generate();
                const progresso = competicoes_1.progresso_TYPES.PENDENTE;
                const competicoesDatabase = new CompeticoesDatabase_1.CompeticoesDatabase();
                const competicoes = {
                    id,
                    progresso,
                    competicao,
                    data_inicio,
                    hora_inicio,
                    hora_termino
                };
                yield competicoesDatabase.adicionarCompeticao({
                    id,
                    progresso,
                    competicao,
                    data_inicio,
                    hora_inicio,
                    hora_termino
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.consultarResultadoCompeticao = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new CompeticoesDatabase_1.CompeticoesDatabase().consultarResultadoCompeticao(competicao, competicao);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.competicaoEmAndamento = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new CompeticoesDatabase_1.CompeticoesDatabase().competicaoEmAndamento(competicao);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.competicaoEncerrada = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new CompeticoesDatabase_1.CompeticoesDatabase().competicaoEncerrada(competicao);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.todasCompeticoes = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new CompeticoesDatabase_1.CompeticoesDatabase().todasCompeticoes(competicao, competicao);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.atualizaProgresso = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new CompeticoesDatabase_1.CompeticoesDatabase().atualizaProgresso(competicao);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CompeticoesBusiness = CompeticoesBusiness;
//# sourceMappingURL=CompeticoesBusiness.js.map