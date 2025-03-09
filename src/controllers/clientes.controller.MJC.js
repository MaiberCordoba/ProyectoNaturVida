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

export const CrearClientesMJC  = async(req,res) =>{
    try {
        const nuevoCliente = await prisma.clientesMJC.create({
            data: req.body,
        })
        if (nuevoCliente){
            return res.status(201).json({message:"nuevo cliente registrado cone exito"})
        }else{
            return res.status(400).json({message:"no fue posible registrar nuevo cliente"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"sistema"})
    }
}

export const editarClientesMJC = async (req,res)=>{
    try {
        const editarCliente = await prisma.clientesMJC.update({
            where:{
                cl_documento: parseInt(req.params.cl_documento)
            },
            data: req.body,
        });
        if (editarCliente) {
            return res.status(200).json(editarCliente)
        }else{
            return res.status(400).json({message:"no fue posible editar info del cliente"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"sistema"})
    }
}

export const eliminarClienteMJC = async (req,res)=>{
    try {
        const borrado = await prisma.clientesMJC.delete({
            where:{
                cl_documento: parseInt(req.params.cl_documento)
            }
        })
        if (borrado) {
            return res.status(200).json({ message: "Cliente eliminado con éxito" });
        }
        else{
            return res.status(404).json({ message: "no fue posible eliminar con exito" });
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"sistema"})
    }
}

export const buscarClientesMJC = async (req,res)=>{
    try {
        const buscarCliente = await prisma.clientesMJC.findFirst({
            where:{
                cl_documento: parseInt(req.params.cl_documento)
            },
        });
        if (buscarCliente) {
            return res.status(200).json(buscarCliente)
        }else{
            return res.status(400).json({message:"no fue posible encontrar info del cliente"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"sistema"})
    }
}


