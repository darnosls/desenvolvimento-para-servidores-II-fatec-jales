import { Request, Response } from 'express';
import { RemoveItemService } from '../../services/order/RemoveItemService';

class RemoveItemController {
    async handler(req: Request, res: Response) {
        const id_item = req.query.id_item as string;
        console.log("Removendo pedido: " + id_item);
        const removeItemService = new RemoveItemService();

        const item = await removeItemService.execute({id_item});

        return res.json(item);

    }
}

export {RemoveItemController};