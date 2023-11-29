import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

interface OrderRequest{
    id_pedido: string
}

class FinalizeOrderService{
    async execute({id_pedido}: OrderRequest ) {
        const order = await prismaClient.pedido.update({
            where: {
                id: id_pedido
            },
            data: {
                status: true
            }
        })
        return order;
    }
}

export {FinalizeOrderService}