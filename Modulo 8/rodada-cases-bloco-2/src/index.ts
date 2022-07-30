import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { walkingRouter } from "./routes/WalkingRouter";
dotenv.config();
const app = express();
app.use(express.json());


app.post("/signup", userRouter)
app.post("/login", userRouter)

app.post("/competicao", walkingRouter)//add competicao
app.get("/competicao/:id", walkingRouter)// busca resultados da competicao ordem de data
app.put("/competicao/:id", walkingRouter)//atualiza o termino da competicao
app.get("/competicao/end", walkingRouter)//ver todas competiçoes finalizadas
app.get("/competicao/progress", walkingRouter)//ver todas competiçoes finalizadas
app.get("/competicao", walkingRouter)//tudo

app.post("/resultado", walkingRouter)//add resultado in compettion
app.get("/resultado/:id", walkingRouter)//busca resultado
app.put("/resultado/:id", walkingRouter)//atualiza resultado
app.put("/resultado", walkingRouter)//todos os competidores







const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });