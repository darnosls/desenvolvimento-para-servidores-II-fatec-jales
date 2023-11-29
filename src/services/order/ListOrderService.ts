import prismaClient from "../../prisma";



class ListOrderService {
    async execute() {
        const order = await prismaClient.pedido.findMany({
            where: {
                status:false,
                rascunho:false
            },
            select: {
                id:true,
                mesa:true,
                rascunho:true,
                nome:true,
                status:true,
                itens:true
            }
        })

        return order;
    }
}

export {ListOrderService}