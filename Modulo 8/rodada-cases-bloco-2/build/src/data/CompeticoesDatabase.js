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
exports.CompeticoesDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class CompeticoesDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.adicionarCompeticao = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().insert({
                    id: competicao.id,
                    progresso: competicao.progresso,
                    competicao: competicao.competicao,
                    data_inicio: competicao.data_inicio,
                    hora_inicio: competicao.hora_inicio,
                    hora_termino: competicao.hora_termino
                }).into(CompeticoesDatabase.Competicoes);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.consultarResultadoCompeticao = (config, competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                const progresso = "Concluido";
                const result = yield this.getConnection().select("atleta", "resultado", "unidade").join('RESULTADOS', 'COMPETICOES.id', '=', 'RESULTADOS.competicao_id').where('COMPETICOES.id', '=', config.id).andWhere({ progresso: progresso })
                    .orderBy(config.sort, config.order)
                    .limit(config.size)
                    .offset(config.offset)
                    .from(CompeticoesDatabase.Competicoes);
                return { Resultados: result };
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.competicaoEmAndamento = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                const progresso = 'Em Andamento';
                const result = yield this.getConnection()
                    .select("*").where({ progresso: progresso }).from(CompeticoesDatabase.Competicoes);
                return { EmAndamento: result };
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.competicaoEncerrada = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                const progresso = 'Concluido';
                const result = yield this.getConnection()
                    .select("*").where({ progresso: progresso }).from(CompeticoesDatabase.Competicoes);
                return { Encerradas: result };
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.todasCompeticoes = (config, competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*").orderBy(config.sort, config.order)
                    .limit(config.size)
                    .offset(config.offset).from(CompeticoesDatabase.Competicoes);
                return { ListaCompetiçoes: result };
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.atualizaProgresso = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                const hora_termino = competicao.hora_termino;
                const progresso = competicao.progresso;
                const id = competicao.id;
                const result = yield this.getConnection()
                    .update({ progresso: competicao.progresso, hora_termino: competicao.hora_termino }).where({ id: competicao.id }).from(CompeticoesDatabase.Competicoes);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CompeticoesDatabase = CompeticoesDatabase;
CompeticoesDatabase.Competicoes = "COMPETICOES";
//# sourceMappingURL=CompeticoesDatabase.js.map