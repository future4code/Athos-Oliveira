import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { competicaoRouter } from "./routes/competicaoRouter";
import { resultadoRouter } from "./routes/ResultadoRouter";
dotenv.config();
const app = express();
app.use(express.json());

app.post("/signup", userRouter)
app.post("/login", userRouter)
app.post("/competicao", competicaoRouter)
app.get("/competicao/:id", competicaoRouter)
app.put("/competicao/:id", competicaoRouter)
app.get("/encerradas", competicaoRouter)
app.get("/andamento", competicaoRouter)
app.get("/competicao", competicaoRouter)
app.post("/resultado", resultadoRouter)
app.get("/resultado", resultadoRouter)
app.get("/ranking", resultadoRouter)


const server = app.listen(process.env.PORT ||3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });