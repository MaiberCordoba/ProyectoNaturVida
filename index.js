//importaciones
import express from "express";
import routeClientMJC from "./src/routes/clientes.router.MJC.js";
import routerToken from "./src/token/tokenRouter.MJC.js";
import routeVendedoresMJC from "./src/routes/vendedores.router.MJC.js";
import routeProductosMJC from "./src/routes/productos.router.MJC.js";
import routeFacturasMJC from "./src/routes/facturas.router.MJC.js";
import routeFacturaDetalleMJC from "./src/routes/facturaDetalle.router.MJC.js";
import rutaConsultas from "./src/consultas/consultas.router.MJC.js";

//inicializaciones
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//configurar el motor de plantilla ejs
app.set("views", "./src/views");
app.set("view engine", "ejs");

//renderizando para que al ingresar la pagina redireccione a la documentacion
app.get("/", (req, res) => {
  res.render("documents.ejs");
});


//ruta clientes
app.use("/api", routeClientMJC);

//token
app.use("/api",routerToken)

//vendedores
app.use("/api",routeVendedoresMJC)

//productos
app.use("/api",routeProductosMJC)

//facturas
app.use("/api",routeFacturasMJC)

//facturasDetalles
app.use("/api",routeFacturaDetalleMJC)

//consultas
app.use("/consultas",rutaConsultas)

//servidor
app.listen(3000,()=>{
    console.log("3000")
})