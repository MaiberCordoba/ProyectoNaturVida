//importaciones
import express from "express";
import routeClientMJC from "./src/routes/clientes.router.MJC.js";

//inicializaciones
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//ruta clientes
app.use("/api", routeClientMJC);


//servidor
app.listen(3000,()=>{
    console.log("3000")
})