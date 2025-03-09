import { prisma } from "../db.MJC.js";

export const listarVendedoresMJC = async (req, res) => {
    try {
        const vendedores = await prisma.vendedoresMJC.findMany();
        if (vendedores.length > 0) {
            return res.status(200).json(vendedores);
        } else {
            return res.status(404).json({ message: "Vendedores no encontrados" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const crearVendedorMJC = async (req, res) => {
    try {
        const nuevoVendedor = await prisma.vendedoresMJC.create({
            data: req.body,
        });
        if (nuevoVendedor) {
            return res.status(201).json({ message: "Nuevo vendedor registrado con éxito" });
        } else {
            return res.status(400).json({ message: "No fue posible registrar el nuevo vendedor" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const editarVendedorMJC = async (req, res) => {
    try {
        const editarVendedor = await prisma.vendedoresMJC.update({
            where: {
                venUsuario: parseInt(req.params.venUsuario),
            },
            data: req.body,
        });
        if (editarVendedor) {
            return res.status(200).json(editarVendedor);
        } else {
            return res.status(400).json({ message: "No fue posible editar la información del vendedor" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const eliminarVendedorMJC = async (req, res) => {
    try {
        const borrado = await prisma.vendedoresMJC.delete({
            where: {
                venUsuario: parseInt(req.params.venUsuario),
            },
        });
        if (borrado) {
            return res.status(200).json({ message: "Vendedor eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No fue posible eliminar el vendedor" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const buscarVendedorMJC = async (req, res) => {
    try {
        const buscarVendedor = await prisma.vendedoresMJC.findFirst({
            where: {
                venUsuario: parseInt(req.params.venUsuario),
            },
        });
        if (buscarVendedor) {
            return res.status(200).json(buscarVendedor);
        } else {
            return res.status(400).json({ message: "No fue posible encontrar información del vendedor" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};
