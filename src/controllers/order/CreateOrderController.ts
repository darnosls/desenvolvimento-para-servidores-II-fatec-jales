import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService';

class CreateOrderController {
    async handler(req: Request, res: Response) {
        const {mesa, nome} = req.body;
        console.log("Iniciando pedido da mesa: " + mesa);
        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({ nome, mesa });
        return res.json({order})

    }
}

export {CreateOrderController};