import {prisma} from "../db.MJC.js"

export const RF12listarFacturasMJC = async (req, res) => {
    try {
        const facturas = await prisma.facturasMJC.findMany({
            include: {
                cliente: true, 
                vendedor: true, 
                factura_detalle: {
                    include: {
                        producto_id: true, 
                    },
                },
            },
        });

        if (facturas.length > 0) {
            return res.status(200).json(facturas);
        } else {
            return res.status(404).json({ message: "No hay facturas registradas" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const RF13listarMJC = async (req, res) => {
    try {
        const productos = await prisma.productosMJC.findMany({
            include: {
                factura_detalle: {
                    select: {
                        facd_cantidad: true 
                    }
                }
            }
        });

      
        const productosConUnidadesVendidas = productos.map(producto => {
            const unidadesVendidas = producto.factura_detalle.reduce((total, detalle) => total + detalle.facd_cantidad, 0);
            return {
                pro_codigo: producto.pro_codigo,
                pro_descripcion: producto.pro_descripcion,
                pro_valor: producto.pro_valor,
                pro_cantidad: producto.pro_cantidad,
                unidades_vendidas: unidadesVendidas 
            };
        });

        if (productosConUnidadesVendidas.length > 0) {
            return res.status(200).json(productosConUnidadesVendidas);
        } else {
            return res.status(404).json({ message: "No hay productos registrados" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const RF14listarProductosMasVendidosMJC = async (req, res) => {
    try {
        const productos = await prisma.productosMJC.findMany({
            include: {
                factura_detalle: {
                    select: {
                        facd_cantidad: true
                    }
                }
            }
        });

        
        const productosOrdenados = productos.map(producto => {
            const unidadesVendidas = producto.factura_detalle.reduce((total, detalle) => total + detalle.facd_cantidad, 0);
            return {
                nombre: producto.pro_descripcion, 
                unidades_vendidas: unidadesVendidas 
            };
        }).sort((a, b) => b.unidades_vendidas - a.unidades_vendidas);

        res.status(200).json(productosOrdenados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el sistema" });
    }
};

export const RF16listarProductosPorVendedorMJC = async (req, res) => {
    try {
        const vendedores = await prisma.vendedoresMJC.findMany({
            include: {
                factura: {
                    include: {
                        cliente: true,
                        factura_detalle: {
                            include: {
                                producto_id: true
                            }
                        }
                    }
                }
            }
        });

        const resultado = vendedores.map(vendedor => {
            const productosVendidos = {};

            vendedor.factura.forEach(factura => {
                factura.factura_detalle.forEach(detalle => {
                    const productoNombre = detalle.producto_id.pro_descripcion;
                    if (productosVendidos[productoNombre]) {
                        productosVendidos[productoNombre] += detalle.facd_cantidad;
                    } else {
                        productosVendidos[productoNombre] = detalle.facd_cantidad;
                    }
                });
            });

            return {
                vendedor: vendedor.venUsuario, // ID o nombre del vendedor
                productos: Object.entries(productosVendidos).map(([nombre, cantidad]) => ({
                    nombre,
                    cantidad
                }))
            };
        });

        res.status(200).json(resultado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el sistema" });
    }
};
