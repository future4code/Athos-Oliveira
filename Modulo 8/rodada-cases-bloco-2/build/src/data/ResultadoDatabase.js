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
exports.ResultadoDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ResultadoDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.adicionarResultado = (resultado) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().insert({
                    id: resultado.id,
                    competicao: resultado.competicao,
                    atleta: resultado.atleta,
                    resultado: resultado.resultado,
                    unidade: resultado.unidade,
                    competicao_id: resultado.competicao_id
                }).into(ResultadoDatabase.Resultado);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.consultarResultado = (resultado) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection().select("*").where({ atleta: resultado.atleta }).from(ResultadoDatabase.Resultado);
                return { Atleta_Resultado: result };
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.Ranking = (config, resultado) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*").orderBy(config.sort, config.order)
                    .limit(config.size)
                    .offset(config.offset).from(ResultadoDatabase.Resultado);
                return { Ranking: result };
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ResultadoDatabase = ResultadoDatabase;
ResultadoDatabase.Resultado = "RESULTADOS";
//# sourceMappingURL=ResultadoDatabase.js.map