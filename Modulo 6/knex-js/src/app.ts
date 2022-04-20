import express, { Request, Response } from 'express';
import cors from "cors";
import { AddressInfo } from "net";
import { clientes } from './data';
const app = express();

app.use(express.json());
app.use(cors());

app.get("/contas", (request: Request, response: Response) => {
	let contas = clientes.map((client) => client)
	response.status(200).send(contas)

})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app