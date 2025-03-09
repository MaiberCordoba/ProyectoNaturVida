import { prisma } from "../db.MJC.js";

export const listarClientesMJC = async (req,res) =>{
    try {
        const clientes = await prisma.clientesMJC.findMany()
        if (clientes.length > 0){
            return res.status(200).json(clientes)
        }else{
            return res.status(404).json({message:"clientes no encontrados"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"sistema"})
    }
}