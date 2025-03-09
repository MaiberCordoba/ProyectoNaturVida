import { Router } from "express";
import { 
  listarVendedoresMJC, 
  crearVendedorMJC, 
  editarVendedorMJC, 
  eliminarVendedorMJC, 
  buscarVendedorMJC 
} from "../controllers/vendedores.controller.MJC.js";
import verifyJWT from "../token/tokenController.MJC.js";

const routeVendedoresMJC = Router();

routeVendedoresMJC.get("/vendedores", verifyJWT, listarVendedoresMJC);
routeVendedoresMJC.post("/vendedores", verifyJWT, crearVendedorMJC);
routeVendedoresMJC.put("/vendedores/:venUsuario", verifyJWT, editarVendedorMJC);
routeVendedoresMJC.delete("/vendedores/:venUsuario", verifyJWT, eliminarVendedorMJC);
routeVendedoresMJC.get("/vendedores/:venUsuario", verifyJWT, buscarVendedorMJC);

export default routeVendedoresMJC;
