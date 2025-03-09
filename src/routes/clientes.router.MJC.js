import { Router } from "express";
import { buscarClientesMJC, CrearClientesMJC, editarClientesMJC, eliminarClienteMJC, listarClientesMJC } from "../controllers/clientes.controller.MJC.js";
import verifyJWT from "../token/tokenController.MJC.js";

const routeClientMJC = Router();

routeClientMJC.get("/client", verifyJWT, listarClientesMJC)
routeClientMJC.post("/client", verifyJWT, CrearClientesMJC)
routeClientMJC.put("/client/:cl_documento", verifyJWT, editarClientesMJC)
routeClientMJC.delete("/client/:cl_documento", verifyJWT, eliminarClienteMJC)
routeClientMJC.get("/client/:cl_documento", verifyJWT, buscarClientesMJC)


export default routeClientMJC;