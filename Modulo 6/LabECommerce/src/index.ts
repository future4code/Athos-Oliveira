
import  app  from "./app";
import { postUsers } from "./endpoints/users";
import { getUsers } from "./endpoints/users"
import { postProducts } from "./endpoints/products"
import { getProducts } from "./endpoints/products"
import { postPurchases } from "./endpoints/purchases"
import { getPurchases } from "./endpoints/purchases"


app.post("/users", postUsers)
app.get("/users", getUsers)
app.post("/products", postProducts)
app.get("/products", getProducts)
app.post("/purchases", postPurchases)
app.get("/users/:user_id/purchases", getPurchases)