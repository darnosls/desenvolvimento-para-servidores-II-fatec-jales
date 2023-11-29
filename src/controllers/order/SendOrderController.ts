import { Request, Response } from 'express';
import { SendOrderService } from '../../services/order/SendOrderService';

class SendOrderController {
    async handler(req: Request, res: Response) {
        const {id_pedido} = req.body;
        console.log("Enviando pedido: " + id_pedido);
        const sendOrderService = new SendOrderService();
        const order = await sendOrderService.execute({id_pedido});
        return res.json(order);
    }
}

export {SendOrderController}