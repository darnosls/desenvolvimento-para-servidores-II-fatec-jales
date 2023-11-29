import { Request, Response } from 'express';
import { OrderDetailsService } from '../../services/order/OrderDetailsService';


class OrderDetailsController {
    async handler(req: Request, res: Response) {
        console.log("Iniciando detalhes do pedido")
        const id_pedido = req.query.id as string;
        const listOrder = new OrderDetailsService();

        const order = await listOrder.execute({id_pedido});

        return res.json(order);
    }
}

export {OrderDetailsController}