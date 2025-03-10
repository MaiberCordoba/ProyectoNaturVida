import { Router } from "express";
import { RF12listarFacturasMJC, RF13listarMJC,  RF14listarProductosMasVendidosMJC,  RF16listarProductosPorVendedorMJC } from "./consultas.controller.MJC.js";

const rutaConsultas = Router();

rutaConsultas.get("/RF12",RF12listarFacturasMJC)
rutaConsultas.get("/RF13",RF13listarMJC)
rutaConsultas.get("/RF14",RF14listarProductosMasVendidosMJC)
rutaConsultas.get("/RF16",RF16listarProductosPorVendedorMJC)


export default rutaConsultas;