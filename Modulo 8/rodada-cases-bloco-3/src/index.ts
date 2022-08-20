import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { produtoRouter } from "./routes/ProdutoRouter";
import { categoriaRouter } from "./routes/CategoriasRouter";
dotenv.config();
const app = express();
app.use(express.json());

app.post("/signup", userRouter)
app.post("/login", userRouter)
app.post("/tag", categoriaRouter)
app.post("/produto", produtoRouter)
app.get("/tag", categoriaRouter)
app.get("/produto", produtoRouter) 
app.get("/produto/pesquisa", produtoRouter)
app.put("/tag/:id", categoriaRouter)
app.put("/produto/:id", produtoRouter)
app.delete("/tag/:id", categoriaRouter)
app.delete("/produto/:id", produtoRouter)






const server = app.listen(process.env.PORT ||3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });