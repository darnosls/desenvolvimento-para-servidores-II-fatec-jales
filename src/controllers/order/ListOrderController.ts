import { Request, Response } from 'express';
import { ListOrderService } from '../../services/order/ListOrderService';


class ListOrderController {
    async handler(req: Request, res: Response) {
        console.log("Iniciando listagem de produtos por categoria")

        const listOrder = new ListOrderService();

        const order = await listOrder.execute();

        return res.json(order);
    }
}

export {ListOrderController}