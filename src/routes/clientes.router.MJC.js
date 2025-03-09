import { Router } from "express";
import { listarClientesMJC } from "../controllers/clientes.controller.MJC.js";

const routeClientMJC = Router();

routeClientMJC.get("/client",listarClientesMJC)

export default routeClientMJC;