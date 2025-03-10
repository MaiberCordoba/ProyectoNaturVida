import { Router } from "express";
import verifyJWT from "../token/tokenController.MJC.js";
import { 
  listarFacturaDetalleMJC, 
  crearFacturaDetalleMJC, 
  editarFacturaDetalleMJC, 
  eliminarFacturaDetalleMJC, 
  buscarFacturaDetalleMJC 
} from "../controllers/facturaDetalle.controller.MJC.js";

const routeFacturaDetalleMJC = Router();

routeFacturaDetalleMJC.get("/factura-detalle", verifyJWT, listarFacturaDetalleMJC);
routeFacturaDetalleMJC.post("/factura-detalle", verifyJWT, crearFacturaDetalleMJC);
routeFacturaDetalleMJC.put("/factura-detalle/:facd_numero", verifyJWT, editarFacturaDetalleMJC);
routeFacturaDetalleMJC.delete("/factura-detalle/:facd_numero", verifyJWT, eliminarFacturaDetalleMJC);
routeFacturaDetalleMJC.get("/factura-detalle/:facd_numero", verifyJWT, buscarFacturaDetalleMJC);

export default routeFacturaDetalleMJC;
