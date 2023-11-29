import { Request, Response } from 'express';
import { FinalizeOrderService } from '../../services/order/FinalizeOrderService';

class FinalizeOrderController {
    async handler(req: Request, res: Response) {
        const {id_pedido} = req.body;
        console.log("Enviando pedido: " + id_pedido);
        const finalizeOrderService = new FinalizeOrderService();
        const order = await finalizeOrderService.execute({id_pedido});
        return res.json(order);
    }
}

export {FinalizeOrderController}