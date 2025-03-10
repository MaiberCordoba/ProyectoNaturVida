import { Router } from "express";
import verifyJWT from "../token/tokenController.MJC.js";
import { 
  listarFacturasMJC, 
  crearFacturaMJC, 
  editarFacturaMJC, 
  eliminarFacturaMJC, 
  buscarFacturaMJC 
} from "../controllers/facturas.controller.MJC.js";

const routeFacturasMJC = Router();

routeFacturasMJC.get("/facturas", verifyJWT, listarFacturasMJC);
routeFacturasMJC.post("/facturas", verifyJWT, crearFacturaMJC);
routeFacturasMJC.put("/facturas/:fac_numero", verifyJWT, editarFacturaMJC);
routeFacturasMJC.delete("/facturas/:fac_numero", verifyJWT, eliminarFacturaMJC);
routeFacturasMJC.get("/facturas/:fac_numero", verifyJWT, buscarFacturaMJC);

export default routeFacturasMJC;
