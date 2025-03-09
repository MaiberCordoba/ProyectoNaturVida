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
