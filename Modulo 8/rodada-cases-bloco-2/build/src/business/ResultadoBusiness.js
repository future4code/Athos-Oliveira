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
exports.ResultadoBusiness = void 0;
const IdGenerator_1 = require("../services/IdGenerator");
const ResultadoDatabase_1 = require("../data/ResultadoDatabase");
const idGenerator = new IdGenerator_1.IdGenerator();
class ResultadoBusiness {
    constructor() {
        this.criarResultado = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { competicao, atleta, resultado, unidade, competicao_id } = input;
                const id = idGenerator.generate();
                const resultadosDatabase = new ResultadoDatabase_1.ResultadoDatabase();
                const resultados = {
                    id,
                    competicao,
                    atleta,
                    resultado,
                    unidade,
                    competicao_id
                };
                yield resultadosDatabase.adicionarResultado({
                    id,
                    competicao,
                    atleta,
                    resultado,
                    unidade,
                    competicao_id
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.consultarResultado = (resultado) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new ResultadoDatabase_1.ResultadoDatabase().consultarResultado(resultado);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.Ranking = (resultado, config) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new ResultadoDatabase_1.ResultadoDatabase().Ranking(resultado, config);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ResultadoBusiness = ResultadoBusiness;
//# sourceMappingURL=ResultadoBusiness.js.map