import { Router } from "express";
import verifyJWT from "../token/tokenController.MJC.js";
import { 
  listarProductosMJC, 
  crearProductoMJC, 
  editarProductoMJC, 
  eliminarProductoMJC, 
  buscarProductoMJC 
} from "../controllers/productos.controller.MJC.js";

const routeProductosMJC = Router();

routeProductosMJC.get("/productos", verifyJWT, listarProductosMJC);
routeProductosMJC.post("/productos", verifyJWT, crearProductoMJC);
routeProductosMJC.put("/productos/:pro_codigo", verifyJWT, editarProductoMJC);
routeProductosMJC.delete("/productos/:pro_codigo", verifyJWT, eliminarProductoMJC);
routeProductosMJC.get("/productos/:pro_codigo", verifyJWT, buscarProductoMJC);

export default routeProductosMJC;
