import { prisma } from "../db.MJC.js";

export const listarFacturaDetalleMJC = async (req, res) => {
    try {
        const detalles = await prisma.facturaDetalleMJC.findMany({
            include: {
                producto_id: true,
            },
        });
        if (detalles.length > 0) {
            return res.status(200).json(detalles);
        } else {
            return res.status(404).json({ message: "Detalles de factura no encontrados" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const crearFacturaDetalleMJC = async (req, res) => {
    try {
        const nuevoDetalle = await prisma.facturaDetalleMJC.create({
            data: req.body,
        });
        if (nuevoDetalle) {
            return res.status(201).json({ message: "Nuevo detalle de factura registrado con éxito" });
        } else {
            return res.status(400).json({ message: "No fue posible registrar el nuevo detalle de factura" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const editarFacturaDetalleMJC = async (req, res) => {
    try {
        const editarDetalle = await prisma.facturaDetalleMJC.update({
            where: {
                facd_numero: parseInt(req.params.facd_numero),
            },
            data: req.body,
        });
        if (editarDetalle) {
            return res.status(200).json(editarDetalle);
        } else {
            return res.status(400).json({ message: "No fue posible editar la información del detalle de factura" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const eliminarFacturaDetalleMJC = async (req, res) => {
    try {
        const borrado = await prisma.facturaDetalleMJC.delete({
            where: {
                facd_numero: parseInt(req.params.facd_numero),
            },
        });
        if (borrado) {
            return res.status(200).json({ message: "Detalle de factura eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No fue posible eliminar el detalle de factura" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const buscarFacturaDetalleMJC = async (req, res) => {
    try {
        const buscarDetalle = await prisma.facturaDetalleMJC.findFirst({
            where: {
                facd_numero: parseInt(req.params.facd_numero),
            },
            include: {
                producto_id: true,
            },
        });
        if (buscarDetalle) {
            return res.status(200).json(buscarDetalle);
        } else {
            return res.status(400).json({ message: "No fue posible encontrar información del detalle de factura" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
}