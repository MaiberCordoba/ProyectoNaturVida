import { Router } from "express";
import { tokenVendedoresMJC } from "./tokenController.MJC.js";

const routerToken = Router();

routerToken.post("/login",tokenVendedoresMJC)

export default routerToken;