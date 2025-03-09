import { Router } from "express";
import { buscarClientesMJC, CrearClientesMJC, editarClientesMJC, eliminarClienteMJC, listarClientesMJC } from "../controllers/clientes.controller.MJC.js";

const routeClientMJC = Router();

routeClientMJC.get("/client",listarClientesMJC)
routeClientMJC.post("/client",CrearClientesMJC)
routeClientMJC.put("/client/:cl_documento",editarClientesMJC)
routeClientMJC.delete("/client/:cl_documento",eliminarClienteMJC)
routeClientMJC.get("/client/:cl_documento",buscarClientesMJC)


export default routeClientMJC;