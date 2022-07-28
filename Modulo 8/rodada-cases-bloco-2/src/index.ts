import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { walkingRouter } from "./routes/WalkingRouter";
dotenv.config();
const app = express();
app.use(express.json());




app.post("/competicao", walkingRouter)
app.get("/competicao/:id", walkingRouter)
app.put("/competicao/:id", walkingRouter)

app.post("/resultado", walkingRouter)
app.put("/resultado/:id", walkingRouter)
app.get("/resultado/:id", walkingRouter)





const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });