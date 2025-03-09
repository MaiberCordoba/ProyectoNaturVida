//importaciones
import express from "express";
import routeClientMJC from "./src/routes/clientes.router.MJC.js";
import routerToken from "./src/token/tokenRouter.MJC.js";
import routeVendedoresMJC from "./src/routes/vendedores.router.MJC.js";

//inicializaciones
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//ruta clientes
app.use("/api", routeClientMJC);

//token
app.use("/api",routerToken)

//vendedores
app.use("/api",routeVendedoresMJC)


//servidor
app.listen(3000,()=>{
    console.log("3000")
})