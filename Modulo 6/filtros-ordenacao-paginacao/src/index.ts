import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";

app.get("/allusers", getAllUsers)