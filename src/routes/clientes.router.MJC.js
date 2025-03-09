import { Router } from "express";
import { CrearClientesMJC, listarClientesMJC } from "../controllers/clientes.controller.MJC.js";

const routeClientMJC = Router();

routeClientMJC.get("/client",listarClientesMJC)
routeClientMJC.post("/client",CrearClientesMJC)

export default routeClientMJC;