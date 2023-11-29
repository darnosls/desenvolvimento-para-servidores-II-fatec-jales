import { Request, Response } from 'express';
import { RemoveOrderService } from '../../services/order/RemoveOrderService';

class RemoveOrderController {
    async handler(req: Request, res: Response) {
        const id_pedido = req.query.id_pedido as string;
        console.log("Removendo pedido: " + id_pedido);
        const removeOrderService = new RemoveOrderService();

        const pedido = await removeOrderService.execute({id_pedido});

        return res.json(pedido);

    }
}

export {RemoveOrderController};