"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const userRouter_1 = require("./routes/userRouter");
const competicaoRouter_1 = require("./routes/competicaoRouter");
const ResultadoRouter_1 = require("./routes/ResultadoRouter");
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.post("/signup", userRouter_1.userRouter);
app.post("/login", userRouter_1.userRouter);
app.post("/competicao", competicaoRouter_1.competicaoRouter);
app.get("/competicao/:id", competicaoRouter_1.competicaoRouter);
app.put("/competicao/:id", competicaoRouter_1.competicaoRouter);
app.get("/encerradas", competicaoRouter_1.competicaoRouter);
app.get("/andamento", competicaoRouter_1.competicaoRouter);
app.get("/competicao", competicaoRouter_1.competicaoRouter);
app.post("/resultado", ResultadoRouter_1.resultadoRouter);
app.get("/resultado", ResultadoRouter_1.resultadoRouter);
app.get("/ranking", ResultadoRouter_1.resultadoRouter);
app.get("/", competicaoRouter_1.competicaoRouter);
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    }
    else {
        console.error(`Falha ao rodar o servidor.`);
    }
});
//# sourceMappingURL=index.js.map