import prismaClient from "../../prisma";

interface OrderRequest{
    id_pedido: string;
}

interface Produto {
    nome: string;
    preco: string;
    [others: string]: any;
}
interface Item{
    produto: Produto; 
    quantidade: number
    [others: string]: any;
}

interface OrderDetailsResponse {
    [key: string]: string | number;
}


class OrderDetailsService {
    async execute({id_pedido}: OrderRequest ) {
        const orderDetails = await prismaClient.pedido.findMany({
            where: {
                id: id_pedido
            },
            include: {
                itens: {
                    select: {
                        produto: {
                            select: {
                                nome: true,
                                preco: true
                            }
                        },
                        quantidade: true
                    }
                },
            }
        })

        let itens: Item[];
        orderDetails.forEach((item, index) => {
            console.log(item.itens)
            itens = item.itens;
            
        })

        let total: number = 0;
        itens.forEach(iten => {
            total = total + (Number.parseInt(iten.produto.preco) * iten.quantidade)
        })

         return {orderDetails, "total": total};
    }
}

export {OrderDetailsService}