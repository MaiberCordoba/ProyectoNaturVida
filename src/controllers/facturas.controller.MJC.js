import { prisma } from "../db.MJC.js";

export const listarProductosMJC = async (req, res) => {
    try {
        const productos = await prisma.productosMJC.findMany();
        if (productos.length > 0) {
            return res.status(200).json(productos);
        } else {
            return res.status(404).json({ message: "Productos no encontrados" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const crearProductoMJC = async (req, res) => {
    try {
        const nuevoProducto = await prisma.productosMJC.create({
            data: req.body,
        });
        if (nuevoProducto) {
            return res.status(201).json({ message: "Nuevo producto registrado con éxito" });
        } else {
            return res.status(400).json({ message: "No fue posible registrar el nuevo producto" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const editarProductoMJC = async (req, res) => {
    try {
        const editarProducto = await prisma.productosMJC.update({
            where: {
                pro_codigo: parseInt(req.params.pro_codigo),
            },
            data: req.body,
        });
        if (editarProducto) {
            return res.status(200).json(editarProducto);
        } else {
            return res.status(400).json({ message: "No fue posible editar la información del producto" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const eliminarProductoMJC = async (req, res) => {
    try {
        const borrado = await prisma.productosMJC.delete({
            where: {
                pro_codigo: parseInt(req.params.pro_codigo),
            },
        });
        if (borrado) {
            return res.status(200).json({ message: "Producto eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No fue posible eliminar el producto" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const buscarProductoMJC = async (req, res) => {
    try {
        const buscarProducto = await prisma.productosMJC.findFirst({
            where: {
                pro_codigo: parseInt(req.params.pro_codigo),
            },
        });
        if (buscarProducto) {
            return res.status(200).json(buscarProducto);
        } else {
            return res.status(400).json({ message: "No fue posible encontrar información del producto" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const listarFacturasMJC = async (req, res) => {
    try {
        const facturas = await prisma.facturasMJC.findMany({
            include: {
                cliente: true,
                vendedor: true,
            },
        });
        if (facturas.length > 0) {
            return res.status(200).json(facturas);
        } else {
            return res.status(404).json({ message: "Facturas no encontradas" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const crearFacturaMJC = async (req, res) => {
    try {
        const nuevaFactura = await prisma.facturasMJC.create({
            data: req.body,
        });
        if (nuevaFactura) {
            return res.status(201).json({ message: "Nueva factura registrada con éxito" });
        } else {
            return res.status(400).json({ message: "No fue posible registrar la nueva factura" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const editarFacturaMJC = async (req, res) => {
    try {
        const editarFactura = await prisma.facturasMJC.update({
            where: {
                fac_numero: parseInt(req.params.fac_numero),
            },
            data: req.body,
        });
        if (editarFactura) {
            return res.status(200).json(editarFactura);
        } else {
            return res.status(400).json({ message: "No fue posible editar la información de la factura" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const eliminarFacturaMJC = async (req, res) => {
    try {
        const borrado = await prisma.facturasMJC.delete({
            where: {
                fac_numero: parseInt(req.params.fac_numero),
            },
        });
        if (borrado) {
            return res.status(200).json({ message: "Factura eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No fue posible eliminar la factura" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const buscarFacturaMJC = async (req, res) => {
    try {
        const buscarFactura = await prisma.facturasMJC.findFirst({
            where: {
                fac_numero: parseInt(req.params.fac_numero),
            },
            include: {
                cliente: true,
                vendedor: true,
            },
        });
        if (buscarFactura) {
            return res.status(200).json(buscarFactura);
        } else {
            return res.status(400).json({ message: "No fue posible encontrar información de la factura" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};
