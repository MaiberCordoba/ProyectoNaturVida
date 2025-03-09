import { prisma } from "../db.MJC.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

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

const verifyJWT = async(req,res,next) => {
    try{
        const token = req.headers['authorization']?.split(" ")[1];
        if(!token){
            return res.status(401).json({msg:"Token not provided"})
        }
        const verified = jwt.verify(token,process.env.AUTH_SECRET);
        if(!verified){
            return res.status(401).json({msg:"Invalid token"});
        };
        req.user = verified;
        next();
    }
    catch(error){
        switch(error.message){
            case 'invalid signature': {
                return res.status(401).json({msg:"Invalid token"});
            }
            case 'jwt expired': {
                return res.status(401).json({msg:"Token expired"});
            }
            case 'jwt malformed': {
                return res.status(401).json({msg:"Token malformed"});
            }
            case 'invalid token': {
                return res.status(401).json({msg:"Invalid token"});
            }
            default: {
                res.status(500).json({msg:"Error authenticating"});
                console.error(error);
            }
        }
    }
};

export default verifyJWT;
