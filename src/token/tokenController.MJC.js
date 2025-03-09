import { prisma } from "../db.MJC.js";
import jwt from "jsonwebtoken";

export const tokenVendedoresMJC = async (req, res) => {
    try {
        const { identificacion, password } = req.body;

        const vendedor = await prisma.vendedoresMJC.findFirst({
            where: {
                venUsuario: identificacion,
                venContraseña: password, 
            },
          
        });

        if (vendedor) {
          
            const token = jwt.sign(
                { user: vendedor },
                process.env.AUTH_SECRET,
                { expiresIn: process.env.AUTH_EXPIRES }
            );

            return res.status(200).json({ message: "Usuario autenticado", token });
        } else {
            return res.status(404).json({ message: "Usuario no autenticado" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error al autenticar usuario" });
    }
};
